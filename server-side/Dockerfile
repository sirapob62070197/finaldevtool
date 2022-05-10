FROM node:16.14.0-alpine

WORKDIR /usr/services

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start:prod" ]