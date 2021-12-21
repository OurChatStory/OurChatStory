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
    <Box
      backgroundImage="url('https://i.pinimg.com/originals/36/d9/0d/36d90d294c8fb879ae47888e321a1166.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="140%"
      p="3"
      w="100vw"
      h="100vh"
    >
      <br />
      <br />
      <br />
      <Text color="Black" fontSize="4xl" align="center">
        This year was eventful!
      </Text>
      <br />
      <br />
      <br />
      <Text color="black" fontSize="3xl" align="center">
        Many friendships were broken and more were formed{" "}
      </Text>
    </Box>
  );
};

export default Card6;
