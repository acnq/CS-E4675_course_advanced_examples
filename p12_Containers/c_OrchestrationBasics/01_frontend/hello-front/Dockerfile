# The first FROM is now a stage called build-stage
FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

# RUN npm install -g serve
# CMD [ "serve", "dist" ]

# docker run -p 5000:3000 hello-front 
# then visit http://localhost:5000

# This is a new stage, everything before this is gone, 
# except the files we want to COPY
FROM nginx:1.25-alpine
# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html