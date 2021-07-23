FROM node:alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --force
COPY . .
RUN npm run build:web

FROM nginx
EXPOSE 80
COPY ./nginx.conf /etc/conf.d/default.conf
COPY --from=builder  /usr/src/app/dist/web usr/share/nginx/html
