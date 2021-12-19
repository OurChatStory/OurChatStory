import { React, useState } from "react";
import { Heading, Box, Text, Stack } from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
const Base = () => {
  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});

  return (
    <Box p="2rem" w="100%" h="100%" bgGradient="linear(green.100, white)">
      <Heading>⏳Whats Wrapped</Heading>

      <Box m={["0.5rem", "2rem"]} boxShadow="2xl" bg="white" p="6" rounded="md">
        {showRes ? (
          <Dashboard drawData={data} />
        ) : (
          <Uploader setShowRes={setShowRes} setData={setData} />
        )}
      </Box>
    </Box>
  );
};

export default Base;
