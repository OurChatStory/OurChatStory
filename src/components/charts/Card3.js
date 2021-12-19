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

const Card3 = ({ drawData }) => {
  return (
    <Box boxShadow="2xl" bg="white" p="6" mb="10" rounded="md" height="500">
      The most used words are
      <TagCloud
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
      </TagCloud>
    </Box>
  );
};

export default Card3;
