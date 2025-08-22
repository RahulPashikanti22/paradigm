# 1. Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --force

# Copy the rest of the source code
COPY . .

# Build the app (React -> build/, Angular -> dist/, Vue -> dist/)
RUN npm run build

# 2. NGINX Stage
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from the previous stage
COPY --from=build /app/public /usr/share/nginx/html

# If Angular/Vue, replace /app/build with /app/dist/<project-name>

# Copy custom NGINX configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

