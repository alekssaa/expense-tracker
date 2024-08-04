import React from "react";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [name, setName] = useState("");
  const [vrijednost, setVrijednost] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: new Date(),
      text: name,
      vrijednost: parseFloat(vrijednost),
    };
    addTransaction(newTransaction);
    setName("");
    setVrijednost("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter name of transaction.."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount<br></br>
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={vrijednost}
            onChange={(e) => {
              setVrijednost(e.target.value);
            }}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
