import { Heading, Box, Text, VStack } from "@chakra-ui/react";
const Card5 = ({ drawData }) => {
  return (
    <VStack
      spacing="1.5rem"
      align="center"
      justify="center"
      // bgImage="static/bg3.png"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="2rem"
      // height="100vh"
      // w="100vw"
      w="100%"
      h="78vh"
      bgColor="#f3c5b7"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
    >
      <Heading color="black" textAlign="center">Most used emojis :)</Heading>
      <Box>
        {drawData.top_10_emojis.slice(0, 5).map(({ emoji }, i) => {
          return (
            <Text
              key={i}
              align="center"
              style={{
                margin: "0.5rem",
                fontSize: (5 - i) * (20 + i),
              }}
              lineHeight={i == 5 ? 0 : 1.2 + 0.1 * i}
            >
              {emoji}
            </Text>
          );
        })}
      </Box>
    </VStack>
  );
};

export default Card5;
