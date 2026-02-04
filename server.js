const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

app.get('/data', (req, res) => {
  db.query('SELECT "Hello from Database!" AS message', (err, result) => {
    res.json(result[0]);
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

