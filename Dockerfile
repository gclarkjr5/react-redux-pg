# Use nodejs v8.9
FROM node:8.9

# Set environment variables if needed (where you would set proxy)
# ENV http_proxy http://httpproxy:port
# ENV https_proxy http://httpproxy:port

# mk dir /usr/src/app where app will reside in container
RUN mkdir -p /usr/src/app

# install create-react-app globally in container
RUN npm install create-react-app -g

# change working directory
WORKDIR /usr/src/app

# Copy package.json over for app dependencies purposes
COPY app/package.json /usr/src/app/

# install project dependencies
RUN npm install

# Copy over everything from the current local directory
COPY ./app /usr/src/app

# Run 'npm start'
CMD ["npm", "start"]