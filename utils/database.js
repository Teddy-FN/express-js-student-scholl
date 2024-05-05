// const mysql = require("mysql2");

// const pool = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "school-app",
//   password: "teddyferdian98",
// });

// module.exports = pool.promise();

// Sequelize
// const Sequelize = require("sequelize"),
//   sequelize = new Sequelize("school-app", "root", "teddyferdian98", {
//     dialect: "mysql",
//     host: "localhost",
//   });

// module.exports = sequelize;

// Mongo DB
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// mongodb+srv://ferdiamrullah23:<password>@cluster0.nnen8dj.mongodb.net/
const mongoClient = (callback) => {
  MongoClient.connect(
    "mongodb+srv://ferdiamrullah23:teddyferdian98@cluster0.nnen8dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoClient;
