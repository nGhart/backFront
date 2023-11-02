import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <Box w="100vw" h="calc(100vh - 110px)" mt="15px">
      <Grid h="100%" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1} bg="blue">
          <Flex
            h="60%"
            w="100%"
            p="20px 5px"
            direction="column"
            justify="space-around"
          >
            <Heading color="white">Tellers</Heading>

            <Link to="register">
              <Text>Create New Teller</Text>
            </Link>

            <Link to="update">
              <Text>Password Recovery</Text>
            </Link>
            <Link to="delete">
              <Text>Delete Teller</Text>
            </Link>
            <Link to="transadmin">
              <Heading>Transactions</Heading>
            </Link>
          </Flex>
        </GridItem>

        <GridItem colSpan={4}>
          <Outlet />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AdminPage;
