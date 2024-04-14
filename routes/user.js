const express = require("express");
const controller = require("../controller/user");
const router = express.Router();
// Post New Users
router.post("/add-user", controller.postUser);

// Get All User
router.get("/users", controller.user);

// Details User
router.post("/user/:id", controller.getDetailUser);

module.exports = router;
