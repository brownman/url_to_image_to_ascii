#!/usr/bin/env bash

node server.js &
sleep 7
url=${1:-'http://google.com'}

while :;do
curl 0.0.0.0:3000/screenshot?url=$url 1>/tmp/out 2>/tmp/err && break || true

sleep 1;
done
echo /tmp/out
echo ------------
head -1 /tmp/out
echo /tmp/err
echo ------------
head -1 /tmp/err

echo good bye!
