const { getDb } = require("../utils/database");
const mongoDb = require("mongodb");
class Teacher {
  constructor(props) {
    const { name, nim, phone, address } = props;
    this.name = name;
    this.nim = nim;
    this.phone = phone;
    this.address = address;
  }

  saveTeacher() {
    const db = getDb();
    return db
      .collection("teacher")
      .insertOne(this)
      .then((result) => {
        console.log("RESULT =>", result);
      })
      .catch((err) => {
        console.log("ERR =>", err);
      });
  }

  // FetchAll Teacher
  static fetchAllTeaherData() {
    const db = getDb();
    console.log(
      'db.collection("teacher").find()',
      db.collection("teacher").find().toArray()
    );
    return db
      .collection("teacher")
      .find()
      .toArray()
      .then((teacher) => {
        return teacher;
      })
      .catch((err) => console.log(err));
  }

  // Get Detail Teacher By Id
  static fetchDetailTeacherById(id) {
    const db = getDb();
    return db
      .collection("teacher")
      .find({ _id: new mongoDb.ObjectId(id) })
      .next()
      .then((teacher) => {
        return teacher;
      })
      .catch((err) => console.log(err));
  }

  // Delete Data Teacher By Id
  static deleteDataTeacherbyId(id) {
    const db = getDb();
    return db
      .collection("teacher")
      .deleteOne({ _id: new mongoDb.ObjectId(id) });
  }
}

module.exports = Teacher;
