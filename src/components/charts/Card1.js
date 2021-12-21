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
    <Box
      bgImage="url('https://wepik.com/storage/previews/1561374/abstract-simple-pink-background-art-instagram-story-r-508852958page2.jpg')"
      p="6"
      w="100vw"
      h="100vh"
    >
      <Text align="center" fontSize="5xl">
        Infact Y'all sent a total of{" "}
      </Text>
      <Text fontSize="6xl" color="Brown" align="center">
        <CountUp
          end={
            drawData.word_count_per_member[0].count +
            drawData.word_count_per_member[1].count
          }
          onEnd={({ countUpRef }) => {
            countUpRef = "a";
          }}
          duration={2}
        />
      </Text>
      <Text fontSize="3xl" align="center">
        {" "}
        messages to each other this year!🤯
      </Text>
      <br />
      <Text fontSize="4xl" align="center">
        That puts you into top 1% of texters in the world
      </Text>
    </Box>
  );
};

export default Card1;
