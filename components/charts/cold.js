import { Text, VStack, Box } from "@chakra-ui/react";

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="left"
      justify="center"
      // bgImage="/static/bg11.png"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      p="1rem"
      // w="100vw"
      // h="100vh"
    >
      {" "}
      {parser.time_gap(drawData.longest_gap) > 0 ? (
        <>
          <Text fontSize="2xl" align="left" fontWeight={"medium"}>
            You know what? You did not text each other at all between
          </Text>

 
          <Text fontSize="2xl" fontWeight="medium" align="left">
              {parser.format_time_gap(drawData.longest_gap.start_time)} 
              
          </Text>
            <Text fontSize="xl" align="left" fontWeight="medium">
              &
            </Text>
            <Text fontSize="2xl" align="left" fontWeight="medium">
             
              {parser.format_time_gap(drawData.longest_gap.end_time)}
            </Text>
            <Text fontSize="3xl" align="left" fontWeight={"medium"}>
            Thats 
            </Text>
            <Text fontSize="5xl" align="left" fontWeight="extrabold" color={"red"}>
              {parser.time_gap(drawData.longest_gap)}
            </Text>
            <Text fontSize="3xl" align="left" fontWeight={"medium"}>
            {parser.time_gap(drawData.longest_gap) == 1
              ? "whole day"
              : "days of ghosting!!"}{" "}
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
