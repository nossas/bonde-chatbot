FROM node:latest
MAINTAINER Nossas <tech@nossas.org>

RUN mkdir /code
WORKDIR /code

COPY . .

RUN yarn install

RUN yarn run build

CMD ["yarn", "start"]
