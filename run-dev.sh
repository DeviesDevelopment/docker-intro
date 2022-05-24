#!/bin/bash
# A run script
docker build -t docker-intro:0.1 -f Dockerfile.dev .
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 4000:3000 \
    -e CHOKIDAR_USEPOLLING="true" \
    docker-intro:0.1