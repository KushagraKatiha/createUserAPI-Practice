require('dotenv').config()
const express = require('express');
const myRoutes = require('./routes/myRoutes.js')

const app = express();

app.use ('/', myRoutes)

module.exports = app;