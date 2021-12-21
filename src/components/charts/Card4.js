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
import TagCloud from "react-tag-cloud";
import TinderCard from "react-tinder-card";

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
import background from "../../static/bg9.png";
const Card4 = ({ drawData }) => {
  return (
    <Box
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="6"
      width="100vw"
      h="100vh"
    >
      <Heading pt="3rem" textAlign="center">
        Who texts more?
      </Heading>
      <Box pt="3rem">
        <Flex>
          <Text fontSize="5xl">
            {drawData.no_of_messages_per_member[0].member}
          </Text>
          <Spacer />
          <Text fontSize="5xl">
            {" "}
            {drawData.no_of_messages_per_member[1].member}
          </Text>
        </Flex>
        <VictoryStack
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          colorScale={["brown", "#F5F5F5"]}
          style={{
            data: { stroke: "black", strokeWidth: 3 },
          }}
        >
          <VictoryBar
            barWidth={20}
            data={[
              {
                x: "a",
                y: drawData.no_of_messages_per_member[0].count,
              },
            ]}
            horizontal
          />

          <VictoryBar
            barWidth={20}
            data={[
              {
                x: "a",
                y: drawData.no_of_messages_per_member[1].count,
              },
            ]}
            horizontal
          />
        </VictoryStack>
      </Box>
    </Box>
  );
};

export default Card4;
