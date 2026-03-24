const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

//Connect with db
const dbConnection = (params) => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log("Connected Successfully! on host:", conn.connection.host);
    })
    .catch((err) => {
      console.error("Error happend:", err);
      process.exit(1);
    });
};

module.exports = dbConnection;
