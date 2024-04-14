const express = require("express");
const controller = require("../controller/home");
const router = express.Router();

// List Users
router.get("/", controller.getHome);

module.exports = router;
