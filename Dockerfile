FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3005

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN yarn install

COPY . /usr/src/app

EXPOSE 3005
CMD [ "yarn", "start" ]