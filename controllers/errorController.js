const AppError = require("../util/appError");

module.exports = (err, req, res, next) => {
  err.statusCode == err.statusCode || 500;
  err.status = err.status || "error";

  res.send({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};
