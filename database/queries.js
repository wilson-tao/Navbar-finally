const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// helper functions for database querying
// needs to be exported

const getAllProducts = (callback) => {
    connection.query('SELECT * from products', (err, results) => {
      if (err) {
        console.log('error from database query');
        callback(err, null);
      } else {
        callback(null, results);
      }
    })
  }

  module.exports.getAllProducts = getAllProducts;