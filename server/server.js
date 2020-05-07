const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const queries = require('../database/queries')

app.use(express.static(path.join(__dirname, '../dist' )));
app.use(cors());
app.use( bodyParser.json() );


app.get('/api/test', function (req, res) {
  res.send('Hello World')
})

// define api's here

// api to get all products
app.get('/api/products', (req, res) => {
  queries.getAllProducts((err, data) => {
    if (err) {
      console.log('error from server GET request');
      res.status(500);
    } else {
      res.send(data);
    }
  })
});

// api for home/refresh button
  // GET request



app.listen(8080)