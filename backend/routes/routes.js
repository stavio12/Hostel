const express = require("express");
const router = express.Router();
const Hostel = require("../controllers/hostelControllers");

router.route("/sortBy-cheapest-hostels").get(Hostel.cheapestHostels, Hostel.getAllHostels);
router.route("/sortBy-expensive-hostels").get(Hostel.expensiveHostels, Hostel.getAllHostels);

router.route("/").get(Hostel.getAllHostels).post(Hostel.createHostel);

router.route("/:id").get(Hostel.getHostels).patch(Hostel.updateHostel).delete(Hostel.deleteHostel);

module.exports = router;
