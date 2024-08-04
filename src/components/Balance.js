import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import CurrencyFormat from "react-currency-format";
const Balance = () => {
  const { transakcije } = useContext(GlobalContext);

  // const amounts = transakcije.map((item) => {
  //   return item.vrijednost;
  // });

  // const total = amounts.reduce((acc, item) => {
  //   return (acc += item);
  // }, 0); =====> duzi nacin ima jednostavniji:

  const total = transakcije.reduce((acc, item) => {
    return (acc += item.vrijednost);
  }, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <CurrencyFormat
        value={total.toFixed(2)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => <h1>{value}</h1>}
      />
    </>
  );
};

export default Balance;
