import { Router } from "express";

import { teachers } from "../controllers";

const router = Router();

router.post("/teachers", teachers.addTeacher);
router.get("/teachers/:id", teachers.getTeachers);

router.post("/courses", teachers.addCourse);

router.post("/association", teachers.addAssocitation);

export default router;
