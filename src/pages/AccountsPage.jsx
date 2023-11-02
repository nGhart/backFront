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
} from "@chakra-ui/react";
import BASE_URL from "../utilities/apiUrl-Totals";
import axios from "axios";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);

  //Get Accounts
  useEffect(() => {
    const getAccounts = () => {
      axios
        .get(`${BASE_URL}/account`)
        .then((resp) => {
          setAccounts(resp.data);
          //console.log(resp.data);
        })
        .catch((err) => console.log(err));
    };
    getAccounts();
  }, []);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = accounts.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(accounts.length / itemsPerPage);
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
    <div className="behind">
      <div>
        <h1 className="title cen">Accounts</h1>
        <TableContainer className="accountTable">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Date</Th>
                <Th>Account Name</Th>
                <Th>Account Type</Th>
                <Th>Branch</Th>
                <Th>Account Number</Th>
                <Th>Balance</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemsShown.map((item, index) => {
                const newIndex = firstIndex + index;
                return (
                  <Tr key={index}>
                    <Td>{newIndex + 1}</Td>
                    <Td>{item?.createdAt?.slice(0, 10)}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.accountType}</Td>
                    <Td>{item.branch}</Td>
                    <Td>{item.accNumber}</Td>
                    <Td>GHS {item.balance.toFixed(2)}</Td>
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

export default AccountsPage;
