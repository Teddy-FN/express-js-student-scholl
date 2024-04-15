const express = require("express");
const controller = require("../controller/student");
const router = express.Router();
// Post New Users
router.post("/add-student", controller.postUser);

// Get All User
router.get("/student", controller.user);

// Details User
router.post("/student/:id", controller.getDetailUser);

module.exports = router;
