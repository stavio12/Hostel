const fs = require("fs");
const AppError = require("./../util/appError");
const catchAsync = require("./../util/catchAsync");
const Hostel = require("./../model/hostelModel");

exports.getAllHostels = catchAsync(async (req, res) => {
  const allHostels = await Hostel.find();
  res.send({ status: 200, results: allHostels.length, data: allHostels });
});

exports.getHostels = catchAsync(async (req, res, next) => {
  const hostel = await Hostel.findById(req.params.id);
  if (!hostel) {
    return next(new AppError("Hostel Not Found!", 404));
  }
  res.send({ status: 200, data: hostel });
});

exports.createHostel = catchAsync(async (req, res) => {
  const newHostel = await Hostel.create(req.body);

  res.send({ status: 200, data: newHostel });
});

exports.updateHostel = catchAsync(async (req, res) => {
  const hostel = await Hostel.findByIdAndUpdate(req.params.id, req.body);

  res.send({ status: 200, status: "Updated", data: hostel });
});

exports.deleteHostel = catchAsync(async (req, res) => {
  const deleteHostel = await Hostel.findByIdAndDelete(req.params.id);

  res.send({ status: 200, status: "Delete", data: deleteHostel });
});
