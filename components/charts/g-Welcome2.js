import { Text, VStack } from "@chakra-ui/react";

const Card6 = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      bgImage="static/bg2.png"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="1rem"
      w="100vw"
      h="100vh"
    >
      <Text color="black" fontSize="4xl" align="center">
        But y'all didn't stop texting each other
      </Text>
    </VStack>
  );
};

export default Card6;
