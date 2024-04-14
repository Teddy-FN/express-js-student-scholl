const Teacher = require("../models/teacher");

exports.renderFormTeacher = (req, res, next) => {
  res.render("teacher/add-teacher.ejs", {
    pageTitle: "Teacher",
    path: "/teacher/teacher",
  });
};

exports.postAddTeacher = (req, res, next) => {};
