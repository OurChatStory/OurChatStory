import { Text, VStack, Box } from "@chakra-ui/react";

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  const cal_days = [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
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
      h="78vh"
      bgColor="#FC7307"
      borderRadius="1rem"
    >
      {" "}
      {parser.time_gap(drawData.longest_gap) > 0 ? (
        <>
          <Text
            fontSize="2xl"
            align="left"
            fontWeight="medium"
            textAlign="center"
          >
            You know what? You did not text each other at all between
          </Text>

          {/* <Text fontSize="2xl" fontWeight="medium" align="left">
            {parser.format_time_gap(drawData.longest_gap.start_time)}
          </Text>
          <nobr/>
          <Text fontSize="xl" align="left" fontWeight="medium">
            &
          </Text>
          <Text fontSize="2xl" align="left" fontWeight="medium">
            {parser.format_time_gap(drawData.longest_gap.end_time)}
          </Text> */}
          <Text
            fontSize="2xl"
            fontWeight="medium"
            align="left"
            textAlign="center"
          >
            {parser.format_time_gap(drawData.longest_gap.start_time)} &{" "}
            {parser.format_time_gap(drawData.longest_gap.end_time)}
          </Text>

          {/* <Text fontSize="md" align="left" fontWeight={"medium"}> */}
          <Box display="flex" flexWrap="wrap">
            {cal_days.map((item, index) => {
              if (item === 0) {
                return (
                  <font
                    key={index}
                    style={{
                      "font-size": "16px",
                      display: "flex",
                      "flex-direction": "row",
                    }}
                  >
                    <Box
                      w="1rem"
                      h="1rem"
                      borderRadius="50%"
                      bgColor="yellow"
                    ></Box>
                    {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              } else if (item === 1) {
                return (
                  <font
                    key={index}
                    fontSize="md"
                    align="left"
                    fontWeight={"medium"}
                  >
                    <Box
                      w="1rem"
                      h="1rem"
                      borderRadius="50%"
                      bgColor="red"
                    ></Box>
                    {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              } else if (item == 2) {
                return (
                  <font
                    key={index}
                    fontSize="md"
                    align="left"
                    fontWeight={"medium"}
                  >
                    <Box
                      w="1rem"
                      h="1rem"
                      borderRadius="50%"
                      bgColor="black"
                    ></Box>
                    {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              }
            })}
          </Box>
          {/* </Text> */}

          <Text
            fontSize="5xl"
            align="left"
            fontWeight="extrabold"
            color="#236AB9"
            textAlign="center"
          >
            {parser.time_gap(drawData.longest_gap)}
          </Text>
          <Text
            fontSize="3xl"
            align="left"
            fontWeight={"medium"}
            textAlign="center"
          >
            {parser.time_gap(drawData.longest_gap) == 1
              ? "whole day"
              : "days of ghosting!!"}{" "}
          </Text>
        </>
      ) : (
        <Text fontSize="3xl" align="center" textAlign="center">
          There was not a single day in 2021 when y&apos;all didn&apos;t talk
        </Text>
      )}
    </VStack>
  );
};

export default Card6;
