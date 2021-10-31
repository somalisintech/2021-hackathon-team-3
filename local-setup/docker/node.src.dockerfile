FROM node:17.0.1-alpine3.14
COPY . /app
WORKDIR /app/api/v1/node
RUN npm install
CMD ["npm", "start"]