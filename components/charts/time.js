import { Box, Text, VStack, keyframes } from "@chakra-ui/react";

import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

const parser = require("../../script/parser");

const ZoomAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50%{
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        // this changed the color of my numbers to white
        fill: "#ffffffde",
      },
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted",
      },
      axis: {
        fill: "white",
        stroke: "#ffffffde",
        strokeWidth: 1,
      },
    },

  },
};

const Card6 = ({ drawData, isShared }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      p="2rem"
      // w="100vw"
      // h="100vh"
      backgroundImage="/static/compress/owl.webp"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="110%"
      border="2px solid #14B884"
      w="100%"
      h="78vh"
      bgColor="#6f0cfb"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
      animation={zoomAnimation}
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <Text color="#F5F5F5" fontSize="2xl" align="center" fontWeight={600}>
        The time of the day y&apos;all talk the most is
      </Text>
      <br />
      <Text bgColor="#14B884" fontSize="5xl" align="center" fontWeight="bold"
        pl="1rem"
        pr="1rem"
        style={{
          textShadow: "none"
        }}
      >
        {parser.active_time(drawData.most_active_hour.hour)}
      </Text>

      <Box>
        <VictoryChart theme={chartTheme}

        >
          <VictoryLine
            height={200}
            domain={{ y: [0, drawData.most_active_hour.count + 100] }}
            interpolation="natural"
            style={{
              data: {
                stroke: "#e1e3c8",
                strokeWidth: 4,
                strokeLinecap: "round",
              },
            }}
            animate={{ onLoad: { duration: isShared ? 0 : 4000 } }}
            data={parser.hourly_count_data(drawData.hourly_count)}

          />
          <VictoryAxis
            // fix overlapping time labels
            // fixLabelOverlap={true}
            style={{
              tickLabels: {
                fontSize: 12,
                padding: 5,
              },
            }}
            tickFormat={(t) => parser.active_time(t).toLowerCase().replace(" ", "")}
            // increase the number of ticks
            tickCount={8}

            // show y axis
            // dependentAxis
            // show x axis
            independentAxis


          />
          <VictoryAxis
            // fix overlapping time labels
            // fixLabelOverlap={true}
            style={{
              tickLabels: {
                fontSize: 14,
                padding: 5,
              },
            }}
            // tickFormat={(t) => parser.active_time(t)}
            // increase the number of ticks
            tickCount={4}

            // show y axis
            dependentAxis
          // show x axis
          // independentAxis


          />
        </VictoryChart>
      </Box>
      <Text color="#F5F5F5" fontSize="2xl" align="center" fontWeight="600">
        {parser.active_time_type(drawData.most_active_hour.hour)}
      </Text>
    </VStack>
  );
};

export default Card6;
