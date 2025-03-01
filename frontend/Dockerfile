# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY .json/package.json .json/package-lock.json ./

# Install dependencies
RUN npm install

# Copy frontend source files
COPY . .

# Expose the port Express will run on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
