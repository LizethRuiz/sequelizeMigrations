"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    static associate(models) {
      teachers.belongsToMany(models.courses, {
        through: "courseTeachers",
      });
    }
  }
  teachers.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "teachers",
    }
  );
  return teachers;
};
