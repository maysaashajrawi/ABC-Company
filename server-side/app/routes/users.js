const express = require("express");
const router = express.Router();
const users = require("../controller/users");
const auth = require("../controller/auth")
router.post("/createUser",users.createUser);
router.post("/logIn" , users.logIn);
router.post("/createAdmin" ,auth.authRole('superAdmin'),users.createAdmin);

module.exports = router;