import { Button, InputAdornment, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("cash");

  const { addExpense } = useContext(GlobalContext);

  const handleRadioBtnChange = (e) => {
    setPaymentType(e.target.value);
  };
  // console.log(amount, paymentType);

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
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
        sx={{
          width: "100%",
        }}
        color="success"
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
        value={paymentType}
        onChange={handleRadioBtnChange}
        row
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="credit" control={<Radio />} label="Credit" />
      </RadioGroup>

      <Button
        color="success"
        variant="contained"
        type="submit"
        borderRadius="20px"
        sx={{ width: "100%", my: 2 }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default AddExpense;
