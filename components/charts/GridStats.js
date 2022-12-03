import {
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
  Spacer,
  HStack,
} from "@chakra-ui/react";
const parser = require("../../script/parser");

const GridStats = ({ drawData }) => {
  return (
    <VStack
      spacing="1.5rem"
      align="center"
      justify="center"
      bgImage="static/blur/v2bg2.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="2rem"
      // height="100vh"
      // w="100vw"
      w="100%"
      h="78vh"
      bgColor="primary.800"
      borderRadius="1rem"
      border="2px solid #f78901"
      pl="0rem"
      pr="0rem"
      pt="0.5rem"
      pb="1rem"
    >
      <Heading size="xl" color="white" textAlign="center">
        Random stats
      </Heading>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
        height={"80%"}
        p="1rem"
      >
        <GridItem
          colSpan={2}
          border="1px solid #ffffff50"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack
            spacing={"0rem"}
            align="center"
            height="100%"
          >
            <Spacer />
            <HStack
              align="baseline"
              spacing={"0.25rem"}
            >

              <Text fontSize={["4xl", "4xl", "5xl"]} fontWeight="800"
                textAlign={"center"}
              >
                {drawData.total_no_of_minutes}
              </Text>
              <Text>m</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "lg"]}
              fontWeight="700"
              textAlign={"center"}
            >
              involved<br />in total
            </Text>

            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff50"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack
            spacing={"0rem"}
            align="center"
            height="100%"
          >
            <Spacer />

            <HStack
              align="baseline"
              spacing={"0.25rem"}
            >

              <Text fontSize={["4xl", "4xl", "5xl"]} fontWeight="800"
                textAlign={"center"}
              >
                {parseInt(drawData.total_no_of_minutes / 60)}
              </Text>
              <Text>h</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "lg"]}
              fontWeight="700"
              textAlign={"center"}
            >
              lost forever<br />chatting
            </Text>

            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff50"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack
            spacing={"0rem"}
            align="center"
            height="100%"
          >
            <Spacer />

            <HStack
              align="baseline"
              spacing={"0.25rem"}
            >

              <Text fontSize={["4xl", "4xl", "5xl"]} fontWeight="800"
                textAlign={"center"}
              >
                {drawData.longest_session.streak_duration}
              </Text>
              <Text
              >m</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "lg"]}
              fontWeight="700"
              textAlign={"center"}
            >
              longest <br /> session
            </Text>

            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff50"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack
            spacing={"0rem"}
            align="center"
            height="100%"
          >
            <Spacer />

            <HStack
              align="baseline"
              spacing={"0.25rem"}
            >

              <Text fontSize={["4xl", "4xl", "5xl"]} fontWeight="800"
                textAlign={"center"}
              >
                {Math.round(drawData.longest_session.average_reply_time * 10) / 10}
              </Text>
              <Text>s</Text>
            </HStack>

            <Text
              fontSize={["sm", "sm", "sm"]}
              fontWeight="700"
              textAlign={"center"}
            >
              reply time during the longest session
            </Text>

            <Spacer />
          </VStack>
        </GridItem>

      </Grid>
      {/* <Heading size="md" color="black" textAlign="center" p="1rem">
          So these are our most used Emojis
        </Heading> */}
    </VStack>
  );
};

export default GridStats;
