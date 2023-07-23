
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config({ path: "./config.env" });

connectDB();

const expenses = require("./routes/expenses");

const app = express();

app.use(express.json());

// Serve static files from the React app

if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}



app.use("/api/v1/expenses", expenses);

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
