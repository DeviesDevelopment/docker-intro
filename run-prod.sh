#!/bin/bash
# A run script
docker build -t docker-intro:prod -f Dockerfile.prod .
docker run \
    -it \
    --rm \
    -p 80:80 \
    docker-intro:prod