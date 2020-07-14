import React from 'react';

export const Balance = ({transactions}) => {

  const amounts = transactions.map(transaction => transaction.amount);


  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}
