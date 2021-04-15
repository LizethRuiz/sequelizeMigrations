"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    static associate(models) {
      courses.belongsToMany(models.teachers, {
        through: "courseTeachers",
      });
    }
  }
  courses.init(
    {
      name: DataTypes.STRING,
      credits: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "courses",
    }
  );
  return courses;
};
