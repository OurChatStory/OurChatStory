import { Box, Text, VStack } from "@chakra-ui/react";
import { VictoryLabel, VictoryLine, VictoryChart } from "victory";

const parser = require("../../script/parser");

const Card2 = ({ drawData, isShared }) => {
  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="center"
      // bgImage="/static/bg6.png"
      // backgroundBlendMode="lighten"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="2rem"
      // w="100vw"
      // h="100vh"
      w="100%"
      h="78vh"
      bgColor="#D61A46"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
    >
      <Text color="#F5F5F5" fontSize="2xl" align="center" fontWeight={500}>
        Most of your conversations happened in <strong>{parser.months[drawData.most_active_month.month]}</strong> when
               &nbsp;  <strong>{drawData.most_active_month.count}</strong> messages were exchanged that month!

      </Text>

      <Box>
        <VictoryChart>
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

          </VictoryLine>
          </VictoryChart>
          <Text color={"yellow"} fontWeight={200}> graph from Jan till today </Text>

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
