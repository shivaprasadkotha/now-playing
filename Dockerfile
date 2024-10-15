FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

RUN npm i serve 

CMD [ "npx", "serve", "-s", "build" ]

