const fs = require("fs");
const AppError = require("./../util/appError");
const catchAsync = require("./../util/catchAsync");
const Hostel = require("./../model/hostelModel");

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
  const queryObj = { ...req.query };

  const excludefields = ["fields", "page", "sort", "limit"]; //Filter and delete
  excludefields.forEach((el) => delete queryObj[el]);

  let queryStr = JSON.stringify(queryObj); //Filter ,find and replace // Remeber to change this to  lower case
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let queryHostel = Hostel.find(JSON.parse(queryStr));

  //Sort query
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    queryHostel = queryHostel.sort(sortBy); //sort(Sort A, Sort B and so on)
  } else {
    queryHostel = queryHostel.sort("-createdAt"); //sort by time it was created
  }

  //Limit fields sent to user
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    queryHostel = queryHostel.select(fields); // show what the user wants
  } else {
    queryHostel = queryHostel.select("-__v"); // dont show this
  }

  //Pagination
  const page = req.query.page * 1 || 1;
  const limitPage = req.query.limit * 1 || 100;
  const skipPages = (page - 1) * limitPage; //eg: if page input = 3 do (3-1 = 2) * 10... Skip 2 pages and land me to page 3

  if (req.query.page) {
    const numHostels = await Hostel.countDocuments(); //Count number of documents in the database
    if (skipPages > numHostels) throw new AppError("This page does not exisit!", 404);
    queryHostel = queryHostel.skip(skipPages).limit(limitPage);
  }

  const allHostels = await queryHostel;
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
