FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN npm run build


FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html

