import { Text, VStack } from "@chakra-ui/react";

const DummyIntro = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      bgImage="static/download.jpeg"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      p="1rem"
      w="100%"
      h="100%"
      bgColor="#6f0cbb"
      borderRadius="1rem"
    >
      <Text
        fontSize="4xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
        textAlign="center"
      >
        Take a look at Wrapped between
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        // w={"100%"}
        pl="1rem"
        pr="1rem"
        fontWeight="800"
        bgColor="#fcea2b"
        textAlign="center"
        color="#210934"
      >
        Divit
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        w={"100%"}
        fontWeight="800"
        color={"white"}
        textAlign="center"
      >
        &
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        // w={"100%"}
        fontWeight="800"
        textAlign="center"
        bgColor="#fcea2b"
        color="#210934"
        pl="1rem"
        pr="1rem"
      >
        Tanisha
      </Text>
      <Text
        fontSize="4xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
        textAlign="center"
      >
        for example{" "}
      </Text>{" "}
    </VStack>
  );
};

export default DummyIntro;
