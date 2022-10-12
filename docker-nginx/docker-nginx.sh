docker run --name yulegeyu \
    -d \
    --rm \
    -p 8080:80 \
    -v /Users/leqee/code/yulegeyu/docker-nginx/conf.d:/etc/nginx/conf.d \
    -v /Users/leqee/code/yulegeyu/dist:/usr/share/nginx/html \
    nginx
    