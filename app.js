const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

const AppError = require("./util/appError");
const GlobalError = require("./controllers/errorController");
//Middlewares
app.use(morgan("dev"));
dotenv.config({ path: "./config.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

if (process.env.NODE_ENV === "development") {
  mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database local connected");
} else if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("database connected");
}

//Routes
const routes = require("./routes/routes");

app.use("/api/hostel", routes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(GlobalError);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Sever running " + PORT);
});
