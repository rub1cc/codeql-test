// simple express app
// use postgresql as database

// create route for /search and get item and price from product where item category is from query parameter
// create route for /search/item and get item and price from product where item is from query parameter
// create route for /search/price and get item and price from product where price is from query parameter
// create route for /search/item/price and get item and price from product where item and price are from query parameter

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

const config = {
  user: 'postgres', //env var: PGUSER
  database: 'postgres', //env var: PGDATABASE
  password: 'postgres', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/search', (req, res) => {
  const query = `SELECT * FROM product WHERE category = $1`;
  const values = [req.query.category];

  pool.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});