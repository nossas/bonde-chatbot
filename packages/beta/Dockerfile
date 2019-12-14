FROM node:12-alpine

RUN yarn global add pnpm

WORKDIR /usr/src/app

COPY ./ .

RUN pnpm i

RUN pnpm m run build --filter beta

CMD pnpm m run start --filter beta
