import { Text, VStack, Box } from "@chakra-ui/react";

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      bgImage="/static/bg11.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="3rem"
      pt="10"
      w="100vw"
      h="100vh"
    >
      {" "}
      {parser.time_gap(drawData.longest_gap) > 0 ? (
        <>
          <Text fontSize="3xl" align="center">
            There were some cold moments
          </Text>
          <Box>
            <Text pt="1rem" fontSize="3xl" align="center">
              Between
            </Text>
            <Text fontSize="4xl" align="center" fontWeight="medium">
              {parser.format_time_gap(drawData.longest_gap.start_time)} and{" "}
              {parser.format_time_gap(drawData.longest_gap.end_time)}
            </Text>
          </Box>
          <br />
          <Text pt="1rem" fontSize="3xl" align="center">
            Y&apos;all didn&apos;t talk for{" "}
            <Text fontSize="5xl" align="center" fontWeight="medium">
              {parser.time_gap(drawData.longest_gap)}
            </Text>
            {parser.time_gap(drawData.longest_gap) == 1
              ? "whole day"
              : "consecutive days"}{" "}
            🥺
          </Text>
        </>
      ) : (
        <Text fontSize="3xl" align="center">
          There was not a single day in 2021 when y&apos;all didn&apos;t talk
        </Text>
      )}
    </VStack>
  );
};

export default Card6;
