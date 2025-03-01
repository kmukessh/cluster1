# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json & install dependencies
COPY .json/package.json .json/package-lock.json ./
RUN npm install

# Copy frontend files
COPY frontend/public ./public

# Expose port & start Express server
EXPOSE 3000
CMD ["node", "server.js"]
