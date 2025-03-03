# Use Nginx as the base image
FROM nginx:latest

# Set the working directory inside Nginx
WORKDIR /usr/share/nginx/html

# Remove the default index.html file to avoid conflicts
RUN rm -f /usr/share/nginx/html/index.html

# Copy only the frontend files (HTML, CSS, JS, images)
COPY ./index.html ./styles.css ./script.js ./images/ ./

# Expose port 80 for HTTP traffic
EXPOSE 80

# Keep the Nginx server running
CMD ["nginx", "-g", "daemon off;"]
