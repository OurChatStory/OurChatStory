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
    <Box
      bgImage="url('https://i.pinimg.com/originals/72/f8/cd/72f8cd41bcb6f50d45497f16c7a03612.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="140%"
      p="3"
      pt="10"
      w="100vw"
      h="100vh"
    >
      <Text
        pt="4rem"
        color="#000000"
        fontSize="3xl"
        align="center"
        fontFamily="mono"
      >
        There were some cold moments
      </Text>
      <Text
        pt="4rem"
        color="#000000"
        fontFamily="monospace"
        fontSize="3xl"
        align="center"
      >
        Like those between <br />
        {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
        {parser.format_time_gap(drawData.longest_gap.end_time)}
      </Text>
      <br />
      <Text pt="3rem" color="#000000" fontSize="3xl" align="center">
        You didn't talked for <br />
        {parser.time_gap(drawData.longest_gap)} consecutive days🥺
      </Text>
    </Box>
  );
};

export default Card6;
