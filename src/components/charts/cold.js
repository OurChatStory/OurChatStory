import { Text, VStack, Box } from "@chakra-ui/react";

import background from "../../static/bg8.png";
const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="3rem"
      pt="10"
      w="100vw"
      h="100vh"
    >
      <Text fontSize="3xl" align="center" color="white">
        There were some cold moments
      </Text>
      <Box>
        <Text color="white" pt="1rem" fontSize="3xl" align="center">
          Between
        </Text>
        <Text color="white" fontSize="4xl" align="center" fontWeight="medium">
          {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
          {parser.format_time_gap(drawData.longest_gap.end_time)}
        </Text>
      </Box>
      <br />
      <Text color="white" pt="1rem" fontSize="3xl" align="center">
        Y'all didn't talk for{" "}
        <Text color="white" fontSize="5xl" align="center" fontWeight="medium">
          {parser.time_gap(drawData.longest_gap)}
        </Text>
        consecutive days 🥺
      </Text>
    </VStack>
  );
};

export default Card6;
