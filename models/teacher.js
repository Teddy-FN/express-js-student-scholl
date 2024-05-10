const { getDb } = require("../utils/database");

class Teacher {
  constructor(props) {
    console.log("PROPS =>", props);
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
}

module.exports = Teacher;
