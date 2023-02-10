FROM node:16.4-alpine
WORKDIR /app/account
COPY package*.json ./
COPY .npmrc ./
RUN npm install
COPY . ./
ENTRYPOINT npm start