"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courseTeachers extends Model {
    static associate(models) {
      courseTeachers.belongsTo(models.courses);
      courseTeachers.belongsTo(models.teachers);
    }
  }
  courseTeachers.init(
    {
      teacherId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "courseTeachers",
    }
  );
  return courseTeachers;
};
