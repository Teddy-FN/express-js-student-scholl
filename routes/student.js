const express = require("express");
const controller = require("../controller/student");
const router = express.Router();

// Home Student List Page
router.get("/student", controller?.renderStundent);

// Render Add Form
router.get("/add-student", controller?.renderFormAddStudent);

// Post Add New Student
router.post("/add-student", controller?.postUser);

// Details Student
router.post("/student/:id", controller?.getDetailUser);

// Delete Student
router.post("/delete-student", controller?.deleteDataStudent);

module.exports = router;
