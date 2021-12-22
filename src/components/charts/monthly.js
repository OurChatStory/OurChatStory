import {
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import background from "../../static/bg6.png";
import {
  VictoryLine,
} from "victory";

const parser = require("../../script/parser");

const Card2 = ({ drawData }) => {
  return (
    <VStack
      spacing="0.75rem"
      align="center"
      justify="center"
      bgImage={background}
      backgroundBlendMode="lighten"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="2rem"
      w="100vw"
      h="100vh"
    >
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        Y'all talked the most in
      </Text>
      <Text color="#F5F5F5" fontSize="5xl" align="center">
        {parser.months[drawData.most_active_month.month]}
      </Text>
      <Box>
        <VictoryLine
          height={200}
          interpolation="natural"
          domain={{ y: [-750, drawData.most_active_month.count] }}
          style={{
            data: {
              stroke: "#FFF600",
              strokeWidth: 4,
              strokeLinecap: "round",
            },
          }}
          animate={{ duration: 4000, onLoad: { duration: 4000 } }}
          data={parser.monthly_count_data(drawData.monthly_chats_count)}
        />
      </Box>
      <Text color="#F5F5F5" fontSize="5xl" align="center" fontWeight="medium">
        {drawData.most_active_month.count}
      </Text>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        messages were sent!
      </Text>
      <Text pt="0.5rem" color="#F5F5F5" fontSize="2xl" align="center">
        Now that's a lot of messages!!
      </Text>
      <Text pl="1rem" pr="1rem" color="#F5F5F5" fontSize="xl" align="center">
        {drawData.month_correlation > 0.5
          ? "There is an increasing warmth in your relationship :)"
          : drawData.month_correlation < -0.5
            ? "but y'all have decreased talking now :/"
            : ""}{" "}
      </Text>
    </VStack>
  );
};

export default Card2;
