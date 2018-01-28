`use strict`

const router = require('express').Router();
const bodyParser = require('body-parser');

const greeting = require('../models/greeting');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.route(`/greeting`)
.get((req, res) => {

    // Get random greeting
    greeting.count().exec((err, count) => {
        // Get a random entry
        const random = Math.round(Math.random() * count)

        // Get all greetings but return only one randomly selected
        greeting.findOne().skip(random).exec((err, result) => {
            res.status(200).json(result)
        })
    })

})
.post((req, res) => {
    // Post Greeting
})
.put((req, res) => {
    // Update Greeting
})
.delete((req, res) => {
    // Delete Greeting
})

module.exports = router;