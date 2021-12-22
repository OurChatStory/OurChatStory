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
import bg from "../../static/bg3.png";
const Card5 = ({ drawData }) => {
  return (
    <Box
      bgImage={bg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="6"
      height="100vh"
      w="100vw"
    >
      <Heading textAlign="center" pt="4rem">
        Most used emojis :)
      </Heading>
      <Box h="100%" w="100%" pt="2rem">
        {drawData.top_10_emojis.slice(0, 5).map(({ emoji }, i) => {
          return (
            <Text
              align="center"
              style={{
                margin: 6,
                fontSize: (5 - i) * (20 + i),
              }}
              lineHeight={1.3 + 0.1 * i}
            >
              {emoji}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};

export default Card5;
