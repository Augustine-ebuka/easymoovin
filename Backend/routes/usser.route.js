const express = require('express')
const test = require('../controller/user.controller')

const router = express.Router();

router.get('/api/user',test)

module.exports = router