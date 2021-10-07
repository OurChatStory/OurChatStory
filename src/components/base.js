import React from "react";
import { Heading, Box, Text, Stack } from "@chakra-ui/react";

import Uploader from "./upload";
const Base = () => {
  return (
    <Box p="2rem" w="100%" h="100%" bgGradient="linear(green.100, white)">
      <Heading>📈 Whats Analyser</Heading>

      <Box m="2rem">
        <Text fontSize="4xl">
          Get intresting insights from your WhatsApp chats!
        </Text>
        <Stack spacing={3} m="2rem">
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
