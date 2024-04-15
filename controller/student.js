const Student = require("../models/student");

// Index Student List
exports.renderStundent = (req, res, next) => {
  Student.fetchAllStudent((students) => {
    res.render("student/index.ejs", {
      pageTitle: "Student",
      path: "/student/student",
      addNewTitle: "student",
      students: students,
    });
  });
};

// Render Form Add New Student
exports.renderFormAddStudent = (req, res, next) => {
  res.render("student/add-student.ejs", {
    pageTitle: "Add Student",
    path: "/student/student",
    addNewTitle: "student",
  });
};

// Add New User
exports.postUser = (req, res, next) => {
  const user = new Student({
    name: req.body.name,
    nim: req.body.nim,
    address: req.body.address,
  });
  user.saveStudent();
  res.redirect("/student/student");
};

// Delete Data Student
exports.deleteDataStudent = (req, res, next) => {
  Student.deleteStudent(req.body.id);
  res.redirect("/student/student");
};

// Get Detail
exports.getDetailUser = (req, res, next) => {
  Student.findById(req.params.id, (user) => {
    // get Detail User
    res.render("student/detail-student.ejs", {
      pageTitle: "Detail student",
      path: "/student/student",
      user: user,
    });
  });
};
