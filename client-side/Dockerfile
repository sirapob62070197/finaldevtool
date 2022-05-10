FROM node:16.14.0-alpine

WORKDIR /usr/src

COPY  package.json .

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

CMD [ "yarn", "start" ]
