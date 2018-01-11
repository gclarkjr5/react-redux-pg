`use strict`

// import libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create PORT
const port = process.env.PORT || 8000;

// include routes
const routes = require('./routes');


// make a new express app
const app = express();

// connection string to dockerized mongodb at the "greetings" db
const connectionString = "mongodb://localhost:27017/greetings";

// connect to db
mongoose.connect(connectionString);

// test connection to db
mongoose.connection
    .on('connected', () => {
        console.log(`and connected to ${connectionString}`)
    })
    .on('error', (err) => {
        console.log(`but not connected to ${connectionString} due to the following: \n
        ${err}`)
    })

// helper libraries
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// host build directory at the root of our site
// this is where transpiled react app sits
app.use('/', express.static(__dirname + '/build'));

// defined routes at the /api endpoint
app.use(`/api`, routes);

// export app
// module.exports = app;

// have app listen on port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})