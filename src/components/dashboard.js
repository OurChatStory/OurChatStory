import React, { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Box,
  Center,
  Spinner,
} from "@chakra-ui/react";

import {
  VictoryBar,
  VictoryPie,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryHistogram,
  VictoryScatter,
} from "victory";

const Upload = () => {
  return (
    <Box p="2rem" bgGradient="linear(green.100, white)">
      <Heading> Dashboard</Heading>
      <Box m={["1rem", "3rem"]}>
        <Grid
          h="800px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={5}
        >
          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryChart domainPadding={10}>
              <VictoryHistogram
                style={{ data: { fill: "#c43a31" } }}
                data={[
                  { x: 10, y: 35 },
                  { x: 20, y: 40 },
                  { x: 30, y: 55 },
                ]}
              />
            </VictoryChart>
          </GridItem>
          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryChart
              theme={VictoryTheme.material}
              domain={{ x: [0, 5], y: [0, 7] }}
            >
              <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={7}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 },
                ]}
              />
            </VictoryChart>
          </GridItem>
          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryPie
              data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 },
              ]}
            />
          </GridItem>

          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
              <VictoryBar
                style={{ data: { fill: "#c43a31" } }}
                data={[
                  { x: "Cats", y: 35 },
                  { x: "Dogs", y: 40 },
                  { x: "Birds", y: 55 },
                ]}
              />
            </VictoryChart>
          </GridItem>

          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryChart theme={VictoryTheme.material}>
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 7 },
                ]}
              />
            </VictoryChart>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Upload;
