const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "school-app",
  password: "teddyferdian98",
});

module.exports = pool.promise();
