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
import background from "../../static/bg2.png";
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
      backgroundImage={background}
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
      <Text color="Black" fontSize="4xl" align="center" fontFamily="cursive">
        This year was eventful!
      </Text>
      <br />
      <br />
      <br />
      <Text color="black" fontSize="4xl" align="center" fontFamily="fantasy">
        Many friendships were broken and more were formed{" "}
      </Text>
    </Box>
  );
};

export default Card6;
