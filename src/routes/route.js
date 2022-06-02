const express = require('express');
const logger = require('../logger/logger')
const helper =require('../util/helper')
const formatter = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    logger.welcome()    
    helper.date()
    helper.month()
    helper.batchInfo()
    formatter.trim()
    formatter.lower()
    formatter.upper()
    
    res.send('My first ever api!')


});







module.exports = router;
// adding this comment for no reason