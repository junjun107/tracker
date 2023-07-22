const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense,
} = require("../controller/expenses");

router.route("/").get(getExpenses).post(addExpense);

router.route("/:id").delete(deleteExpense);

module.exports = router;


// bzbijun;
// N01r7dMSosVreKDk
// mongodb+srv://bzbijun:N01r7dMSosVreKDk@cluster0.khszdej.mongodb.net/
