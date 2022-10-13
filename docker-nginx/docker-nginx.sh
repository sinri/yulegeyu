docker run --name yulegeyu \
    -d \
    --rm \
    -p 8080:80 \
    -v /Users/leqee/code/yulegeyu/docker-nginx/conf.d:/etc/nginx/conf.d \
    -v /Users/leqee/code/yulegeyu/dist:/usr/share/nginx/html/oc/special/2022-llgq/dist \
    nginx
    