const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher");

// Home Teacher List Page
router.get("/teacher", teacherController.renderTeacher);

// Render Form
router.get("/add-teacher", teacherController.renderFormTeacher);

// Post add New Teacher
router.post("/add-teacher", teacherController.postAddTeacher);

module.exports = router;
