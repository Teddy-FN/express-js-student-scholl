// path = require("path");

const Student = require("../models/student");

exports.getHome = (req, res, next) => {
  Student.fetchAllStudent((user) => {
    res.render("home/home.ejs", {
      pageTitle: "HOME",
      path: "/",
      user: user,
    });
  });
};
