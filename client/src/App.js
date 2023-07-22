import { Container, Link, Typography } from "@mui/material";
import "./App.css";
import AddExpense from "./components/AddExpense";
import Balance from "./components/Balance";
import Navbar from "./components/Navbar";
import TransactionList from "./components/ExpenseList";
import { GlobalProvider } from "./context/GlobalState";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="sm">
        <Navbar />
        <AddExpense />
        <Balance />

        <TransactionList />
        <Copyright />
      </Container>
    </GlobalProvider>
  );
}

export default App;
