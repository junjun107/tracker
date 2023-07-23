import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 1,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <LocalAtmIcon color="success" />
          <Typography sx={{ py: 2 }} variant="h6" component="div">
            Total Cash Expense
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">${totalCashExpense}</Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CreditCardIcon color="success" />
          <Typography sx={{ py: 2 }} variant="h6" component="div">
            Total Credit Expense
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">${totalCreditExpense}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
