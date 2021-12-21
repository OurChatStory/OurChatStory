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
import background from "../../static/bg7.jpeg";
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
    <Box
      bg="#30475E"
      p="6"
      w="100vw"
      h="100vh"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="110%"
    >
      <Text pt="4rem" color="#F5F5F5" fontSize="3xl" align="center">
        The time of the day you talk the most is
      </Text>
      <Text color="#F5F5F5" fontSize="5xl" align="center">
        {parser.active_time(drawData.most_active_hour.hour)}
      </Text>

      <Box>
        <VictoryChart height="150" theme={VictoryTheme.material}>
          <VictoryAxis />
          <VictoryLine
            interpolation="natural"
            style={{
              data: {
                stroke: "#e1e3c8",
                strokeWidth: 4,
                strokeLinecap: "round",
              },
            }}
            animate={{ duration: 4000, onLoad: { duration: 4000 } }}
            data={parser.hourly_count_data(drawData.hourly_count)}
          />
        </VictoryChart>
        <Text color="#F5F5F5" fontSize="4xl" align="center">
          <br />
          {parser.active_time_type(drawData.most_active_hour.hour)}
        </Text>
      </Box>
    </Box>
  );
};

export default Card6;
