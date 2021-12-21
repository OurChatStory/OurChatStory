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
import background from "../../static/bg10.png";
const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <Box
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      p="3"
      pt="10"
      w="100vw"
      h="100vh"
    >
      <Text
        pt="10rem"
        fontSize="3xl"
        align="center"
        fontFamily="mono"
        color="white"
      >
        There were some cold moments
      </Text>
      <Text
        color="white"
        pt="4rem"
        fontFamily="monospace"
        fontSize="3xl"
        align="center"
      >
        Like those between <br />
        {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
        {parser.format_time_gap(drawData.longest_gap.end_time)}
      </Text>
      <br />
      <Text color="white" pt="3rem" fontSize="3xl" align="center">
        You didn't talked for <br />
        {parser.time_gap(drawData.longest_gap)} consecutive days🥺
      </Text>
    </Box>
  );
};

export default Card6;
