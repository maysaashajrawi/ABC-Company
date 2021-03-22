const express = require("express");
const router = express.Router();
const complaint = require("../controller/complaints");
const {authUser,authRole} = require('../controller/auth')


router.get("/getAllComplaints",authUser,authRole("Admin"),complaint.getAllComplaints);
router.post('/updateComplaint/:status/:id',authUser,authRole("Admin"),complaint.updateComplaint);
router.get("/getUserComplaints/:id",authUser,authRole("customer"),complaint.getUserComplaints);
router.post("/createComplaint/:id",authUser,authRole("customer"),complaint.createComplaint);


module.exports = router;