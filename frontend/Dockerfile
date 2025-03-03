# Use Nginx as the base image
FROM nginx:latest

# Set the working directory inside Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx index.html to prevent conflicts
RUN rm -f /usr/share/nginx/html/index.html

# Copy frontend files to the container
COPY index.html styles.css script.js ./ 

# Copy images to the correct location
COPY images /usr/share/nginx/html/images/

# Ensure correct permissions
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
