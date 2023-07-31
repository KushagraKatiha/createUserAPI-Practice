require('dotenv').config()
const express = require('express');
const myRoutes = require('./routes/myRoutes.js')
const connectToDB = require('./config/db.js')

const app = express();

app.use(express.json())

connectToDB();

app.use ('/', myRoutes)

module.exports = app;