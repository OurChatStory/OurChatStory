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
      bgImage="url('https://wepik.com/storage/previews/1561375/abstract-simple-pink-background-art-instagram-story-r-508852958page3.jpg')"
      p="3"
      w="100vw"
      h="100vh"
    >
      <Text color="black" fontSize="4xl" align="center">
        But that didn't stop {drawData.members[0]} and {drawData.members[1]}{" "}
        from sending each other messages!
      </Text>
    </Box>
  );
};

export default Card6;
