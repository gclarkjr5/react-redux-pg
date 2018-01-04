`use strict`

const mongoose = require('mongoose');

// define schema
const greetingSchema = new mongoose.Schema({
    greeting: String,
    language: String
})

// export the model
module.exports = mongoose.model('greeting', greetingSchema, 'greeting');