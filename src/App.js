import React, { useState } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import "./App.css";

function App() {
  const initialState = [];

  const [transactions, setTransactions] = useState(initialState);


  const addTransaction = (ourTransaction) => {
    setTransactions([...transactions, ourTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
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
