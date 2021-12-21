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
      <Heading>Here is your word cloud</Heading>
      {/* <TagCloud
        style={{
          fontFamily: "sans-serif",
          fontSize: 30,
          padding: 10,
          width: "100%",
          height: "100%",
        }}
      >
        {drawData.word_cloud_words.map(({ word, weight }) => {
          return (
            <div
              style={{
                fontSize: weight * 200,
              }}
            >
              {word}
            </div>
          );
        })}
      </TagCloud> */}
      <Box>
        <ReactWordcloud words={words} options={{ fontSizes: [50, 90] }} />
      </Box>
    </Box>
  );
};

export default Card3;
