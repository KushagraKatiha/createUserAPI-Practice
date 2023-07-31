const express = require('express')
const { homeResponse, twitterPage, createUser } = require('../controllers/userControllers')

const router = express.Router()

router.get('/', homeResponse)
router.get('/twitterpage', twitterPage)
router.post('/createuser', createUser )

module.exports = router