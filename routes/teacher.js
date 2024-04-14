const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher");

router.get("/teacher", teacherController.renderFormTeacher);

router.post("/teacher/add-teacher", teacherController.postAddTeacher);

module.exports = router;
