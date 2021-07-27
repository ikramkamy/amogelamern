const express = require("express");
const router = express.Router();
const controller = require("./controller.js");

router.post("/",controller.registerUser)
router.get("/info",controller.getUsers);

module.exports = router;