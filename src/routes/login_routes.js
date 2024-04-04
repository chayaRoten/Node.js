const express = require('express')
const loginControllet = require('../controllers/loginControllet')
const router = express.Router()

router.post('/login', loginControllet.login)
router.post('/sighUp', loginControllet.signUp)

module.exports = router
