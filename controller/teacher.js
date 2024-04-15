const Teacher = require("../models/teacher");

// Render Home Teacher List
exports.renderTeacher = (req, res, next) => {
  Teacher.getAllTeacher((teacher) => {
    res.render("teacher/index.ejs", {
      pageTitle: "Teacher List",
      path: "/teacher/teacher",
      teacher: teacher,
      addNewTitle: "teacher",
    });
  });
};

// Render Form Add Teacher
exports.renderFormTeacher = (req, res, next) => {
  res.render("teacher/add-teacher.ejs", {
    pageTitle: "Add Teacher",
    path: "/teacher/teacher",
    addNewTitle: "teacher",
  });
};

// Render Detail Teacher
exports.renderDetailTeacher = (req, res, next) => {
  console.log("REQ PARAMS", req.params.id);
  Teacher.getDetailTeacherById(req.params.id, (teacher) => {
    res.render("teacher/detail-teacher.ejs", {
      pageTitle: "Detail Teacher",
      path: "/teacher/teacher",
      addNewTitle: "teacher",
      teacher: teacher,
    });
  });
  // res.redirect("/teacher/teacher");
};

// Delete Data Teacher
exports.deleteDataTeacher = (req, res, next) => {
  Teacher.deleteTeacherById(req.body.id);
  res.redirect("/teacher/teacher");
};

// Save New Teacher
exports.postAddTeacher = (req, res, next) => {
  console.log("req.body =>", req.body);
  const teacher = new Teacher(req.body);
  teacher.saveTeacher();
  res.redirect("/teacher/teacher");
};
