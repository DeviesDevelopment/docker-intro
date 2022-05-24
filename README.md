# Docker Introduction
This repo and README is meant to introduce (the concept of) Docker, Docker images and deploy a container of an image.
[Jump to get started!](#getting-started) 

## What is Docker?
Docker is an open platform software for developing, shipping, and running applications. It provides a way to package and run an application in a loosely isolated environment called a container. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. This is particularly amazing since this makes the containers OS independent, as long as the OS has the ability to run docker containers.

## Why docker? 
Docker allows for fast and consistent delivery of your applications and are great for continous integration and continous delivery (CI/CD). Docker containers can run your local laptop, on a physical or virtual machine, or even on the cloud.


<h1 id="getting-started">Getting started</h1>
Before we start, we will assume that there is a project you want to containerize and share with your colleagues, or run on a cloud provider. In this introduction to Docker, we will use a hello-world react-app and show you how you can deploy it on Azure DevOps.

__IMAGE OF HELLO WORLD REACT-APP__

## Dockerfile
The Dockerfile is used to build your container. 

### Order matters!
Explain


The following is the sample we'll be using to build our Docker image for our react-app:
```Docker
# get base image
FROM node:18.2.0-alpine3.14

# set working directory in container
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json to work directory
COPY package.json ./
COPY package-lock.json ./

# install app dependencies
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Copy the src files to work directory
COPY . ./

# start app
CMD ["npm", "start"]

# This is only for readability reasons. 
# The port should be exposed when running `docker run`
EXPOSE 3000
```

The `FROM` lets us use a base for our image. In this case, we want it to be a node.js image. While there are other noteable keywords to mention, for now we will focus on `CMD` and `EXPOSE`. The `CMD` will start the react-app and will keep the container live as long as the react-app is running. If the app fails at some point and stops, then so too will the container. `EXPOSE` in peculiar since it's a command that doesn't expose the port, but instead tells the user to expose it as a form of documentation. This will be revisited when we run the container.


## Docker build
To build the image based off of this Dockerfile, we run the following:  

`docker build -t docker-intro -f Dockerfile.dev .`  

The `-t` option lets us tag the image with a particular name. We could even add a colon to give it a particular build name, for example `docker-intro:1`. If omitted, then the latest version will be used. 
The `-f` option lets us choose the Dockerfile we want to use for the build. If omitted, Docker will look for a file called `Dockerfile`. In our case we will use `Dockerfile.dev` for a development build and `Dockerfile.prod` for production.

## Docker run