const express = require("express");
const router = express.Router();
const Hostel = require("../controllers/hostelControllers");

router.param("id", Hostel.checkID);

router.route("/").get(Hostel.getAllHostels);

router.route("/:id").get(Hostel.getHostels);

module.exports = router;
