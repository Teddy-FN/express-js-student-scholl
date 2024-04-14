const fs = require("fs"),
  path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "user.json"
);

const getUsersFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Users {
  constructor(contrusctor) {
    this.name = contrusctor.name;
    this.nim = contrusctor.nim;
    this.address = contrusctor.address;
  }

  saveUsers() {
    // Save Using File
    this.id = Math.random().toString();
    getUsersFromFile((user) => {
      user.push(this);
      fs.writeFile(p, JSON.stringify(user), (err) => {
        console.log(err);
      });
    });
  }

  // Fetch Users
  static fetchAllUsers(cb) {
    getUsersFromFile(cb);
  }
};
