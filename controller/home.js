// path = require("path");

const Users = require("../models/user");

exports.getHome = (req, res, next) => {
  Users.fetchAllUsers((user) => {
    res.render("home.ejs", {
      pageTitle: "HOME",
      path: "/",
      user: user,
    });
  });
};
