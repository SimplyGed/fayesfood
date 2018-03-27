FROM node:6

RUN mkdir -p /use/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]
