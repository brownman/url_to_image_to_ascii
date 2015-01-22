#!/usr/bin/env bash

set +e
url=${1:-'http://google.com'}

while :;do
curl 0.0.0.0:3000/screenshot?url=$url 1>/tmp/out 2>/tmp/err && break || true
sleep 1;
done

cat /tmp/out
cat /tmp/err

echo good bye!
