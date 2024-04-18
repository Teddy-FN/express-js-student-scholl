const db = require("../utils/database");

module.exports = class Teacher {
  constructor(params) {
    this.id = params.id || null;
    this.name = params.name;
    this.nim = params.nim;
    this.address = params.address;
    this.phone = params.phone;
  }

  saveTeacher() {
    return db.execute(
      "INSERT INTO teacher (name, nim, address, phone) VALUES (?, ?, ?, ?)",
      [this.name, this.nim, this.address, this.phone]
    );
  }

  // Get All Teacher
  static getAllTeacher() {
    return db.execute("SELECT * FROM teacher");
  }

  // Delete Teacher From Data
  static deleteTeacherById(id) {
    // getTeacherFromFile((teachers) => {
    //   const deleteTeacher = teachers.filter((teacher) => teacher.id !== id);
    //   fs.writeFile(p, JSON.stringify(deleteTeacher), (err) => {
    //     console.log(err);
    //   });
    // });
  }

  // Get Details By Id
  static getDetailTeacherById(id) {
    return db.execute("SELECT * FROM teacher WHERE teacher.id = ?", [id]);
  }
};
