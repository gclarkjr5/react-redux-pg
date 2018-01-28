`use strict`

const mongoose = require('mongoose');

// define schema
const greetingSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
    },
    translation: {
        type: String,
        required: true,
    }
})

// export the model
// the model will be using the greetings db and the test collection
module.exports = mongoose.model('greetings', greetingSchema, 'test');