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

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <Box bg="#30475E" p="6" w="100vw" h="100vh">
      <Text color="#F5F5F5" fontSize="4xl">
        The time of the day you talk the most is
      </Text>
      <Text color="#F5F5F5" fontSize="6xl">
        {drawData.most_active_hour.hour}
      </Text>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis />
        <VictoryLine
          interpolation="natural"
          style={{
            data: {
              stroke: "#F05454",
              strokeWidth: 4,
              strokeLinecap: "round",
            },
          }}
          animate={{ duration: 4000, onLoad: { duration: 4000 } }}
          data={parser.hourly_count_data(drawData.hourly_count)}
        />
      </VictoryChart>
    </Box>
  );
};

export default Card6;
