#!/usr/bin/env bash
#
# 5-minute NCCL fallback test - baaz.dev
#
# Answers one question: is NCCL actually using RDMA (NET/IB), or has it
# silently fallen back to TCP sockets (NET/Socket)? Many "working" clusters
# run every collective over TCP without anyone noticing - training still
# runs, just several times slower than the hardware allows.
#
# Usage (single node, sanity check of the RDMA stack):
#   bash nccl-fallback-test.sh
#
# Usage (the real test - run the same command on BOTH nodes):
#   MASTER_ADDR=<node0-ip> NNODES=2 NODE_RANK=0 bash nccl-fallback-test.sh   # on node 0
#   MASTER_ADDR=<node0-ip> NNODES=2 NODE_RANK=1 bash nccl-fallback-test.sh   # on node 1
#
# Requirements: python3 with PyTorch + CUDA on each node. No nccl-tests
# build needed - this uses a tiny torchrun all_reduce.
#
# On Kubernetes: run it inside your training image on two pods that have
# the RDMA network attached (the same pods your jobs run in - testing from
# the host proves nothing about the pod data path).

set -u

MASTER_ADDR="${MASTER_ADDR:-127.0.0.1}"
MASTER_PORT="${MASTER_PORT:-29517}"
NNODES="${NNODES:-1}"
NODE_RANK="${NODE_RANK:-0}"
LOGFILE="$(mktemp /tmp/nccl-fallback-test.XXXXXX.log)"

echo "== NCCL fallback test =="
echo

# --- Step 1: is there an RDMA-capable device visible at all? -----------------
echo "--- Step 1: RDMA devices visible to this environment"
if command -v ibv_devinfo >/dev/null 2>&1; then
    if ibv_devinfo 2>/dev/null | grep -q "hca_id"; then
        ibv_devinfo 2>/dev/null | grep -E "hca_id|link_layer|state" | sed 's/^/    /'
    else
        echo "    No RDMA devices found by ibv_devinfo."
        echo "    NCCL cannot use RDMA here - everything below will confirm the TCP fallback."
    fi
else
    echo "    ibv_devinfo not installed (package: rdma-core / libibverbs-utils)."
    echo "    Continuing - the NCCL log in step 2 is the authoritative answer anyway."
fi
echo

# --- Step 2: run a tiny all_reduce with NCCL_DEBUG=INFO ----------------------
echo "--- Step 2: running a small all_reduce with NCCL_DEBUG=INFO"
echo "    (nodes: ${NNODES}, this node rank: ${NODE_RANK}, master: ${MASTER_ADDR}:${MASTER_PORT})"

PYSCRIPT=$(mktemp /tmp/nccl-allreduce.XXXXXX.py)
cat > "$PYSCRIPT" <<'EOF'
import os, torch, torch.distributed as dist
dist.init_process_group("nccl")
rank = dist.get_rank()
torch.cuda.set_device(rank % torch.cuda.device_count())
# 100 MB tensor: big enough to force the network path between nodes
t = torch.ones(25 * 1024 * 1024, device="cuda")
torch.cuda.synchronize(); dist.barrier()
start = torch.cuda.Event(enable_timing=True); end = torch.cuda.Event(enable_timing=True)
start.record()
for _ in range(20):
    dist.all_reduce(t)
end.record(); torch.cuda.synchronize()
if rank == 0:
    ms = start.elapsed_time(end) / 20
    # ring all_reduce moves ~2x the payload; report effective bus bandwidth
    gbps = (2 * t.numel() * 4 * 8) / (ms / 1000) / 1e9
    print(f"RESULT avg all_reduce(100MB): {ms:.1f} ms  (~{gbps:.1f} Gb/s bus bandwidth)")
dist.destroy_process_group()
EOF

NCCL_DEBUG=INFO NCCL_DEBUG_SUBSYS=INIT,NET \
torchrun --nnodes="$NNODES" --nproc_per_node=1 --node_rank="$NODE_RANK" \
    --master_addr="$MASTER_ADDR" --master_port="$MASTER_PORT" \
    "$PYSCRIPT" 2>&1 | tee "$LOGFILE" | grep -E "RESULT|NCCL INFO (NET/|Using network)" | sed 's/^/    /'
rm -f "$PYSCRIPT"
echo

# --- Step 3: verdict ---------------------------------------------------------
echo "--- Step 3: verdict"
if grep -q "via NET/IB" "$LOGFILE" || grep -qE "Using network IB" "$LOGFILE"; then
    echo "    OK: NCCL is using the RDMA path (NET/IB)."
    echo "    Cross-check: bandwidth above should be a large fraction of your link rate."
elif grep -qE "via NET/Socket|Using network Socket" "$LOGFILE"; then
    echo "    FALLBACK DETECTED: NCCL is running collectives over TCP (NET/Socket)."
    echo "    Your GPUs are waiting on the kernel network stack for every gradient sync."
    echo "    Common causes: no RDMA NIC on the pod network, wrong NCCL_IB_GID_INDEX,"
    echo "    missing GPUDirect/nvidia-peermem, or ACS/IOMMU blocking peer access."
elif [ "$NNODES" = "1" ]; then
    echo "    Single-node run: NCCL stayed on NVLink/P2P/SHM, so the network path was"
    echo "    not exercised. Re-run across 2 nodes (see usage at top) for the real answer."
else
    echo "    Could not determine the transport from the log. Full output: $LOGFILE"
fi
echo
echo "Full NCCL log kept at: $LOGFILE"
echo "If this found a fallback and you want help fixing it: https://baaz.dev/audit"
