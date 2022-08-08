const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const ejs = require("ejs");

// Load configuration
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny")); // for logging
}

//Set Middleware
app.set("view engine", "ejs");

// app.get("/", require("./routes/index")); //Router
app.use(require("./routes/index"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
