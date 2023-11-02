import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

import BASE_URL from "../../utilities/apiUrl-Totals";
import axios from "axios";
import { toast } from "react-toastify";

const AllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});

  let getStaffId = localStorage.getItem("id");

  useEffect(() => {
    const getTransactions = () => {
      axios
        .post(`${BASE_URL}/transaction/stafftrans`, { data: getStaffId })
        .then((resp) => {
          setTransactions(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getTransactions();
  }, []);

  const handleFilter = () => {
    console.log(filterOptions);
    axios
      .post(`${BASE_URL}/transaction/getAccount`, {
        ...filterOptions,
        staffId: getStaffId,
      })
      .then((resp) => {
        if (resp.data.msg === "No matching records found") {
          toast.error(resp.data.msg);
          return false;
        } else {
          setTransactions(resp.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = transactions.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(transactions.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <div>
        <Form className="filterContainer" onSubmit={handleFilter}>
          <FormControl className="filterAccount">
            <FormLabel>Account Number</FormLabel>
            <Input
              className="filterInput"
              type="text"
              placeholder="Account Number"
              name="accountNumber"
              onChange={(e) =>
                setFilterOptions({
                  ...filterOptions,
                  accountNumber: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl className="inputRadio" as="fieldset">
            <FormLabel className="labelRadio" as="legend">
              Transaction Type
            </FormLabel>

            <RadioGroup>
              <HStack spacing="24px">
                <Radio
                  value=""
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  All
                </Radio>
                <Radio
                  value="deposit"
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  Deposit
                </Radio>
                <Radio
                  value="withdrawal"
                  name="transactionType"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      transactionType: e.target.value,
                    })
                  }
                >
                  Withdrawal
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <div>
            <Button
              bg="navy"
              color="white"
              type="submit"
              _hover={{ backgroundColor: "tomato" }}
            >
              Filter
            </Button>
          </div>
        </Form>
      </div>
      <div>
        <TableContainer className="tableSection">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Date</Th>
                <Th>Transactor</Th>
                <Th>Contact</Th>
                <Th>ID Number</Th>
                <Th>Account Branch</Th>
                <Th>Account Name</Th>
                <Th>Account Number</Th>
                <Th>Account Type</Th>
                <Th>Transaction</Th>
                <Th>Payment Method</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemsShown.map((item, index) => {
                const newIndex = firstIndex + index;
                return (
                  <Tr key={index}>
                    <Td>{newIndex + 1}</Td>
                    <Td>{item.createdAt.slice(0, 10)}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.contact}</Td>
                    <Td>{item.idNumber}</Td>
                    <Td>{item.branch}</Td>
                    <Td>{item.accountName}</Td>
                    <Td>{item.accountNumber}</Td>
                    <Td>{item.accountType}</Td>
                    <Td>{item.transactionType}</Td>
                    <Td>{item.paymentType}</Td>
                    <Td>GHS {item.amount.toFixed(2)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <TableCaption>
              <div className="page">
                <div className="pageContainer">
                  <div className="prev">
                    <i onClick={prevPage}>Prev</i>
                  </div>
                  {numbers.map((item) => (
                    <div
                      key={item}
                      className={`${
                        currentPage === item ? "activePage" : "pages"
                      }`}
                    >
                      <i onClick={() => changePage(item)}>{item}</i>
                    </div>
                  ))}
                  <div className="next">
                    <i onClick={nextPage}>Next</i>
                  </div>
                </div>
              </div>
            </TableCaption>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllTransactions;
