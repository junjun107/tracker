const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

// connectDB();

const expenses = require("./routes/expenses");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/expenses", expenses);

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// app.listen(
//   PORT,
//   console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
// );
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongodb connected");
    app.listen(
      PORT,
      console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
    );
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });
