// const mysql = require("mysql2");

// const pool = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "school-app",
//   password: "teddyferdian98",
// });

// module.exports = pool.promise();

// Sequelize
const Sequelize = require("sequelize"),
  sequelize = new Sequelize("school-app", "root", "teddyferdian98", {
    dialect: "mysql",
    host: "localhost",
  });

module.exports = sequelize;
