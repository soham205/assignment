FROM node:18

WORKDIR /app

COPY . /app

RUN  chmod 777 ./entrypoint.sh

COPY ./entrypoint.sh /app

RUN npm install

RUN npm run build

COPY ./.sequelizerc /app/build

COPY ./package.json /app/build

COPY ./.env /app/build
 
EXPOSE 5000

ENTRYPOINT [ "./entrypoint.sh" ]
