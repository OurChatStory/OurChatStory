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

const parser = require("../../script/parser");

const Card2 = ({ drawData }) => {
  return (
    <Box bg="white" p="6">
      You talked the most in the month of {drawData.most_active_month.month}
      <VictoryChart domainPadding={20}>
        <VictoryBar
          barRatio={1}
          animate={{ duration: 2000, onLoad: { duration: 1000 } }}
          style={{
            data: {
              fill: ({ datum }) =>
                datum.x === drawData.most_active_month.month
                  ? "#00ff00"
                  : "#00ffaa",
              fillOpacity: 0.7,
              strokeWidth: 3,
            },
            labels: {
              fontSize: 15,
              fill: ({ datum }) => (datum.x === 3 ? "#000000" : "#c43a31"),
            },
          }}
          data={parser.monthly_count_data(drawData.monthly_chats_count)}
        />
      </VictoryChart>
    </Box>
  );
};

export default Card2;
