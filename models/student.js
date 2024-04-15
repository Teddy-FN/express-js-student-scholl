const fs = require("fs"),
  path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "user.json"
);

const getStudentFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Student {
  constructor(contrusctor) {
    this.name = contrusctor.name;
    this.nim = contrusctor.nim;
    this.address = contrusctor.address;
  }

  saveStudent() {
    // Save Using File
    this.id = Math.random().toString();
    getStudentFromFile((user) => {
      user.push(this);
      fs.writeFile(p, JSON.stringify(user), (err) => {
        console.log(err);
      });
    });
  }

  // Fetch All Student
  static fetchAllStudent(cb) {
    getStudentFromFile(cb);
  }

  // get Details
  static findById(id, cb) {
    getStudentFromFile((users) => {
      const getUser = users.find((items) => items.id === Number(id));
      cb(getUser);
    });
  }
};
