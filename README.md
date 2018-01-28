# Create-React-Redux-App Boilerplate w/ MongoDB

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites
- Linux OS (Ubuntu 16.04, specifically)
- [Docker](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Folder Structure
app/  
    models/  
    public/  
    routes/  
    src/  
    app.js  
    package.json  
    package-lock.json  
sample_data/  
    welcomes.json  
Dockerfile  
docker-compose.yml  
addData.sh  
.dockerignore  
.gitignore    
README.md  

## Getting Started
1. Clone this repo 'git clone https://github.com/gclarkjr5/react-redux_boilerplate_restful.git create-react-redux-mongo'
2. cd create-react-redux-mongo
3. Run docker-compose up -d
4. Run the bash script ./addData.sh
- Change the location of the sample json file within the script to its actual location