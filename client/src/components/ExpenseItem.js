import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <ListItem
      sx={{ gap: 2, my: 1 }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete onClick={() => deleteExpense(expense.id)}"
          onClick={() => deleteExpense(expense._id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={expense.amount} secondary={expense.paymentType} />
    </ListItem>
  );
};

export default ExpenseItem;
