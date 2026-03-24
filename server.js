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
  app.use(morgan("combined"));
}

/************************************
 * Routes
 ************************************/

app.use("/api/v1/categories", categoryRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running on PORT: => ${PORT}`);
});
