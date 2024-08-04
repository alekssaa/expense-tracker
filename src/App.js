import React from "react";
import { GlobalProvaider } from "./context/GlobalState";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpanse from "./components/IncomeExpanse";
import TranssactionList from "./components/TranssactionList";
import AddTransaction from "./components/AddTransaction.js";
const App = () => {
  return (
    <GlobalProvaider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpanse />
      <TranssactionList />
      <AddTransaction />
    </GlobalProvaider>
  );
};

export default App;
