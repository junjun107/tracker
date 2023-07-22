import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  return (
    <ListItem
      sx={{ gap: 5, my: 2, p: 2 }}
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
