FROM nginx:alpine

# Copy everything into the default NGINX directory
COPY . /usr/share/nginx/html

EXPOSE 80
