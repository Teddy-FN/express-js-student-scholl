const Teacher = require("../models/teacher");

// Render Home Teacher List
exports.renderTeacher = (req, res, next) => {
  Teacher.findAll()
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
  Teacher.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((teacher) => {
      res.render("teacher/detail-teacher.ejs", {
        pageTitle: "Detail Teacher",
        path: "/teacher/teacher",
        addNewTitle: "teacher",
        teacher: teacher[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Data Teacher
exports.deleteDataTeacher = (req, res, next) => {
  Teacher.deleteTeacherById(req.body.id);
  res.redirect("/teacher/teacher");
};

// Render Edit Teacher
exports.renderEditFormTeacher = (req, res, next) => {
  const idTeacher = req.params.id;
  Teacher.getDetailTeacherById(idTeacher, (teacher) => {
    res.render("teacher/add-teacher.ejs", {
      pageTitle: "Add Teacher",
      path: "/teacher/teacher",
      addNewTitle: "teacher",
      edit: true,
      teacher: teacher,
    });
  });
};

// Save Edit Teacher
exports.postEditTeacher = (req, res, next) => {
  const teacher = new Teacher(req.body);
  teacher.saveTeacher();
  res.redirect("/teacher/teacher");
};

// Save New Teacher
exports.postAddTeacher = (req, res, next) => {
  Teacher.create(req.body)
    .then(() => {
      res.redirect("/teacher/teacher");
    })
    .catch((err) => {
      console.log(err);
    });
};
