import EventNoteIcon from "@mui/icons-material/EventNote";
import { Box, Chip, Divider, List } from "@mui/material";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseItem from "./ExpenseItem";

const TransactionList = () => {
  const { expenses, getExpenses } = useContext(GlobalContext);
  useEffect(() => {
    getExpenses();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        overflow: "auto",
      }}
    >
      <Divider>
        <Chip
          variant="outlined"
          color="success"
          label="History"
          icon={<EventNoteIcon />}
        />
      </Divider>

      <List>
        {expenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense._id} />
        ))}
      </List>
    </Box>
  );
};

export default TransactionList;
