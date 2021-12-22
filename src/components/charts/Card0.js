import React, { useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Box,
  Center,
  Spinner,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import background from "../../static/bg2.png";
const Card6 = ({ drawData }) => {
  return (
    <Box
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="3"
      pt="10"
      w="100vw"
      h="100vh"
    >
      <Text pt="5rem" color="black" fontSize="4xl" align="center">
        But that didn't stop</Text>
      <br />
      <Text color="brown" fontSize="4xl" align="center" fontWeight="medium">
        {drawData.members[0]}
      </Text>
      <Text color="black" fontSize="4xl" align="center">&{" "}</Text>
      <Text color="brown" fontSize="4xl" align="center" fontWeight="medium">
        {drawData.members[1]}</Text>
      <br />
      <Text color="black" fontSize="4xl" align="center">
        from sending each other messages!
      </Text>
    </Box>
  );
};

export default Card6;
