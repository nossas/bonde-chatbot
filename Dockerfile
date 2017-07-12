FROM node:latest
MAINTAINER Nossas <tech@nossas.org>

ENV PORT=5000

RUN mkdir /code
WORKDIR /code

COPY package.json yarn.lock /code/
RUN yarn
COPY . /code

CMD ["yarn", "start"]

EXPOSE 5000