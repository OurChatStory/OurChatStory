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
  Image,
} from "@chakra-ui/react";

const Card3 = ({ drawData }) => {
  // let words = drawData.word_cloud_words.map(({ word, weight }) => {
  //   return { text: word, value: weight * 1000 };
  // });
  return (
    <Box p="3" height="100vh" w="100vw" bg="black">
      <Heading pt="3rem" textAlign="center" color="white">
        Here is your word cloud
      </Heading>

      <Box h="100%" w="100%">
        {/* <ReactWordcloud
          words={words}
          maxWords={40}
          options={{
            deterministic: true,
            fontWeight: "bold",

            fontSizes: [50, 100],
            transitionDuration: 0,
          }}
        /> */}
        <Image
          pt="3rem"
          src={"data:image/png;base64, " + drawData.word_cloud_base64}
          alt="Word Cloud"
        />
      </Box>
    </Box>
  );
};

export default Card3;
