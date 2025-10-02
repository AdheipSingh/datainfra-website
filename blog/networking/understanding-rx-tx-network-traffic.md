---
slug: understanding-rx-tx-network-traffic-direction
title: Understanding RX vs TX - Making Sense of Network Traffic Direction with Real Examples
description: Learn the fundamentals of RX (receive) and TX (transmit) metrics in network monitoring through real-world Mellanox ONYX switch examples, common traffic patterns, and practical monitoring scripts
url: understanding-rx-tx-network-traffic-direction
authors: [Adheip Singh]
date: 2025-10-02T10:00
tags: [networking, monitoring, infrastructure, troubleshooting, network-analysis, mellanox, nvidia, computer-vision]
---

# Understanding RX vs TX: Making Sense of Network Traffic Direction with Real Examples

I was lucky to work on a computer vision setup which involved NVIDIA RTX 6000 GPUs, Mellanox ONYX switches, and high-resolution cameras. The system was designed for real-time video capture and processing, pushing massive amounts of data through our network infrastructure. Here's a gist of debugging Mellanox switch metrics that led to some surprising discoveries about network traffic flow.

When monitoring network equipment like switches, routers, or network cards, you'll constantly encounter two metrics: RX and TX. These simple abbreviations are fundamental to understanding how data flows through your network, yet they often cause confusion. Let's demystify them with real-world examples from our production Mellanox ONYX switch.

<!--truncate-->

## The Basics: What Do RX and TX Mean?

**RX = Receive** - Data coming INTO a network port
**TX = Transmit** - Data going OUT of a network port

Think of each network port like a doorway. RX counts everyone walking in, while TX counts everyone walking out. Simple enough, right? The confusion often comes when trying to understand what these patterns mean for your specific setup.

## Real Network Example: Mellanox ONYX Switch Analysis

Let's look at actual output from a production Mellanox ONYX switch to see how this works in practice. First, let's check which ports are actually up:

```bash
curl -k -b cookie.txt -X POST https://192.168.3.5/admin/launch?script=json&template=json-request&action=json-login \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "show interfaces ethernet description",
    "execution_type": "sync"
  }'
```

Output shows our active ports:
```json
{
    "Eth1/1": {
        "Operational state": "Up",
        "Speed": "25G"
    },
    "Eth1/7": {
        "Operational state": "Up", 
        "Speed": "25G"
    },
    "Eth1/19": {
        "Operational state": "Up",
        "Speed": "100G"
    },
    "Eth1/21": {
        "Operational state": "Up",
        "Speed": "100G"
    }
}
```

## Reading Traffic Patterns from Real Data

Now let's examine the actual traffic statistics:

### Port 7: The Collector (25G link)
```json
"Eth1/7": {
    "Rx": {
        "packets": "6078365878",      // 6 billion packets IN
        "bytes": "46755253366062",    // 46.7 TB received
        "packets Jumbo": "6047872646"  // Mostly jumbo frames (video?)
    },
    "Tx": {
        "packets": "21008230",         // Only 21 million OUT
        "bytes": "3877663298"          // Just 3.8 GB transmitted
    }
}
```

This port receives 289× more data than it sends - classic collector pattern!

### Port 19: The Distributor (100G link)
```json
"Eth1/19": {
    "Rx": {
        "packets": "5619576",          // 5.6 million IN
        "bytes": "370489758"           // Only 370 MB received
    },
    "Tx": {
        "packets": "41154237203",      // 41 BILLION OUT!
        "bytes": "316279712716706"     // 316 TB transmitted!
    }
}
```

This port transmits 7,324× more packets than it receives - a massive distribution hub!

## Why Direction Matters: Full-Duplex Explained

Every network port has two independent data paths. When we see "100G" port speed, that means:
- 100 Gbps receiving capacity AND
- 100 Gbps transmitting capacity
- Total theoretical throughput: 200 Gbps bidirectional

## Common Misconceptions Revealed

Initially, you might assume camera-to-server traffic would look like:
- Camera ports: High TX (sending video)
- Server ports: High RX (receiving video)

But our real data shows the opposite! Here's the actual traffic flow:

```
Port 7 (25G) ──RX(6B packets)──> Switch ──TX(41B packets)──> Port 19 (100G)
                                    └──TX(2.6B packets)──> Port 21 (100G)
```

This suggests Port 7 is receiving from an aggregation point, and Ports 19/21 are distributing to multiple endpoints.

## Monitoring in Action: Getting Real-Time Metrics

Here's how to monitor these metrics on your switch:

```bash
# Get current counters for all interfaces
curl -k -b cookie.txt -X POST https://192.168.3.5/admin/launch?script=json&template=json-request&action=json-login \
  -H "Content-Type: application/json" \
  -d '{
    "cmd": "show interfaces ethernet counters",
    "execution_type": "sync"
  }'
```

## Calculating Actual Utilization

With the data we collected, let's calculate real bandwidth usage:

**Port 19 (100G capacity):**
- TX: 316,279,712,716,706 bytes total
- If accumulated over 30 days: ~97 Gbps average
- Near maximum capacity!

**Port 7 (25G capacity):**  
- RX: 46,755,253,366,062 bytes total
- If accumulated over 30 days: ~14.4 Gbps average
- Using 58% of link capacity

## Key Metrics to Monitor

From our actual switch output, focus on these fields:

```json
{
    "Primary Metrics": {
        "packets": "Total packet count",
        "bytes": "Total byte count"
    },
    "Health Indicators": {
        "error packets": "0",  // Good - no errors
        "discard packets": "0", // Good - no drops
        "fcs errors": "0"       // Good - no corruption
    },
    "Traffic Types": {
        "unicast packets": "41123912532",  // Point-to-point
        "multicast packets": "30090769",    // One-to-many (video streams?)
        "broadcast packets": "233902"       // Network announcements
    }
}
```

## Practical Monitoring Script

To continuously monitor RX/TX rates:

```bash
# Poll every 30 seconds and calculate rate
PREV_RX=0
PREV_TX=0

while true; do
    # Get current counters (example for Port 19)
    CURR_RX=$(curl -sk ... | jq '.["Eth1/19"][0]["Rx"][0]["bytes"]')
    CURR_TX=$(curl -sk ... | jq '.["Eth1/19"][1]["Tx"][0]["bytes"]')
    
    # Calculate rate in Mbps
    RX_RATE=$(( ($CURR_RX - $PREV_RX) * 8 / 30 / 1000000 ))
    TX_RATE=$(( ($CURR_TX - $PREV_TX) * 8 / 30 / 1000000 ))
    
    echo "Port 19: RX=${RX_RATE} Mbps, TX=${TX_RATE} Mbps"
    
    PREV_RX=$CURR_RX
    PREV_TX=$CURR_TX
    sleep 30
done
```

## The PTP Clue: Understanding the Context

Our switch configuration reveals another important detail:

```bash
"show running-config" output:
##
## PTP protocol
##
   protocol ptp
   interface ethernet 1/1 ptp enable
   interface ethernet 1/7 ptp enable
   interface ethernet 1/19 ptp enable
```

PTP (Precision Time Protocol) on all ports indicates this is a **video production environment** where precise timing synchronization is critical for frame-accurate video capture.

## Key Takeaways from Real Data

1. **Don't assume traffic direction** - Our "video" ports showed opposite patterns than expected
2. **Jumbo frames indicate video** - 6 billion jumbo packets on Port 7 suggest video traffic
3. **100G ports as distributors** - Both 100G ports primarily transmit, indicating fan-out architecture
4. **Monitor both directions** - Full-duplex means both paths matter for capacity planning
5. **Context matters** - PTP configuration revealed this was video production, explaining the traffic patterns

Remember: These RX/TX metrics are always from the port's perspective. When troubleshooting, physically trace cables or clear counters to see fresh traffic patterns rather than historical accumulation.

---

*Pro tip: If your switch API is slow (>1 second response time), use SNMP polling instead - it's 10-100x faster for retrieving interface counters!*