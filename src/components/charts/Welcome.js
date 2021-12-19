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

const Card6 = ({ drawData }) => {
  return (
    <Box bg="#30475E" p="6" w="100vw" h="100vh">
      <Text color="#F5F5F5" fontSize="4xl">
        Welcome to your own chat wrapped #2021{" "}
      </Text>
    </Box>
  );
};

export default Card6;
