import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(GlobalContext);

  // Step 1: Convert the MongoDB date string to a JavaScript Date object
  const dateObj = new Date(expense.createdAt);

  // Step 2: Extract year, month, and date from the Date object
  const year = dateObj.toLocaleString("default", { month: "short" }); // Get the abbreviated month name (e.g., Jan, Feb)
  const month = dateObj.getMonth() + 1; // Month is zero-based, so add 1
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Step 3: Format the output
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${date
    .toString()
    .padStart(2, "0")} ${hour}:${minutes}`;
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete onClick={() => deleteExpense(expense.id)}"
          onClick={() => deleteExpense(expense._id)}
          sx={{ "&:hover": { color: "#3a5a40" } }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ color: "green", backgroundColor: "transparent" }}>
          {expense.paymentType === "cash" ? (
            <LocalAtmIcon />
          ) : (
            <CreditCardIcon />
          )}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`$${expense.amount}`} secondary={formattedDate} />
    </ListItem>
  );
};

export default ExpenseItem;
