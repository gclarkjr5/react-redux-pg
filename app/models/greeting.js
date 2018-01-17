`use strict`

const mongoose = require('mongoose');

// define schema
const greetingSchema = new mongoose.Schema({
    language: String,
    country: String,
    translation: String
})

// export the model
// the model will be using the greetings db and the test collection
module.exports = mongoose.model('greetings', greetingSchema, 'test');