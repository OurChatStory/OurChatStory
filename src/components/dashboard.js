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
} from "@chakra-ui/react";
import TagCloud from "react-tag-cloud";
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
// const drawData = require("../data/sample-chat");

const parser = require("../script/parser");

const Dashboard = ({ drawData }) => {
  return (
    <Box p="2rem" bgGradient="linear(green.100, white)">
      <Heading> #Wrapped </Heading>
      <Heading size="md">
        Chat between {drawData.members[0]} & {drawData.members[1]}
      </Heading>
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
            Total no of chats <br />
            <Heading>
              <CountUp end={drawData.total_no_of_chats} duration={2} />
            </Heading>
            <br />
            Almost always its {drawData.who_texts_first} who texts first
          </GridItem>

          <GridItem
            colSpan={[3, 2]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            You talked the most in the month of {drawData.most_active_month}
            <VictoryChart domainPadding={20}>
              <VictoryBar
                barRatio={1}
                animate={{ duration: 2000, onLoad: { duration: 1000 } }}
                style={{
                  data: {
                    fill: ({ datum }) =>
                      datum.x === drawData.most_active_month
                        ? "#00ff00"
                        : "#00ffaa",
                    fillOpacity: 0.7,
                    strokeWidth: 3,
                  },
                  labels: {
                    fontSize: 15,
                    fill: ({ datum }) =>
                      datum.x === 3 ? "#000000" : "#c43a31",
                  },
                }}
                data={parser.monthly_count_data(drawData.monthly_chats_count)}
              />
            </VictoryChart>
          </GridItem>

          <GridItem
            colSpan={[3, 2]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            Word count
            <VictoryStack
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              colorScale={["tomato", "orange"]}
              style={{
                data: { stroke: "black", strokeWidth: 3 },
              }}
            >
              <VictoryBar
                barWidth={20}
                data={[
                  {
                    x: "a",
                    y: drawData.word_count_per_member[
                      Object.keys(drawData.word_count_per_member)[0]
                    ],
                  },
                ]}
                horizontal
              />
              <VictoryBar
                barWidth={20}
                data={[
                  {
                    x: "a",
                    y: drawData.word_count_per_member[
                      Object.keys(drawData.word_count_per_member)[1]
                    ],
                  },
                ]}
                horizontal
              />
            </VictoryStack>
          </GridItem>
          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            The most used emoji is offcourse
          </GridItem>
          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            The most used emojis are
            <TagCloud
              style={{
                fontFamily: "sans-serif",
                fontSize: 30,
                padding: 10,
                width: "100%",
                height: "100%",
              }}
            >
              {drawData.top_10_emojis.map(({ emoji }, i) => {
                return (
                  <div
                    style={{
                      margin: 10,
                      fontSize: i === 0 ? 100 : 30,
                    }}
                  >
                    {emoji}
                  </div>
                );
              })}
            </TagCloud>
          </GridItem>

          <GridItem
            colSpan={[3, 1]}
            boxShadow="2xl"
            bg="white"
            p="6"
            rounded="md"
          >
            <VictoryScatter
              dataComponent={<CatPoint />}
              y={[4, 5, 4, 9, 10, 1, 3]}
              samples={5}
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

class CatPoint extends React.Component {
  render() {
    const { x, y, datum } = this.props; // VictoryScatter supplies x, y and datum
    const cat = datum.y >= 4 ? "😻" : "😹";
    return (
      <text x={x} y={y} fontSize={30}>
        {cat}
      </text>
    );
  }
}
export default Dashboard;
