# Use Nginx as the base image
FROM nginx:latest

# Copy the website files to the default Nginx directory
COPY frontend/index.html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
