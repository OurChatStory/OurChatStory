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
import TagCloud from "react-tag-cloud";
import ReactWordcloud from "react-wordcloud";

const Card3 = ({ drawData }) => {
  let words = drawData.word_cloud_words.map(({ word, weight }) => {
    return { text: word, value: weight * 1000 };
  });
  return (
    <Box p="6" height="100vh" w="100vw" bg="white">
      <Heading pt="3rem">Here is your word cloud</Heading>

      <Box h="100%" w="100%">
        <ReactWordcloud
          words={words}
          maxWords={75}
          options={{
            deterministic: true,
            fontWeight: "bold",

            fontSizes: [50, 100],
            transitionDuration: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Card3;
