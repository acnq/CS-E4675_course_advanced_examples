FROM node:20

WORKDIR /usr/src/app

COPY . .

# change npm ci to npm install since we are going to be in dev mode
RUN npm install

# npm run dev is the cmd to start the app in dev mode
CMD [ "npm", "run", "dev", "--", "--host" ]

# run the front end with
# docker run -p 5173:5173 -v "$(pwd):/usr/src/app/" hello-front-dev
# execss with
# docker run -it -v "$(pwd):/usr/src/app/" hello-front-dev bash