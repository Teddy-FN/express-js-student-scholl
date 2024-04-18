const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Database
const db = require("./utils/database");

const homeRoute = require("./routes/home");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const errorRoute = require("./controller/404");

// View Engine
app.set("engine view", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

db.execute("SELECT * FROM teacher")
  .then((result) => {
    console.log('RESULT =>', result);
  })
  .catch((err) => {});

app.use(express.static(path.join(__dirname, "public")));

// Users Route
app.use("/student", studentRoute);

// Teacher Route
app.use("/teacher", teacherRoute);

// Home Route
app.use(homeRoute);

// 404 Route
app.use(errorRoute.errorPage);

app.listen(3000);
