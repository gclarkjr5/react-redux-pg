# Use nodejs v8.9
FROM node:8.9

# mk dir /usr/src/app where app will reside in container
RUN mkdir -p /usr/src/app

# change working directory
WORKDIR /usr/src/app

# Copy package.json over for app dependencies purposes
COPY package.json /usr/src/app/

# Set environment variables if needed (where you would set proxy)
#ENV http_proxy http://httpproxy:port
#ENV https_proxy http://httpproxy:port

# install create-react-app globally in container
RUN npm install create-react-app -g

# install project dependencies
RUN npm install

# Copy over everything from the current local directory
COPY . /usr/src/app

# Expose the container to the host on port 4555
EXPOSE 4555

# Run 'npm start'
CMD ["npm", "start"]