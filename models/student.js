const { getDb } = require("../utils/database");

class Student {
  constructor(props) {
    console.log("PROPS =>", props);
    const { name, nim, address } = props;
    this.name = name;
    this.nim = nim;
    this.address = address;
  }

  saveStudent() {
    const db = getDb();
    return db
      .collection("student")
      .insertOne(this)
      .then((result) => {
        console.log("RESULT STUDENT", result);
      })
      .catch((err) => {
        console.log("ERR STUDENT", err);
      });
  }

  static fetchAllStudentData() {
    const db = getDb();
    return db
      .collection("student")
      .find()
      .toArray()
      .then((student) => {
        console.log("student", student);
        return student;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Student;
