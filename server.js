const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 5000;

// Create a MySQL connection
const pool = mysql.createPool({
  host: "speducate-db-free.ctu0qo0gst46.us-east-2.rds.amazonaws.com", // e.g., 'your-db-instance.xxxxxxxx.us-west-2.rds.amazonaws.com'
  user: "huge_admin",
  password: "SPEDUCATE2024",
  database: "SpedDB",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Example route
app.get("/data", (req, res) => {
  console.log(req);
  pool.query("SELECT * FROM PrefQuestions", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
