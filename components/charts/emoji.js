import { Heading, Box, Text, Grid, GridItem ,VStack} from "@chakra-ui/react";
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
      p="1rem"
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
          templateColumns="repeat(5, 1fr)"
          gap={1}
        >
          <GridItem colSpan={2} >
            <Text fontSize={["6xl","8xl","8xl"]}>{drawData.top_10_emojis[0].emoji}</Text>
          </GridItem>
          <GridItem colSpan={2} >
            <Text fontSize={["6xl","8xl","8xl"]}>{drawData.top_10_emojis[1].emoji}</Text>
          </GridItem>
          <GridItem colSpan={2} >
            <Text fontSize={["6xl","8xl","8xl"]}>{drawData.top_10_emojis[2].emoji}</Text>
          </GridItem>
          <GridItem colSpan={2} >
            <Text fontSize={["6xl","8xl","8xl"]}>{drawData.top_10_emojis[3].emoji}</Text>
          </GridItem>
        </Grid>
        <Heading size="md" color="black" textAlign="center" p="1rem">
          So these are our most used Emojis
        </Heading>

    </VStack>
  );
};

export default Card5;
