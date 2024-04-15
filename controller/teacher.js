const Teacher = require("../models/teacher");

// Render Home Teacher List
exports.renderTeacher = (req, res, next) => {
  Teacher.getAllTeacher((teacher) => {
    res.render("teacher/index.ejs", {
      pageTitle: "Teacher List",
      path: "/teacher/teacher",
      teacher: teacher,
    });
  });
};

// Render Form Add Teacher
exports.renderFormTeacher = (req, res, next) => {
  res.render("teacher/add-teacher.ejs", {
    pageTitle: "Add Teacher",
    path: "/teacher/teacher",
  });
};

// Save New Teacher
exports.postAddTeacher = (req, res, next) => {
  console.log("req.body =>", req.body);
  res.redirect("/teacher/teacher");
  const teacher = new Teacher(req.body);
  teacher.saveTeacher();
};
