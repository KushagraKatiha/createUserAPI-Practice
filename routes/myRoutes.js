const express = require('express')
const { homeResponse, twitterPage } = require('../controllers/userControllers')

const router = express.Router()

router.get('/', homeResponse)
router.get('/twitterpage', twitterPage)

module.exports = router