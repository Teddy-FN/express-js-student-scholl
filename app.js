const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const homeRoute = require("./routes/home");
const userRoute = require("./routes/user");
const errorRoute = require("./controller/404");

// View Engine
app.set("engine view", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Users Route
app.use("/user", userRoute);

// Admin Route
app.use(homeRoute);

// 404 Route
app.use(errorRoute.errorPage);

app.listen(3000);
