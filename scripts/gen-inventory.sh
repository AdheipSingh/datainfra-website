#!/usr/bin/env bash
# One-off: seed seo/inventory/legacy-urls.csv with a live PRE-deploy prod snapshot.
set -u
cd "$(dirname "$0")/.."
OUT=seo/inventory/legacy-urls.csv
echo "url,source,last_seen,live_status,live_location,action" > "$OUT"
while IFS='|' read -r path src seen action; do
  [ -z "$path" ] && continue
  full="https://baaz.dev${path}"
  res=$(/usr/bin/curl -s -m 10 -o /dev/null -w '%{http_code}|%{redirect_url}' "$full")
  code="${res%%|*}"; loc="${res#*|}"
  echo "${full},${src},${seen},${code},${loc},${action}" >> "$OUT"
done <<'EOF'
/demo|git 347750f|2026-01-18|301:/contact
/documentation|git 347750f|2026-01-18|404
/docs/developer-documentation|git 347750f|2026-01-18|404
/docs/shared-infra/introduction|git 347750f|2026-01-18|404
/docs/api/overview|git 347750f|2026-01-18|404
/docs/api/dataplanes|git 347750f|2026-01-18|404
/docs/api/tenant-infra|git 347750f|2026-01-18|404
/docs/api/tenants|git 347750f|2026-01-18|404
/docs/api/applications|git 347750f|2026-01-18|404
/docs/api/customers|git 347750f|2026-01-18|404
/blog/accelerating-real-time-analytics-infrastructure-on-kubernetes|git 6cb4c5f|2024-08-05|404
/blog/dynamic-data-schemas-pinot-schema-evolution-state-management-on-kubernetes|git 6cb4c5f|2024-08-05|404
/blog/setting-up-apache-pinot-on-kubernetes-in-under-15-minutes|git 648621a|2024-08-15|404
EOF
cat "$OUT"
