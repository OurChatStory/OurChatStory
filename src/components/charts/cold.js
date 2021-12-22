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
        pt="8rem"
        pr="2rem"
        pl="2rem"
        fontSize="3xl"
        align="center"
        color="white"
      >
        There were some cold moments
      </Text>
      <Text
        color="white"
        pt="2rem"
        fontSize="3xl"
        align="center"
      >
        Between
      </Text>
      <Text color="white" fontSize="4xl" align="center" fontWeight="medium">
        {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
        {parser.format_time_gap(drawData.longest_gap.end_time)}
      </Text>
      <br />
      <Text color="white" pt="1rem" fontSize="3xl" align="center">
        You didn't talk for {" "}

        <Text color="white" fontSize="5xl" align="center" fontWeight="medium">
          {parser.time_gap(drawData.longest_gap)}
        </Text>

        consecutive days 🥺
      </Text>
    </Box>
  );
};

export default Card6;
