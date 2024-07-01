
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN NODE_ENV=development npm i

COPY . .

RUN npx tsc



RUN npm run build

EXPOSE 3000

CMD [ "npm" , "run" , "dev" ]