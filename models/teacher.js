const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Teacher = sequelize.define("teacher", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nim: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  phone: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Teacher;
