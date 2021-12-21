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
import background from "../../static/bg2.png";
const Card6 = ({ drawData }) => {
  return (
    <Box
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="3"
      pt="10"
      w="100vw"
      h="100vh"
    >
      <Text pt="5rem" color="black" fontSize="5xl" align="center">
        But that didn't stop
        <br /> <font color="brown">{drawData.members[0]} </font>&{" "}
        <font color="brown">{drawData.members[1]}</font> <br />
        from sending each other messages!
      </Text>
    </Box>
  );
};

export default Card6;
