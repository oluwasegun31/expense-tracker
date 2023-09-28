import { createContext, useReducer } from "react";

// initial state
const initialState = [
  { id: 1, title: "Salary", amount: 45000 },
  { id: 2, title: "Diapers", amount: -12000 },
  { id: 3, title: "FoodStuff", amount: -22000 },
];
// Transaction context
export const TransacContext = createContext(initialState);

export default function TrnascProvider({ children }) {
  //Transaction Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "DELETE_TRANS":
        return state.filter((item) => item.id !== action.payload);
      case "ADD_TRANS":
        return [action.payload, ...state];
      default:
        return state;
    }
  };
  const [expense, dispatch] = useReducer(reducer, initialState);
  // delete Transaction
  const deleteTrans = (id) => {
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
  };
  // add Transaction
  const addExpense = (transaction) => {
    dispatch({
      type: "ADD_TRANS",
      payload: transaction,
    });
  };
  return (
    <TransacContext.Provider value={{ expense, deleteTrans, addExpense }}>
      {children}
    </TransacContext.Provider>
  );
}
