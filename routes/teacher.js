const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher");

// Home Teacher List Page
// router.get("/teacher", teacherController?.renderTeacher);

// Render Form
router.get("/add-teacher", teacherController?.renderFormTeacher);

// Post add New Teacher
router.post("/add-teacher", teacherController?.postAddTeacher);

// Get Detail By ID
// router.post("/detail-teacher/:id", teacherController?.renderDetailTeacher);

// Delete Teacher
// router.post("/delete-teacher", teacherController?.deleteDataTeacher);

// Render Form Edit
// router.get("/edit-teacher/:id", teacherController?.renderEditFormTeacher);

// Edit Teacher
// router.post("/edit-teacher/:id", teacherController?.postEditTeacher);

module.exports = router;
