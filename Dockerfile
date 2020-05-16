# Download base image ubuntu 16.04
FROM alpine:3.7
# list maintainer
LABEL MAINTAINER=AUTOMAUS
# Update ubuntu and install node and npm
RUN apk update && apk upgrade
RUN apk add --update nodejs nodejs-npm --no-cache git
WORKDIR /navbar-finally
ENV PATH /node_modules/.bin:${PATH}
COPY /package.json ./
# COPY /package-lock.json ./
#  install dependancies
RUN npm install;
#copy source code into container
COPY . ./
# run webpack and start server
# RUN npm run dev;
# select port
EXPOSE 9002
RUN npm run build
# run commands to start app
CMD ["npm", "run", "server"]
