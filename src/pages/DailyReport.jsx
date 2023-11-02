import React, { useEffect, useState } from "react";
import BASE_URL, {
  GetToday,
  GetTotalsAndLength,
} from "../utilities/apiUrl-Totals";
import axios from "axios";
import { Container, Box, Heading } from "@chakra-ui/react";

const DailyReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [todaysTransaction, setTodaysTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let getStaffId = localStorage.getItem("id");

  //fetch all transactions by the teller
  useEffect(() => {
    const getTransactions = () => {
      axios
        .post(`${BASE_URL}/transaction/stafftrans`, { data: getStaffId })
        .then((resp) => {
          setTransactions(resp.data);
          setLoading(false);
          console.log(transactions);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };
    getTransactions();
  }, []);

  //filter transactions created today
  useEffect(() => {
    const getTodaysTransactions = () => {
      let dateToday = String(new Date().getDate()).padStart(2, "0");
      let monthToday = String(new Date().getMonth() + 1).padStart(2, "0");
      let yearToday = new Date().getFullYear();
      let today = `${yearToday}-${monthToday}-${dateToday}`;
      const todayTrans = (transactions || []).filter(
        (item) => item.createdAt.slice(0, 10) == today
      );
      setTodaysTransaction(todayTrans);
      console.log(todayTrans);
      console.log(today);
    };
    getTodaysTransactions();
  }, [transactions]);

  //loading and error handlers
  if (loading) {
    return (
      <div>
        <Heading as="h2" size="xl">
          Fetching Report ...
        </Heading>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Heading as="h2" size="xl">
          {error.message}
        </Heading>
      </div>
    );
  }

  const GetTotalsAndLength = (transactions, transactionType) => {
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
  //get total deposits and array length
  const { totalAmount: totalDeposits, transactionLength: depositLength } =
    GetTotalsAndLength(todaysTransaction, "deposit");

  //get total withdrawals and array length
  const { totalAmount: totalWithdrawals, transactionLength: withdrawalLength } =
    GetTotalsAndLength(todaysTransaction, "withdrawal");

  //get closing balance
  let balanceBroughtForward = 100000000;

  const ClosingBalance = () => {
    let closing = balanceBroughtForward + totalDeposits - totalWithdrawals;
    return closing.toFixed(2);
  };

  return (
    <Container width="100vw" centerContent>
      <Container bg="navy" color="white" borderRadius="lg" mb="5" p="5">
        <Heading>Daily Report</Heading>
        <hr />
        <Heading as="h6" size="md">
          {GetToday()}
        </Heading>
      </Container>

      <Box bg="white" borderRadius="lg" m="5" w="350px" h="130px">
        <div className="summaries">
          <h1 className="title2">Transaction Summary</h1>
          <h5 className="between">
            Number of Transactions:<span> {todaysTransaction.length}</span>
          </h5>
          <h5 className="between">
            Opening Balance:
            <span> GHS {balanceBroughtForward.toFixed(2)}</span>
          </h5>
          <h5 className="between">
            Closing Balance:<span>GHS {ClosingBalance()}</span>
          </h5>
        </div>
      </Box>
      <Box bg="white" borderRadius="lg" m="5" w="350px" h="100px">
        <div className="summaries">
          <h1 className="title2">Deposit Summary</h1>
          <h5 className="between">
            Number of deposits:
            <span> {depositLength}</span>
          </h5>
          <h5 className="between">
            Total deposits: <span>GHS {totalDeposits.toFixed(2)}</span>
          </h5>
        </div>
      </Box>
      <Box m="5" bg="white" borderRadius="lg" w="350px" h="100px">
        <div className="summaries">
          <h1 className="title2">Withdrawal Summary</h1>

          <h5 className="between">
            Number of withdrawals: <span>{withdrawalLength}</span>
          </h5>
          <h5 className="between">
            Total withdrawals: <span>GHS {totalWithdrawals.toFixed(2)}</span>
          </h5>
        </div>
      </Box>
    </Container>
  );
};

export default DailyReport;
