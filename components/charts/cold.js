import { Text, VStack, Box, HStack } from "@chakra-ui/react";

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
      h="78vh"
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
            {[Array(12)].map((item, index) => {
              return (
                <HStack>
                  {[
                    Array(30).map((item, index) => {
                      return <p key={item}>d</p>;
                      // if (item === 0) {
                      //   return (
                      //     <font
                      //       key={index}
                      //       style={{
                      //         "font-size": "16px",
                      //         display: "flex",
                      //         "flex-direction": "row",
                      //       }}
                      //     >
                      //       <Box
                      //         w="4px"
                      //         h="4px"
                      //         // borderRadius="50%"
                      //         bgColor="yellow"
                      //       ></Box>
                      //       {(index + 1) % 30 == 0 ? <br></br> : ""}
                      //     </font>
                      //   );
                      // } else if (item === 1) {
                      //   return (
                      //     <font
                      //       key={index}
                      //       fontSize="md"
                      //       align="left"
                      //       fontWeight={"medium"}
                      //     >
                      //       <Box
                      //         w="4px"
                      //         h="4px"
                      //         // borderRadius="50%"
                      //         bgColor="red"
                      //       ></Box>
                      //       {(index + 1) % 30 == 0 ? <br></br> : ""}
                      //     </font>
                      //   );
                      // } else if (item == 2) {
                      //   return (
                      //     <font
                      //       key={index}
                      //       fontSize="md"
                      //       align="left"
                      //       fontWeight={"medium"}
                      //     >
                      //       <Box
                      //         w="4px"
                      //         h="4px"
                      //         // borderRadius="50%"
                      //         bgColor="black"
                      //       ></Box>
                      //       {(index + 1) % 30 == 0 ? <br></br> : ""}
                      //     </font>
                      //   );
                      // }
                    }),
                  ]}
                </HStack>
              );
              // if (index % 30 === 0) {
              //   return (
              //     <>
              //       <Box
              //         w="4px"
              //         h="4px"
              //         // borderRadius="50%"
              //         bgColor="blue"
              //       ></Box>
              //       <br />
              //     </>
              //   );
              // }
              // if (item === 0) {
              //   return (
              //     <font
              //       key={index}
              //       style={{
              //         "font-size": "16px",
              //         display: "flex",
              //         "flex-direction": "row",
              //       }}
              //     >
              //       <Box
              //         w="4px"
              //         h="4px"
              //         // borderRadius="50%"
              //         bgColor="yellow"
              //       ></Box>
              //       {(index + 1) % 30 == 0 ? <br></br> : ""}
              //     </font>
              //   );
              // } else if (item === 1) {
              //   return (
              //     <font
              //       key={index}
              //       fontSize="md"
              //       align="left"
              //       fontWeight={"medium"}
              //     >
              //       <Box
              //         w="4px"
              //         h="4px"
              //         // borderRadius="50%"
              //         bgColor="red"
              //       ></Box>
              //       {(index + 1) % 30 == 0 ? <br></br> : ""}
              //     </font>
              //   );
              // } else if (item == 2) {
              //   return (
              //     <font
              //       key={index}
              //       fontSize="md"
              //       align="left"
              //       fontWeight={"medium"}
              //     >
              //       <Box
              //         w="4px"
              //         h="4px"
              //         // borderRadius="50%"
              //         bgColor="black"
              //       ></Box>
              //       {(index + 1) % 30 == 0 ? <br></br> : ""}
              //     </font>
              //   );
              // }
            })}
          </Box>
          {/* </Text> */}

          <Text
            fontSize="5xl"
            align="left"
            fontWeight="extrabold"
            color="#D4E4F7"
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
