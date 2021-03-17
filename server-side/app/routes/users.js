const express = require("express");
const router = express.Router();
const users = require("../controller/users");

router.post("/createUser",users.createUser);
router.post("/logIn" , users.logIn);

module.exports = router;