import React from "react";

const Amount = ({ resume }) => {
  const { amount } = resume;

  if (!amount) return null;

  return <h3>Amount to Pay: $ {amount}</h3>;
};

export default Amount;
