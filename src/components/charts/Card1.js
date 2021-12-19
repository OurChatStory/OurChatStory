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
import TagCloud from "react-tag-cloud";
import TinderCard from "react-tinder-card";

import {
  VictoryBar,
  VictoryPie,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryHistogram,
  VictoryScatter,
  VictoryStack,
} from "victory";
import CountUp from "react-countup";
// const drawData = require("../data/sample-chat");
var normalize = require("normalize-number");

const Card1 = ({ drawData }) => {
  return (
    <Box boxShadow="2xl" bg="white" p="6" mb="10" rounded="md">
      Total no of chats <br />
      <Heading>
        <CountUp end={drawData.total_no_of_chats} duration={2} />
      </Heading>
      <br />
      Almost always its {drawData.who_texts_first} who texts first
    </Box>
  );
};

export default Card1;
