const Users = require("../models/student");

// Just Render Form Add User
exports.user = (req, res, next) => {
  res.render("user/add-student.ejs", {
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
  Users.findById(req.params.id, (user) => {
    // get Detail User
    res.render("user/detail-user.ejs", {
      pageTitle: "Detail User",
      path: "/user/users",
      user: user,
    });
  });
};
