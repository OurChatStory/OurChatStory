import { Box, Text, VStack } from "@chakra-ui/react";
import { VictoryLine } from "victory";

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
      bgColor="#090934"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
    >
      <Text color="#F5F5F5" fontSize="2xl" align="center">
        Most of your conversations happened in
      </Text>
      <Text color="#F5F5F5" fontSize="5xl" align="center" fontWeight="medium">
        {parser.months[drawData.most_active_month.month]}
      </Text>
      <Box>
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
        />
      </Box>
      <Text color="#F5F5F5" fontSize="5xl" align="center" fontWeight="medium">
        {drawData.most_active_month.count}
      </Text>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        messages were sent!
      </Text>
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
