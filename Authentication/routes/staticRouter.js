const express = require('express')
const router = express.Router()
const { restrictUser,checkCookie } = require('../middlewares/auth')

router.get('/', restrictUser ,(req, res) => {
    return res.render('home')
})

router.get('/signup', (req, res) => {
    return res.render('signup')
})

router.get('/login',checkCookie, (req, res) => {
    return res.render('login', { error: null })
})

module.exports = router