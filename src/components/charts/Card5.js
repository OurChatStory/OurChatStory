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
      The most used emojis are
      <TagCloud
        style={{
          fontFamily: "sans-serif",
          fontSize: 30,
          padding: 10,
          width: "100%",
          height: "100%",
        }}
      >
        {drawData.top_10_emojis.slice(0, 6).map(({ emoji }, i) => {
          return (
            <div
              style={{
                margin: 10,
                fontSize: i === 0 ? 100 : 30,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </TagCloud>
    </Box>
  );
};

export default Card1;
