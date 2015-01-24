#!/usr/bin/env bash

node server.js &
sleep 7
url0='http://google.com'
url1=''http://dph.am/jscii/test/image.jpg''
url=${1:-\'$url0\'}

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
