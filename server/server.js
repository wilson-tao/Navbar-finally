const express = require('express');
const app = express();
const path = require('path');
const config = require('../database/config');
const queries = require('../database/queries')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})


// define api's here

// api for preloaded search items
  // GET request

// api for home/refresh button
  // GET request



app.listen(3004)