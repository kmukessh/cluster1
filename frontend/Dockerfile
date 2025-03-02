# Use Nginx as the base image
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default index.html
RUN rm -f /usr/share/nginx/html/index.html

# Copy the frontend files into the container (for initial setup)
COPY . /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Keep the container running
CMD ["nginx", "-g", "daemon off;"]
