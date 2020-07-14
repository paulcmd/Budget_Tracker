import React from "react";

export const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";


