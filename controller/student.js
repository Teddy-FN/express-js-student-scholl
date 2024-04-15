const Student = require("../models/student");

// Index Student List
exports.renderStundent = (req, res, next) => {
  Student.fetchAllStudent((students) => {
    console.log("STUDENT =>", students);
    res.render("user/index.ejs", {
      pageTitle: "Student",
      path: "/student/student",
      addNewTitle: "student",
      students: students,
    });
  });
};

// Render Form Add New Student
exports.renderFormAddStudent = (req, res, next) => {
  res.render("user/add-student.ejs", {
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

exports.getDetailUser = (req, res, next) => {
  Student.findById(req.params.id, (user) => {
    // get Detail User
    res.render("user/detail-user.ejs", {
      pageTitle: "Detail User",
      path: "/user/users",
      user: user,
    });
  });
};
