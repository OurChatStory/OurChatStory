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

const Card4 = ({ drawData }) => {
  return (
    <Box bg="white" p="6" width="100vw" h="100vh">
      <Heading>Word count</Heading>
      <Flex>
        {drawData.no_of_messages_per_member[0].member}
        <Spacer />
        {drawData.no_of_messages_per_member[1].member}
      </Flex>
      <VictoryStack
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        colorScale={["#30475E", "#F5F5F5"]}
        style={{
          data: { stroke: "black", strokeWidth: 3 },
        }}
      >
        <VictoryBar
          barWidth={20}
          data={[
            {
              x: "a",
              y: drawData.no_of_messages_per_member[0].count,
            },
          ]}
          horizontal
        />

        <VictoryBar
          barWidth={20}
          data={[
            {
              x: "a",
              y: drawData.no_of_messages_per_member[1].count,
            },
          ]}
          horizontal
        />
      </VictoryStack>
    </Box>
  );
};

export default Card4;
