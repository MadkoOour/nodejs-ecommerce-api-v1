const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // An HTTP request logger middleware for Node.js web servers, typically used with Express

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");

// Connect with db
dbConnection();

// express app
const app = express();

// Middlewares
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  console.log("*In dev mode*");
  app.use(morgan("dev"));
}

/************************************
 * Routes
 ************************************/

// Mount Routes
app.use("/api/v1/categories", categoryRoute);

app.all("/*splat", (req, res, next) => {
  next(new ApiError(`Can't find this route ${req.originalUrl}`, 404));
});

// Global error handling middleware
app.use(globalError);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running on PORT: => ${PORT}`);
});
