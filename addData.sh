#!/bin/bash

echo 'Inserting data to the database...'
echo 

# Define variables for importing data into Mongo
LOCALFILELOCATION=/home/gclarkjr5/Documents/VSCode/create-react-redux-mongo/sample_data/welcomes.json 
DBNAME=greetings
COLLECTION=test
JSONARRAYLOCATION=/data/db/welcomes.json

# Copy data to the container
docker cp $LOCALFILELOCATION mongo:$JSONARRAYLOCATION
docker exec -it mongo mongoimport --jsonArray --db $DBNAME --collection $COLLECTION --file $JSONARRAYLOCATION

echo Done