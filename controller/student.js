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
    edit: false,
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

// Form Edit Render
exports.editRender = (req, res, next) => {
  Student.findById(req.params.id)
    .then((student) => {
      res.render("student/add-student.ejs", {
        pageTitle: "Add Student",
        path: "/student/student",
        addNewTitle: "student",
        student: student,
        edit: true,
      });
    })
    .catch((err) => console.log(err));
};

// Updated Student
exports.postUpdatedStudent = (req, res, next) => {
  if (!req.body.id) {
    res.redirect("/student/student");
  }
  Student.findById(req.body.id)
    .then((student) => {
      student.name = req.body.name;
      student.nim = req.body.nim;
      student.address = req.body.address;
      return student.save();
    })
    .then(() => {
      res.redirect("/student/student");
    })
    .catch((err) => console.log(err));
};

// Delete Data Student
exports.deleteDataStudent = (req, res, next) => {
  Student.findById(req.body.id)
    .then((student) => {
      return student.destroy();
    })
    .then(() => res.redirect("/student/student"))
    .catch((err) => console.log(err));
};
