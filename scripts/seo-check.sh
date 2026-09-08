#!/usr/bin/env bash
# usage: scripts/seo-check.sh https://baaz.dev   (or the vercel preview URL for status checks only; host checks need prod)
set -u
BASE="${1:-https://baaz.dev}"; fail=0
chk() { # url  expected-code-regex  [expected-redirect-prefix]
  local url="$1" want="$2" loc="${3:-}" out code red
  out=$(curl -s -o /dev/null -w '%{http_code}|%{redirect_url}' "$url"); code="${out%%|*}"; red="${out#*|}"
  if [[ "$code" =~ ^($want)$ ]] && { [[ -z "$loc" ]] || [[ "$red" == "$loc"* ]]; }; then echo "ok   $url -> $code ${red:+-> $red}"
  else echo "FAIL $url -> $code ${red:+-> $red}   (want $want ${loc:+-> $loc})"; fail=1; fi
}
echo "## status / redirects"
chk "$BASE/" 200
chk "$BASE/demo" 301 "$BASE/contact"
chk "$BASE/demo/" 301 "$BASE/contact"
chk "$BASE/about/" 308 "$BASE/about"
chk "$BASE/about" 200
chk "$BASE/services" 200
chk "$BASE/services/gpu-networking" 200
chk "$BASE/blog" 200
chk "$BASE/blog/rss.xml" 200
chk "$BASE/blog/atom.xml" 200
chk "$BASE/robots.txt" 200
chk "$BASE/sitemap.xml" 200
chk "$BASE/no-such-page-xyz" 404
chk "$BASE/docs/developer-documentation" 404
if [[ "$BASE" == "https://baaz.dev" ]]; then
  chk "http://baaz.dev/" "301|308" "https://baaz.dev/"
  chk "https://www.baaz.dev/" "301|308" "https://baaz.dev/"
  chk "https://www.baaz.dev/services/gpu-networking" "301|308" "https://baaz.dev/services/gpu-networking"
fi
echo "## headers"
curl -sI "$BASE/" | grep -i 'x-robots-tag' && { echo "FAIL X-Robots-Tag present"; fail=1; } || echo "ok   no X-Robots-Tag"
gb=$(curl -s -o /dev/null -w '%{http_code}' -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$BASE/")
[[ "$gb" == "200" ]] && echo "ok   Googlebot UA -> 200" || { echo "FAIL Googlebot UA -> $gb"; fail=1; }
echo "## sitemap entries: 200, no redirect, exactly one self-canonical, robots meta shown"
while read -r u; do
  out=$(curl -s -o /tmp/p.html -w '%{http_code}|%{redirect_url}' "$u"); code="${out%%|*}"; red="${out#*|}"
  can=$(grep -o '<link rel="canonical" href="[^"]*"' /tmp/p.html | head -1 | sed 's/.*href="//;s/"$//')
  n=$(grep -o '<link rel="canonical"' /tmp/p.html | wc -l | tr -d ' ')
  rob=$(grep -o '<meta name="robots" content="[^"]*"' /tmp/p.html | head -1)
  if [[ "$code" == "200" && -z "$red" && "$can" == "$u" && "$n" == "1" ]]; then echo "ok   $u ${rob}"; else echo "FAIL $u code=$code red=$red canonical=$can n=$n"; fail=1; fi
done < <(curl -s "$BASE/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g')
exit $fail
