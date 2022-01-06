import { Text, VStack } from "@chakra-ui/react";

const Card1 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      p="1rem"
      w="100vw"
      h="100vh"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      bgImage="/static/bg5.png"
    >
      <Text
        mb="1rem"
        fontSize="5xl"
        align="center"
        fontWeight="bold"
        color="OldLace"
      >
        FUN FACT
      </Text>
      <Text fontSize="4xl" align="center">
        Most of the time it&apos;s
      </Text>
      <Text
        pl="1rem"
        pr="1rem"
        fontSize="4xl"
        align="center"
        fontWeight="medium"
        backgroundColor="OldLace"
      >
        {" "}
        {drawData.who_texts_first}
      </Text>
      <Text mb="2rem" fontSize="4xl" align="center">
        {" "}
        who texts first 😤
      </Text>
    </VStack>
  );
};

export default Card1;
