import React, { createContext, useEffect, useReducer } from "react";

const getTransakcije = () => {
  if (localStorage.getItem("transakcije")) {
    return JSON.parse(localStorage.getItem("transakcije"));
  } else return [];
};

export const GlobalContext = createContext();
const initalState = {
  transakcije: getTransakcije(),
};

const reducer = (state, action) => {
  if (action.type === "DELETE_TRANSACTION") {
    return {
      ...state,
      transakcije: state.transakcije.filter((transakcija) => {
        return transakcija.id !== action.payload;
      }),
    };
  } else if (action.type === "ADD_TRANSACTION") {
    return { ...state, transakcije: [...state.transakcije, action.payload] };
  }
};

export const GlobalProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  useEffect(() => {
    localStorage.setItem("transakcije", JSON.stringify(state.transakcije));
  }, [state.transakcije]);
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider ///popraviti
      value={{
        transakcije: state.transakcije,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
