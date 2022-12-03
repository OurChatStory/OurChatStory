import { Heading, Box, Text, Grid, GridItem ,VStack, Center} from "@chakra-ui/react";
const parser = require("../../script/parser");

const GridStats = ({ drawData }) => {
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
      bgColor="primary.800"
      borderRadius="1rem"
      border="1px solid #f3c5b7"
      p="1rem"
    >
      {/* <Heading size="md" color="black" textAlign="center">
        An Emoji is worth thousand words
      </Heading> */}


        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={7}
        >
          <GridItem colSpan={2} border="1px solid #ffffff50" p="1rem" borderRadius={"6px"}>
            <Center>
              <VStack>
            <Text fontSize={["md","md","lg"]} fontWeight="700">Minutes Involved</Text>
            <Text fontSize={["5xl","7xl","8xl"]} fontWeight="800">{drawData.total_no_of_minutes}</Text>
            <Text fontSize={["lg","sm","xl"]} fontWeight="200">get a life guys</Text>
            </VStack></Center>
          </GridItem>
          <GridItem colSpan={2} border="1px solid #ffffff50" p="1rem" borderRadius={"6px"}>
          <Text fontSize={["lg","md","md"]} fontWeight="700">That in hour is</Text>
            <Text fontSize={["5xl","7xl","8xl"]} fontWeight="800">{parseInt((drawData.total_no_of_minutes)/60)}</Text>
            <Text fontSize={["lg","sm","sm"]} fontWeight="200">get a life guys</Text>          </GridItem>
          <GridItem colSpan={2} border="1px solid #ffffff50" p="1rem" borderRadius={"6px"}>
          <Text fontSize={["sm","md","md"]} fontWeight="700">Days Involved</Text>
            <Text fontSize={["5xl","7xl","8xl"]} fontWeight="800">
              {parser.no_of_days_talked(drawData.no_talk_string)}
              </Text>
            <Text fontSize={["sm","sm","sm"]} fontWeight="200">Thats more than couples in a relationship</Text>          </GridItem>
          <GridItem colSpan={2} border="1px solid #ffffff50" p="1rem" borderRadius={"6px"}>
          <Text fontSize={["sm","md","md"]} fontWeight="700">Placeholder</Text>
            <Text fontSize={["5xl","7xl","8xl"]} fontWeight="800">2</Text>
            <Text fontSize={["sm","sm","sm"]} fontWeight="200">get a life guys</Text>          </GridItem>
        </Grid>
        {/* <Heading size="md" color="black" textAlign="center" p="1rem">
          So these are our most used Emojis
        </Heading> */}

    </VStack>
  );
};

export default GridStats;
