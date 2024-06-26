const Teacher = require("../models/teacher");

// Render Home Teacher List
exports.renderTeacher = (req, res, next) => {
  Teacher.fetchAllTeaherData()
    .then((teacher) => {
      res.render("teacher/index.ejs", {
        pageTitle: "Teacher List",
        path: "/teacher/teacher",
        teacher: teacher,
        addNewTitle: "teacher",
      });
    })
    .catch((err) => console.log(err));
};

// Render Form Add Teacher
exports.renderFormTeacher = (req, res, next) => {
  res.render("teacher/add-teacher.ejs", {
    pageTitle: "Add Teacher",
    path: "/teacher/teacher",
    addNewTitle: "teacher",
    edit: false,
  });
};

// Render Detail Teacher
exports.renderDetailTeacher = (req, res, next) => {
  // find By ID
  Teacher.fetchDetailTeacherById(req.params.id)
    .then((teacher) => {
      res.render("teacher/detail-teacher.ejs", {
        pageTitle: "Detail Teacher",
        path: "/teacher/teacher",
        addNewTitle: "teacher",
        teacher: teacher,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Data Teacher
exports.deleteDataTeacher = (req, res, next) => {
  Teacher.deleteDataTeacherbyId(req.body.id)
    .then(() => {
      res.redirect("/teacher/teacher");
    })
    .catch((err) => console.log(err));
};

// Render Edit Teacher
exports.renderEditFormTeacher = (req, res, next) => {
  const idTeacher = req.params.id;
  Teacher.findById(idTeacher)
    .then((teacher) => {
      res.render("teacher/add-teacher.ejs", {
        pageTitle: "Add Teacher",
        path: "/teacher/teacher",
        addNewTitle: "teacher",
        edit: true,
        teacher: teacher,
      });
    })
    .catch((err) => console.log(err));
};

// Save Edit Teacher
exports.postEditTeacher = (req, res, next) => {
  if (!req.body.id) {
    res.redirect("/teacher/teacher");
  }
  Teacher.findById(req.body.id)
    .then((teacher) => {
      teacher.name = req.body.name;
      teacher.nim = req.body.nim;
      teacher.phone = req.body.phone;
      teacher.address = req.body.address;
      return teacher.save();
    })
    .then(() => {
      res.redirect("/teacher/teacher");
    })
    .catch((err) => console.log(err));
};

// Save New Teacher
exports.postAddTeacher = (req, res, next) => {
  const teacher = new Teacher(req.body);
  teacher
    .saveTeacher()
    .then((res) => {
      res.redirect("/teacher/teacher");
    })
    .catch((err) => console.log(err));
};
