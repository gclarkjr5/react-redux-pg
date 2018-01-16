#!/bin/bash

# location of docker-compose.yml file
DOCKERCOMPOSEFILE=~/Documents/VSCode/react-redux_boilerplate/docker-compose.yml

# run docker-compose up on that file where its at
docker-compose -f $DOCKERCOMPOSEFILE up -d
echo 'Sleeping for 5 seconds, just for reassurance.'
sleep 5

echo 'Inserting data to the database...'
echo 

# Define variables for importing data into Mongo
DBNAME=greetings
COLLECTION=test
JSONARRAYLOCATION=/data/db/welcomes.json

# Once containers are up and running, import data and insert it into the mongodb
docker exec -it mongo mongoimport --jsonArray --db $DBNAME --collection $COLLECTION --file $JSONARRAYLOCATION

echo Done