import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CurrencyFormat from "react-currency-format";

const TranssactionList = () => {
  const { transakcije, deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transakcije.map((item) => {
          return (
            <li
              key={item.id}
              className={item.vrijednost > 0 ? "plus" : "minus"}
            >
              {item.text} <span>{item.vrijednost}</span>
              <CurrencyFormat
                value={item.vrijednost.toFixed(2)}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => <p className="money plus">{value}</p>}
              />
              <button
                className="delete-btn"
                onClick={() => {
                  deleteTransaction(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TranssactionList;
