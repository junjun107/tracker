const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_EXPENSES":
      return {
        ...state,
        loading: false,
        expenses: action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
