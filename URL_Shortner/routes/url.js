const express = require('express')
const router = express.Router();
const {addNewURL, getAnalytics , getURLByShortURL} = require('../controller/handleURL')

router.route('/')
    .post(addNewURL)

router.route('/:id')
    .get(getURLByShortURL)
    
router.get('/analytics/:id', getAnalytics)
    

module.exports = router