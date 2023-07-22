const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./db");

dotenv.config({ path: "./config.env" });

connectDB();

const expenses = require("./routes/expenses");

const app = express();
app.use(express.json());
app.use("/api/v1/expenses", expenses);

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
