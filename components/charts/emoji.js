import {
  Heading,
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  keyframes,
} from "@chakra-ui/react";

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Card5 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;
  return (
    <VStack
      spacing="1.5rem"
      align="center"
      justify="center"
      bgImage="static/bg2.png"
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
      border="2px solid brown"
      p="1rem"
      animation={zoomAnimation}
    >
      <Heading size="md" color="black" textAlign="center">
        An Emoji is worth thousand words
      </Heading>

      {/* <Text
              key={i}
              align="center"
              style={{
                // margin: "0.5rem",
                fontSize: (5 - i) * (15 + i),
              }}
              lineHeight={i == 5 ? 0 : 1.2 + 0.1 * i}
            >
              {emoji}
            </Text> */}

      {/* <VStack>
          <HStack>
            <Text fontSize={"8xl"}>{drawData.top_10_emojis[1].emoji}</Text>
          </HStack>
          <HStack>
            <Text fontSize={"8xl"}>{drawData.top_10_emojis[2].emoji}</Text>
            <Text fontSize={"8xl"}>{drawData.top_10_emojis[3].emoji}</Text>
          </HStack>
        </VStack> */}

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        <GridItem colSpan={2}>
          <Text fontSize={["6xl", "8xl", "8xl"]}>
            {drawData.top_10_emojis[0].emoji}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontSize={["6xl", "8xl", "8xl"]}>
            {drawData.top_10_emojis[1].emoji}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontSize={["6xl", "8xl", "8xl"]}>
            {drawData.top_10_emojis[2].emoji}
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontSize={["6xl", "8xl", "8xl"]}>
            {drawData.top_10_emojis[3].emoji}
          </Text>
        </GridItem>
      </Grid>
      <Heading size="md" color="black" textAlign="center" p="1rem">
        So these are our most used Emojis
      </Heading>
    </VStack>
  );
};

export default Card5;
