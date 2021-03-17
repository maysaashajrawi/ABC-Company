const express = require("express");
const router = express.Router();
const complaint = require("../controller/complaints");
router.get("/getAllComplaints",complaint.getAllComplaints);
router.get("/getUserComplaints/:id",complaint.getUserComplaints);
router.post("/createComplaint/:id",complaint.createComplaint);
router.post('/updateComplaint/:status/:id',complaint.updateComplaint)
module.exports = router;