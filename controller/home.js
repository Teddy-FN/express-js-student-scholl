// path = require("path");

const Users = require("../models/user");

exports.getHome = (req, res, next) => {
  Users.fetchAllUsers((user) => {
    res.render("home/home.ejs", {
      pageTitle: "HOME",
      path: "/",
      user: user,
    });
  });
};
