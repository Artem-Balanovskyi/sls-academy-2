FROM node:18.16.1-alpine as builder

WORKDIR /app/build

COPY package*.json .

RUN npm install && npm cache clean --force

WORKDIR /app/build/dist

COPY . .

FROM node:18.16.1-alpine

COPY --from=builder /app/build/dist /app
COPY --from=builder /app/build/node_modules/ /app/node_modules

WORKDIR /app