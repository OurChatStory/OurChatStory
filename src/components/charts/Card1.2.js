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
} from "victory";

import CountUp from "react-countup";

const Card1 = ({ drawData }) => {
  return (
    <Box bg="#F05454" p="6" w="100vw" h="100vh">
      <Text fontSize="5xl">
        Fun fact: Most of the time its{" "}
        <Text as="mark"> {drawData.who_texts_first}</Text> who texts first 😤
      </Text>
    </Box>
  );
};

export default Card1;
