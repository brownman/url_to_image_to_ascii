set +e
url=${1:-'http://google.com'}

while :;do
curl 0.0.0.0:3000/screenshot?url=$url &>/dev/null && break
sleep 1;
done

echo good bye :)

