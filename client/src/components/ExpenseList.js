import { Typography, Box, List } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

const TransactionList = () => {
  const { expenses, getExpenses } = useContext(GlobalContext);
  // console.log(expenses);
  useEffect(() => {
    getExpenses();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
        History
      </Typography>

      <List>
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
