// path = require("path");

// const Student = require("../models/student");

exports.getHome = (req, res, next) => {
  res.render("home/home.ejs", {
    pageTitle: "HOME",
    path: "/",
    user: [],
  });
};
