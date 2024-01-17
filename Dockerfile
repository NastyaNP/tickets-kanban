FROM node:lts
WORKDIR /app
COPY . /app/.

RUN npm install -g sails@1.4.2
EXPOSE 1337
ENTRYPOINT ["npm", "run", "start"]
