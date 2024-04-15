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

  static getAllTeacher(cb) {
    getTeacherFromFile(cb);
  }
};
