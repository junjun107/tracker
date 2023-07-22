import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  expenses: [],
  loading: true,
  error: null,
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //ACTIONS
  async function addExpense(expense) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/v1/expenses", expense, config);

      dispatch({
        type: "ADD_EXPENSE",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: error.response.data.error,
      });
    }
  }
  async function getExpenses() {
    try {
      const res = await axios.get("/api/v1/expenses");
      dispatch({
        type: "GET_EXPENSES",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteExpense(id) {
    try {
      await axios.delete(`/api/v1/expenses/${id}`);
      dispatch({
        type: "DELETE_EXPENSE",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "EXPENSE_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        expenses: state.expenses,
        loading: state.loading,
        getExpenses,
        deleteExpense,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
