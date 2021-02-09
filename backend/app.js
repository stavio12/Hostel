const express = require("express");
const morgan = require("morgan");
const app = express();

const AppError = require("./util/appError");
const GlobalError = require("./controllers/errorController");
//Middlewares
app.use(morgan("dev"));
//Routes
const routes = require("./routes/routes");

app.use("/api/hostel", routes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(GlobalError);

app.listen((PORT = 4000), () => {
  console.log("Sever running " + PORT);
});
