const Users = require("../models/user");

// Just Render Form Add User
exports.user = (req, res, next) => {
  res.render("users.ejs", {
    pageTitle: "Users",
    path: "/user/users",
  });
};

// Add New User
exports.postUser = (req, res, next) => {
  const user = new Users({
    name: req.body.name,
    nim: req.body.nim,
    address: req.body.address,
  });
  user.saveUsers();
  res.redirect("/");
};

exports.getDetailUser = (req, res, next) => {
  console.log("req.params.id =>", req.params.id);
  res.render("users.ejs", {
    pageTitle: "Users",
    path: "/user/users",
  });
};
