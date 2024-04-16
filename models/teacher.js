const fs = require("fs"),
  path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "teacher.json"
);

const getTeacherFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Teacher {
  constructor(params) {
    this.id = null;
    this.name = params.name;
    this.nim = params.nim;
    this.address = params.address;
  }

  saveTeacher() {
    this.id = Math.random().toString();
    getTeacherFromFile((teacher) => {
      teacher.push(this);
      fs.writeFile(p, JSON.stringify(teacher), (err) => {
        console.log(err);
      });
    });
  }

  // Get All Teacher
  static getAllTeacher(cb) {
    getTeacherFromFile(cb);
  }

  // Delete Teacher From Data
  static deleteTeacherById(id) {
    getTeacherFromFile((teachers) => {
      const deleteTeacher = teachers.filter((teacher) => teacher.id !== id);
      fs.writeFile(p, JSON.stringify(deleteTeacher), (err) => {
        console.log(err);
      });
    });
  }

  // Get Details By Id
  static getDetailTeacherById(id, cb) {
    getTeacherFromFile((teachers) => {
      const teacherById = teachers.find((teacher) => teacher.id === id);
      cb(teacherById);
    });
  }
};
