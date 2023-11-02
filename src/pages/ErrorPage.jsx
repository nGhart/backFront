import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  //handle routing error
  if (error.status === 404) {
    return (
      <div className="errorSection">
        <Box bg="white" p="20" borderRadius="lg">
          <Heading as="h2" size="lg">
            Page not found
          </Heading>
          <Button
            onClick={() => navigate(-1)}
            bg="navy"
            color="white"
            m="10"
            _hover={{
              backgroundColor: "tomato",
            }}
          >
            Back to previous Page
          </Button>
        </Box>
      </div>
    );
  }

  return (
    //handle other errors
    <div className="errorSection">
      <Box bg="white" p="20" borderRadius="lg">
        <Heading as="h2" size="lg">
          Something went wrong
        </Heading>
        <Button
          onClick={() => navigate(-1)}
          bg="navy"
          color="white"
          m="10"
          _hover={{
            backgroundColor: "tomato",
          }}
        >
          Back to previous Page
        </Button>
      </Box>
    </div>
  );
};

export default ErrorPage;
