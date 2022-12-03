import { Box, Text, VStack, keyframes } from "@chakra-ui/react";
import { VictoryLabel, VictoryLine, VictoryChart } from "victory";

const parser = require("../../script/parser");

const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        // this changed the color of my numbers to white
        fill: "white",
      },
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted",
      },
    },
  },
};

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Card2 = ({ drawData, isShared }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="center"
      bgImage="/static/v2bg4.jpg"
      backgroundBlendMode="multiply"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="2rem"
      // w="100vw"
      // h="100vh"
      w="100%"
      h="78vh"
      bgColor="indigo"
      borderRadius="1rem"
      animation={zoomAnimation}
      // pt="1rem"
      // pb="1rem"
      p="1rem"
      border="2px solid yellow"
    >
      <Text color="#F5F5F5" fontSize="2xl" align="center" fontWeight={500}>
        Most of your conversations happened in{" "}
        <strong>{parser.months[drawData.most_active_month.month]}</strong> when
        &nbsp; <strong>{drawData.most_active_month.count}</strong> messages were
        exchanged that month!
      </Text>

      <Box>
        <VictoryChart theme={chartTheme}>
          <VictoryLine
            height={200}
            interpolation="natural"
            domain={{ y: [-750, drawData.most_active_month.count + 300] }}
            style={{
              data: {
                stroke: "#FFF600",
                strokeWidth: 4,
                strokeLinecap: "round",
              },
            }}
            animate={{ onLoad: { duration: isShared ? 0 : 4000 } }}
            data={parser.monthly_count_data(drawData.monthly_chats_count)}
          >
            {/* <VictoryLabel></VictoryLabel> */}
          </VictoryLine>
        </VictoryChart>
        {/* <Text color={"yellow"} fontWeight={200}>
          {" "}
          graph from Jan till today{" "}
        </Text> */}
      </Box>

      {/* <Text pt="0.5rem" color="#F5F5F5" fontSize="2xl" align="center">
        Now that's a lot of messages!!
      </Text> */}
      <Text p="1rem" color="#F5F5F5" fontSize="xl" align="center">
        {drawData.month_correlation > 0.5
          ? "There is an increasing warmth in your relationship :)"
          : drawData.month_correlation < -0.5
          ? "but y'all have decreased talking now :/"
          : "Now that's a lot of messages!!"}{" "}
      </Text>
    </VStack>
  );
};

export default Card2;
