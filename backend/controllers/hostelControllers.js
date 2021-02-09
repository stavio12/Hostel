const fs = require("fs");
const AppError = require("./../util/appError");

const hostels = JSON.parse(fs.readFileSync(`${__dirname}/../data/hostel.JSON`));

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > hostels.length) {
    return next(new AppError("Not Found", 404));
  }
  next();
};

exports.getAllHostels = (req, res) => {
  res.send({ status: 200, data: hostels });
};

exports.getHostels = (req, res) => {
  const id = req.params.id * 1;
  console.log(id);
  const hostel = hostels.find((el) => el.id === id);

  res.send({ status: 200, data: hostel });
};
