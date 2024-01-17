FROM node:lts
RUN npm install -g sails@1.4.2
RUN npm install -f
EXPOSE 1337
ENTRYPOINT ["npm", "run", "start"]
