# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy frontend files
COPY . .

# Expose the port
EXPOSE 3000

# Run the Node.js server
CMD ["node", "server.js"]
