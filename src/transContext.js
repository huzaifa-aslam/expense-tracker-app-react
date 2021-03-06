import React, { createContext, useReducer } from "react";
import transReducer from "./transReducer";
const initialTransaction = [
  { id: 1, desc: "cash", amount: 100 },
  { id: 2, desc: "Expense", amount: -50 },
];

export const trnsaction = createContext(initialTransaction);

export const TrasactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(transReducer, initialTransaction);

  // add Transaction function

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
