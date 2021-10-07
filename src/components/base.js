import React from "react";
import { Heading, Box, Text, Stack } from "@chakra-ui/react";

import Uploader from "./upload";
const Base = () => {
  return (
    <Box p="2rem" w="100%" h="100%" bgGradient="linear(green.100, white)">
      <Heading>📈 Whats Analyser</Heading>

      <Box m="2rem" boxShadow="2xl" bg="white" p="6" rounded="md">
        <Heading
          p="1rem"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "green.400",
              zIndex: -1,
            }}
          >
            Get insights from,
          </Text>
          <br />
          <Text as={"span"} color={"green.400"}>
            WhatsApp!
          </Text>
        </Heading>
        <Stack spacing={3} m="2rem">
          <Text fontSize="3xl">How?</Text>
          <Text fontSize="2xl">1. Export your WhatsApp chat as a txt file</Text>
          <Text fontSize="2xl">
            2. Click on the upload button and upload the txt file
          </Text>
        </Stack>
        <Uploader />
      </Box>
    </Box>
  );
};

export default Base;
