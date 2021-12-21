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
import background from "../../static/bg8.jpeg";
const Card6 = ({ drawData }) => {
  return (
    <Box
      bg="#30475E"
      p="6"
      w="100vw"
      h="100vh"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
    >
      <Text
        color="#F5F5F5"
        pt="7rem"
        fontFamily="cursive"
        fontSize="4xl"
        align="center"
      >
        <strike>The End</strike> <br />
        The New Beginning
      </Text>

      <Text
        color="#F5F5F5"
        pt="10rem"
        fontFamily="cursive"
        fontSize="2xl"
        align="center"
      >
        Share with your friends
      </Text>
    </Box>
  );
};

export default Card6;
