const Student = require("../models/student");

// Index Student List
exports.renderStundent = (req, res, next) => {
  Student.findAll()
    .then((students) => {
      res.render("student/index.ejs", {
        pageTitle: "Student",
        path: "/student/student",
        addNewTitle: "student",
        students: students,
      });
    })
    .catch((err) => console.log(err));
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
  Student.create(req.body)
    .then(() => {
      res.redirect("/student/student");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Data Student
exports.deleteDataStudent = (req, res, next) => {
  Student.deleteStudent(req.body.id);
  res.redirect("/student/student");
};

// Get Detail
exports.getDetailUser = (req, res, next) => {
  Student.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((student) => {
      res.render("student/detail-student.ejs", {
        pageTitle: "Detail student",
        path: "/student/student",
        user: student[0],
      });
    })
    .catch((err) => console.log(err));
};
