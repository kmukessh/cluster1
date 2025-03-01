# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY .json/package.json .json/package-lock.json ./
RUN npm install

# Copy server.js from .json folder
COPY .json/server.js ./server.js

# **Fix: Ensure correct path for frontend files**
COPY . .

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
