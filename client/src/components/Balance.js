import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { expenses } = useContext(GlobalContext);

  const cashAmounts = expenses
    .filter((expense) => expense.paymentType === "cash")
    .map((expense) => expense.amount);

  const totalCashExpense = Number(
    cashAmounts.reduce((acc, item) => acc + item, 0).toFixed(2)
  );

  const creditAmounts = expenses
    .filter((expense) => expense.paymentType === "credit")
    .map((expense) => expense.amount);

  const totalCreditExpense = Number(
    creditAmounts.reduce((acc, item) => acc + item, 0).toFixed(2)
  );

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Total Cash Expense
        </Typography>
        <h2>${totalCashExpense}</h2>
      </Box>

      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Total Credit Expense
        </Typography>
        <h2>${totalCreditExpense}</h2>
      </Box>
    </Box>
  );
};

export default Balance;
