set +e
url=${1:-'http://google.com'}
curl 0.0.0.0:3000/screenshot?url=$url

