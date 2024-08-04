import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import CurrencyFormat from "react-currency-format";

const IncomeExpanse = () => {
  const { transakcije } = useContext(GlobalContext);

  const amounts = transakcije.map((item) => {
    return item.vrijednost;
  });
  const incom = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <CurrencyFormat
          value={incom.toFixed(2)}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <p className="money plus">{value}</p>}
        />
      </div>
      <div>
        <h4>Expense</h4>
        <CurrencyFormat
          value={expense.toFixed(2)}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <p className="money minus">{value}</p>}
        />
      </div>
    </div>
  );
};

export default IncomeExpanse;
