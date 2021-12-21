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

const parser = require("../../script/parser");

const Card2 = ({ drawData }) => {
  return (
    <Box bg="#26001B" p="3" pt="5rem" w="100vw" h="100vh">
      <Text color="#F5F5F5" fontSize="4xl" align="center">
        Y'all talked with each other throughout the year. But the most in
      </Text>
      <Text color="#F5F5F5" fontSize="5xl" align="center">
        {parser.months[drawData.most_active_month.month]}
      </Text>

      <Box>
        <VictoryLine
          height="200"
          interpolation="natural"
          style={{
            data: {
              stroke: "#FFF600",
              strokeWidth: 4,
              strokeLinecap: "round",
            },
          }}
          animate={{ duration: 4000, onLoad: { duration: 4000 } }}
          data={parser.monthly_count_data(drawData.monthly_chats_count)}
        />
      </Box>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        Corr coff:{drawData.month_correlation} <br />
        Infact y'all sent {drawData.most_active_month.count} on{" "}
        {parser.months[drawData.most_active_month.month]}
        <br />
        Now that's a lot of messages!!
      </Text>
    </Box>
  );
};

export default Card2;
