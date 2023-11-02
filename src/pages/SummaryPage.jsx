import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Grid, GridItem } from "@chakra-ui/react";

const SummaryPage = () => {
  return (
    <Center width="350px" height="400px" borderRadius="lg" bg="white">
      <Center h="250px" w="100%">
        <div>
          <h1 className="cen title">Add a New Transaction</h1>

          <Grid templateColumns="repeat(5, 1fr)" gap={4} pt="10">
            <GridItem colStart={2} h="10">
              <Link to="adddeposit">
                <Button
                  width="150px"
                  bg="navy"
                  color="white"
                  _hover={{ backgroundColor: "tomato" }}
                >
                  Add Deposit
                </Button>
              </Link>
            </GridItem>
            <GridItem colStart={4} h="10">
              <Link to="addwithdrawal">
                <Button
                  width="150px"
                  bg="navy"
                  color="white"
                  _hover={{ backgroundColor: "tomato" }}
                >
                  Add Withdrawal
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </div>
      </Center>
    </Center>
  );
};

export default SummaryPage;
