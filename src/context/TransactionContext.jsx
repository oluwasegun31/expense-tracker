import { createContext, useReducer } from "react";

// initial state
const initialState = [];
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
