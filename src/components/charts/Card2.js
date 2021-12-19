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
  VictoryAxis,
} from "victory";
import CountUp from "react-countup";
// const drawData = require("../data/sample-chat");
var normalize = require("normalize-number");

const parser = require("../../script/parser");

const Card2 = ({ drawData }) => {
  return (
    <Box bg="#30475E" p="6" w="100vw" h="100vh">
      <Text color="#F5F5F5" fontSize="4xl">
        You talked the most in the month of
      </Text>
      <Text color="#F5F5F5" fontSize="6xl">
        {drawData.most_active_month.month}
      </Text>

      <VictoryLine
        interpolation="natural"
        style={{
          data: {
            stroke: "#F05454",
            strokeWidth: 4,
            strokeLinecap: "round",
          },
        }}
        animate={{ duration: 4000, onLoad: { duration: 4000 } }}
        data={parser.monthly_count_data(drawData.monthly_chats_count)}
      />
    </Box>
  );
};

export default Card2;
