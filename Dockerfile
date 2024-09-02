FROM node:lts
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "watch:demo"]

##docker build -t sampleapp:v1 .
##docker run -p 3000:3000 sampleapp:v1
