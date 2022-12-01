import { Text, VStack } from "@chakra-ui/react";

const DummyIntro = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      // bgImage="static/bg2.png"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      p="1rem"
      // w="100vw"
      // h="100vh"
    >
      <Text
        fontSize="4xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
      >
        Take a look at Wrapped between
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        w={"100%"}
        fontWeight="800"
        color={"red"}
      >
        Yajat
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        w={"100%"}
        fontWeight="800"
        color={"white"}
      >&</Text>
      <Text
        fontSize="4xl"
        align="left"
        w={"100%"}
        fontWeight="800"
        color={"red"}
      >
        Brinda
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
      >
for example      </Text>    </VStack>
  );
};

export default DummyIntro;
