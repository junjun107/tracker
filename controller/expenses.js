const Expense = require("../models/expensemodel");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();

    return res.status(200).json({
      success: true,
      count: expenses.length,
      data: expenses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addExpense = async (req, res, next) => {
  try {
    const { amount, paymentType } = req.body;
    const expense = await Expense.create(req.body);
    return res.status(201).json({
      success: true,
      data: expense,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
exports.deleteExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data: { expense },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
