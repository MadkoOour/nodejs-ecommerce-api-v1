const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // An HTTP request logger middleware for Node.js web servers, typically used with Express

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");

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
  // res.status(404).json({ msg: `Can't find this route ${req.originalUrl}` });
  const err = new Error(`Can't find this route ${req.originalUrl}`);
  next(err.message);
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(400).json({ err });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running on PORT: => ${PORT}`);
});
