import React from "react";
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

const Card5 = ({ drawData }) => {
  return (
    <Box bg="#F5F5F5" p="6" height="100vh" w="100vw">
      <Heading>The most used emojis are</Heading>
      <TagCloud
        style={{
          fontFamily: "sans-serif",
          fontSize: 30,
          padding: 10,
          width: "100%",
          height: "100%",
        }}
      >
        {drawData.top_10_emojis.slice(0, 6).map(({ emoji }, i) => {
          return (
            <div
              style={{
                margin: 10,
                fontSize: i === 0 ? 100 : 30,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </TagCloud>
    </Box>
  );
};

export default Card5;
