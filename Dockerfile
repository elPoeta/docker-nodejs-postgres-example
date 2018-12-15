# Use Node v11
FROM node:11.4.0-stretch

# Setup app working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy sourcecode
COPY . .

#EXPOSE PORT
EXPOSE 4000

# Start app
CMD [ "npm", "start" ]
