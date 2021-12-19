import React, { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Box,
  Center,
  Spinner,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import TinderCard from "react-tinder-card";

const Card1 = require("./charts/Card1");
const Card2 = require("./charts/Card2");
const Card3 = require("./charts/Card3");
const Card4 = require("./charts/Card4");
const Card5 = require("./charts/Card5");

const Dashboard = ({ drawData }) => {
  return (
    <Box p="2rem" bgGradient="linear(green.100, white)">
      <Heading> #Wrapped </Heading>
      <Heading size="md">
        Chat between {drawData.members[0]} & {drawData.members[1]}
      </Heading>
      <Box m={["1rem", "3rem"]}>
        {/* <TinderCard>
          <Card1 drawData />
        </TinderCard> */}
        {/* <TinderCard>
          <Card2 drawData />
        </TinderCard>

        <TinderCard>
          <Card3 drawData />
        </TinderCard>

        <TinderCard>
          <Card4 drawData />
        </TinderCard>

        <TinderCard>
          <Card5 drawData />
        </TinderCard> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
