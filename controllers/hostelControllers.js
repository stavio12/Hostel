const fs = require("fs");
const AppError = require("../util/appError");
const APIFeatures = require("../util/ApiFeatures");
const catchAsync = require("../util/catchAsync");
const Hostel = require("../model/hostelModel");

//Middle ware for searching for cheapsest and expensive hostels
exports.cheapestHostels = catchAsync(async (req, res, next) => {
  req.query.sort = "-rating,price";

  next();
});

exports.expensiveHostels = catchAsync(async (req, res, next) => {
  req.query.sort = "-price,rating";

  next();
});

exports.getAllHostels = catchAsync(async (req, res) => {
  const features = new APIFeatures(Hostel.find(), req.query).filter().sort().limitPage().pagination();
  const allHostels = await features.queryHostel;
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
