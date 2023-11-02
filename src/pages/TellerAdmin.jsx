import React, { useState, useEffect } from "react";
import { Container, Box, Heading } from "@chakra-ui/react";
import BASE_URL, {
  GetToday,
  GetTotalsAndLength,
} from "../utilities/apiUrl-Totals";
import axios from "axios";

const TellerAdmin = () => {
  const [transactions, setTransactions] = useState([]);
  const [todaysTransaction, setTodaysTransaction] = useState([]);

  useEffect(() => {
    //get transactions from all tellers
    const getTransactions = () => {
      axios.get(`${BASE_URL}/transaction`).then((resp) => {
        setTransactions(resp.data);
      });
    };
    getTransactions();
  }, []);

  //filter out today's transaction
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
    };
    getTodaysTransactions();
  }, [transactions]);

  //get number and totals of today's deposits
  const { totalAmount: totalDeposits, transactionLength: depositLength } =
    GetTotalsAndLength(todaysTransaction, "deposit");

  //get number and totals of today's deposits
  const { totalAmount: totalWithdrawals, transactionLength: withdrawalLength } =
    GetTotalsAndLength(todaysTransaction, "withdrawal");

  return (
    <Container width="100vw" mt="10px" centerContent>
      <Container bg="navy" color="white" borderRadius="lg" mb="5" p="5">
        <Heading>Admin Daily Report</Heading>
        <hr />
        <Heading as="h6" size="md">
          {GetToday()}
        </Heading>
      </Container>

      <Box bg="white" borderRadius="lg" m="5" w="350px" h="100px">
        <div className="summaries">
          <h1 className="title2">Transaction Summary</h1>
          <h5 className="between">
            Number of Transactions:<span> {todaysTransaction.length}</span>
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
            Total withdrawals:
            <span>GHS {totalWithdrawals.toFixed(2)}</span>
          </h5>
        </div>
      </Box>
    </Container>
  );
};

export default TellerAdmin;
