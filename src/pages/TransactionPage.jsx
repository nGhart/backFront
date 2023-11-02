import React from "react";
import AllTransactions from "../components/transactions/AllTransactions";

const TransactionPage = () => {
  return (
    <div>
      <h1 className="title cen">Transactions</h1>

      <div>
        <AllTransactions />
      </div>
    </div>
  );
};

export default TransactionPage;
