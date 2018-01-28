`use strict`

const router = require('express').Router();

const getGreeting = require('./getGreeting');

router.use('/', getGreeting)

module.exports = router;