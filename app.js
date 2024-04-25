const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Routes
const homeRoute = require("./routes/home");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");

// Controller
const errorRoute = require("./controller/404");

// Models
const Student = require("./models/student");
const Teacher = require("./models/teacher");
const User = require("./models/user");

// import sequelize
const sequelize = require("./utils/database");

// View Engine
app.set("engine view", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Users Route
app.use("/student", studentRoute);

// Teacher Route
app.use("/teacher", teacherRoute);

// Home Route
app.use(homeRoute);

// 404 Route
app.use(errorRoute.errorPage);

sequelize
  .sync()
  .then(() => {
    return User.findById(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Teddy",
        password: "Teddy",
      });
    }
    return user;
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
