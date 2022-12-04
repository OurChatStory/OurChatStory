import { Text, VStack, Box, HStack, keyframes, Spacer } from "@chakra-ui/react";

const parser = require("../../script/parser");

const ZoomAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50%{
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

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
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    <Box
      spacing="1rem"
      align="center"
      justify="center"
      bgImage="/static/compress/two-kids.webp"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgColor="purple"
      borderRadius="1rem"
      h="78vh"
      w="100%"
      p="1.5rem"
      border="2px solid pink"
      animation={zoomAnimation}

      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      {/* <Box bgColor={"black"} opacity={0.5} /> */}
      <VStack h="100%" align="left" p="1rem" justify="center" spacing="1rem">
        {" "}
        {parser.time_gap(drawData.longest_gap) > 0 ? (
          <>
            <Text
              fontSize="2xl"
              align="left"
              fontWeight={700}
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
                  <HStack key={item}>
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
            <HStack>
              <Spacer />
              <Text
                fontSize="5xl"
                align="left"
                fontWeight="bold"
                bgColor="pink"
                pl="1rem"
                pr="1rem"
                color="black"
                textAlign="center"
                style={{ textShadow: "none" }}
              >
                {parser.time_gap(drawData.longest_gap)}
              </Text>
              <Spacer />
            </HStack>
            <Text
              fontSize="3xl"
              align="left"
              fontWeight={"medium"}
              textAlign="center"
            >
              {parser.time_gap(drawData.longest_gap) == 1
                ? "whole day"
                : "days only when you didn't talk!"}
            </Text>
            {parser.time_gap(drawData.longest_gap) < 20 ? (
              <Text fontWeight={"500"}>
                Having someone to talk to everyday is a privilege and you {drawData.group ? "all" : "both"} are very lucky
                to have each other.
              </Text>
            ) : (
              ""
            )}
          </>
        ) : (
          <Text fontSize="3xl" align="center" textAlign="center">
            There was not a single day in 2022 when y&apos;all didn&apos;t talk
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Card6;
