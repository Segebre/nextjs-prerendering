FROM node:alpine

WORKDIR /usr/app/
RUN chown -R node /usr/app/
USER node

COPY ./package*.json ./

RUN npm ci --production

COPY ./ ./

ARG BASE_PATH
ENV BASE_PATH=$BASE_PATH
RUN npm run build

EXPOSE ${HTTP_PORT:-3000}
CMD [ "npm", "start" ]