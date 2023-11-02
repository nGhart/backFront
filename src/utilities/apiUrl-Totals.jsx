const BASE_URL = "https://tellerserver.onrender.com";

export const GetToday = () => {
  let todaysDate = new Date();
  return todaysDate.toDateString();
};

export const GetTotalsAndLength = (transactions, transactionType) => {
  const filteredTransactions = transactions.filter(
    (item) => item.transactionType === transactionType
  );

  const totalAmount = filteredTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  const transactionLength = filteredTransactions.length;
  return { totalAmount, transactionLength };
};

export default BASE_URL;
