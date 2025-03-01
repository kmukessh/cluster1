# Use official Nginx as a base image
FROM nginx:latest

# Set working directory to Nginx default HTML folder
WORKDIR /usr/share/nginx/html

# Copy everything from frontend/ to the Nginx HTML folder
COPY . /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
