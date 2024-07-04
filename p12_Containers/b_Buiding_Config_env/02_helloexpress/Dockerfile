FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci

ENV DEBUG=02-helloexpress:*

USER node
CMD npm start