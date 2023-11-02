import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { Heading, Text, Button } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <div className="landingSection">
      <div className="between landingNav">
        <div>
          <Logo />
        </div>
        <div className="landingButtons">
          <Button
            className="landingSign"
            bg="navy"
            color="white"
            border="2px"
            borderColor="navy"
            _hover={{
              background: "white",
              color: "tomato",
            }}
          >
            <Link className="signLink" to="/login">
              Log in
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex between landingMain">
        <div className="landing left">
          <Heading as="h1" size="4xl" color="tomato" className="left">
            Welcome
          </Heading>

          <Heading className="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            eius, quibusdam magnam ut inventore
          </Heading>
          <Text className="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nostrum iusto obcaecati adipisci
          </Text>
          <Text className="left">
            Photo by
            <a href="https://unsplash.com/@micahboswell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              {" "}
              Micah Boswell{" "}
            </a>
            on
            <a href="https://unsplash.com/photos/blue-and-black-wooden-board-OPnBJ5L2oxs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              {" "}
              Unsplash
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
