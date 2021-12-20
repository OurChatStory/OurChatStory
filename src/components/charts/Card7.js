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

const Card6 = ({ drawData }) => {
  return (
    <Box bg="#30475E" p="6" w="100vw" h="100vh">
      <Text color="#F5F5F5" fontSize="4xl">
        There were some cold moments
      </Text>
      <Text color="#F5F5F5" fontSize="6xl">
        Like those between{" "}
        {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
        {parser.format_time_gap(drawData.longest_gap.end_time)}
      </Text>
      <Text color="#F5F5F5" fontSize="6xl">
        You didn't talked for {parser.time_gap(drawData.longest_gap)} days🥺
      </Text>
    </Box>
  );
};

export default Card6;
