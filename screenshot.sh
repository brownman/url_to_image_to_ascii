#!/usr/bin/env bash

set +e
node server.js &
sleep 7
url=${1:-'http://google.com'}

while :;do
curl 0.0.0.0:3000/screenshot?url=$url 1>/tmp/out 2>/tmp/err && break || true
cat /tmp/out
cat /tmp/err
sleep 1;
done



echo good bye!
