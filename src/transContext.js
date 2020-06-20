import React, { createContext, useReducer } from "react";
import transReducer from "./transReducer";
const initialTransaction = [
  { desc: "cash", amount: 100 },
  { desc: "Expense", amount: 400 },
  { desc: "withdraw", amount: 700 },
];

export const trnsaction = createContext(initialTransaction);

export const TrasactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(transReducer, initialTransaction);
  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return (
    <trnsaction.Provider
      value={{
        trnsaction: state,
        addTransaction,
      }}
    >
      {children}
    </trnsaction.Provider>
  );
};
