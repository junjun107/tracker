import React, { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormLabel from "@mui/material/FormLabel";
import { Button, InputAdornment, InputLabel } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("cash");

  const { addExpense } = useContext(GlobalContext);

  const handleRadioBtnChange = (e) => {
    setPaymentType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      amount: Number(amount),
      paymentType,
    };
    addExpense(newExpense);
    setAmount("");
    setPaymentType("cash");
  };
  return (
    <FormControl
      component="form"
      fullWidth
      sx={{
        mt: 3,
        alignItems: "center",
      }}
      onSubmit={onSubmit}
    >
      <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
        type="number"
        required
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        sx={{ width: "100%" }}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />

      <FormLabel sx={{ mt: 4, mb: 1 }} id="demo-radio-buttons-group-label">
        Payment Type
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="cash"
        name="radio-buttons-group"
        onChange={handleRadioBtnChange}
        row
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="credit" control={<Radio />} label="Credit" />
      </RadioGroup>

      <Button variant="contained" type="submit" sx={{ width: "100%", my: 2 }}>
        Submit
      </Button>
    </FormControl>
  );
};

export default AddExpense;
