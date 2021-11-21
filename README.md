# zyvue, 
A JAM Stack application developed using Nuxt.js/Vue.js and Tailwind.css

## Pre-requisites

* Node.JS
* NPM
* VS.code editor


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8000 (or change the port in nust.config.js)
$ npm run dev

# build for production and launch server
$ npm run build


# generate static project
$ npm run generate

#launch server
$ npm run start

#build  docker image

docker build -t web.frontend:dev .

#run the docker
docker run -it -p 8000:80 web.frontend:dev

```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
