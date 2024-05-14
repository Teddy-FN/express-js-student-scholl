const { getDb } = require("../utils/database");
const mongoDb = require("mongodb");
class Student {
  constructor(props) {
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

  // Fetch All
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

  // Get Details
  static fetchDetailsStudentById(id) {
    const db = getDb();
    return db
      .collection("student")
      .find({ _id: new mongoDb.ObjectId(id) })
      .next()
      .then((student) => {
        return student;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Student;
