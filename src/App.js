import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

function App() {
  //const initialState = [];

  // retrieve all previous expenses from local storage
  const initialState = localStorage.getItem("stored-expenses")
      ? JSON.parse(localStorage.getItem("stored-expenses"))
      : [];


  const [transactions, setTransactions] = useState(initialState);

  // store expenses in LocalStorage
  useEffect(() => {
    localStorage.setItem("stored-expenses", JSON.stringify(transactions));
  }, [transactions]);


  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList deleteTransaction={deleteTransaction} transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </>
  );
}

export default App;
