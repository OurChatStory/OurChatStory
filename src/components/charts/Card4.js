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
      Word count
      <Flex>
        {drawData.members[0]}
        <Spacer />
        {drawData.members[1]}
      </Flex>
      <VictoryStack
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        colorScale={["tomato", "orange"]}
        style={{
          data: { stroke: "black", strokeWidth: 3 },
        }}
      >
        <VictoryBar
          barWidth={20}
          data={[
            {
              x: "a",
              y: drawData.word_count_per_member[
                Object.keys(drawData.word_count_per_member)[0]
              ],
            },
          ]}
          horizontal
        />
        <VictoryBar
          barWidth={20}
          data={[
            {
              x: "a",
              y: drawData.word_count_per_member[
                Object.keys(drawData.word_count_per_member)[1]
              ],
            },
          ]}
          horizontal
        />
      </VictoryStack>
    </Box>
  );
};

export default Card1;
