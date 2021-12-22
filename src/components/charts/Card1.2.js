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
import background from "../../static/bg5.png";
const Card1 = ({ drawData }) => {
  return (
    <Box
      p="6"
      w="100vw"
      h="100vh"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      bgImage={background}
    >
      <Text pt="5rem" fontSize="5xl" align="center" fontWeight="bold" color="OldLace">
        FUN FACT
      </Text>
      <Text pt="2rem" fontSize="4xl" align="center">
        Most of the time it's</Text>
      <Text mt="2rem" fontSize="4xl" align="center" fontWeight="medium" backgroundColor="OldLace"> {drawData.who_texts_first}</Text>
      <Text pt="2rem" fontSize="4xl" align="center">
        {" "}
        who texts first 😤
      </Text>
    </Box>
  );
};

export default Card1;
