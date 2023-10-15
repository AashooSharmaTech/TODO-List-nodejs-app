# Use an official Node.js "Alpine" image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy all project files to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["node", "server.js"]
