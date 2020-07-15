FROM node:14

WORKDIR /app
COPY package.json ./
RUN yarn

COPY . ./app

CMD yarn dev
