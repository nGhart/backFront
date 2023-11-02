import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

const Menu = () => {
  return (
    <div className="bigMenu cen">
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        <GridItem alignItems="center" w="100%" h="10" className="flex">
          <Link to="/dashboard">Add Transaction</Link>
        </GridItem>
        <GridItem w="100%" h="100%" alignItems="center" className="flex">
          <Link to="transactions">Transactions</Link>
        </GridItem>
        <GridItem alignItems="center" w="100%" h="100%" className="flex">
          <Link to="accounts">Accounts</Link>
        </GridItem>
        <GridItem w="100%" h="10" alignItems="center" className="flex">
          <Link to="report">Daily Report</Link>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Menu;
