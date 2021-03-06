import models from "../../database/models";

const addTeacher = async (req, res) => {
  try {
    const { body } = req;

    const createTeacher = await models.teachers.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      age: body.age,
    });

    return res.status(201).send(createTeacher);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addCourse = async (req, res) => {
  try {
    const { body } = req;

    const createCourse = await models.courses.create({
      name: body.name,
      credits: body.credits,
    });

    return res.status(201).send(createCourse);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addAssocitation = async (req, res) => {
  try {
    const { body } = req;

    const add = await models.courseTeachers.create({
      teacherId: body.teacherId,
      courseId: body.courseId,
    });

    return res.status(201).send(add);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getTeachers = async (req, res) => {
  try {
    const { params } = req;

    const getTeacher = await models.teachers.findByPk(params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: models.courses,
      },
    });

    return res.status(201).send(getTeacher);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export { addTeacher, addCourse, addAssocitation, getTeachers };
