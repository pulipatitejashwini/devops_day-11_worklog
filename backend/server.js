const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let db;

// ---------- DATABASE CONNECTION WITH RETRY ----------
function connectWithRetry() {

  db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'testdb',
    port: 3306
  });

  db.connect((err) => {
    if (err) {
      console.log('❌ DB not ready, retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('✅ Connected to MySQL Database!');
      initializeTable();
    }
  });

}

// ---------- CREATE TABLE AUTOMATICALLY ----------
function initializeTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS demo (
      id INT PRIMARY KEY AUTO_INCREMENT,
      message VARCHAR(100)
    )
  `;

  db.query(sql, (err) => {
    if (!err) {
      db.query("SELECT COUNT(*) as count FROM demo", (e, r) => {
        if (r[0].count === 0) {
          db.query(
            "INSERT INTO demo(message) VALUES ('Hello from Database Container!')"
          );
        }
      });
    }
  });
}

// ---------- API ENDPOINT ----------
app.get('/data', (req, res) => {

  db.query('SELECT message FROM demo LIMIT 1', (err, result) => {

    if (err) {
      console.log(err);
      return res.json({ message: "Database query failed" });
    }

    res.json(result[0]);

  });

});

// ---------- START SERVER ----------
app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});

// Start connection
connectWithRetry();

