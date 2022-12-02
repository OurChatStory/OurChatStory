import { Text, VStack, Box } from "@chakra-ui/react";

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  const cal_days=[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <VStack
      spacing="1rem"
      align="left"
      justify="center"
      bgImage="/static/aaa.jpeg"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      p="1rem"
      // w="100vw"
      // h="100vh"
      bgColor="primary.600"
      borderRadius="1rem"
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

          {/* <Text fontSize="md" align="left" fontWeight={"medium"}> */}
          <nobr>
            {cal_days.map((item, index) => {
              if (item === 0) {
                return (
                  <font style={{ "font-size": "16px" }} color="white">
                    . {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              } else if (item === 1) {
                return (
                  <font
                    fontSize="md"
                    align="left"
                    fontWeight={"medium"}
                    color="pink"
                  >
                    . {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              } else {
                return (
                  <font
                    fontSize="md"
                    align="left"
                    fontWeight={"medium"}
                    color="red"
                  >
                    . {(index + 1) % 30 == 0 ? <br></br> : ""}
                  </font>
                );
              }
            })}
          </nobr>
          {/* </Text> */}

          <Text
            fontSize="5xl"
            align="left"
            fontWeight="extrabold"
            color={"red"}
          >
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
