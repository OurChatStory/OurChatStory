import { Text, VStack } from "@chakra-ui/react";

import background from "../../static/bg2.png";
const Card6 = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      bgImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="1rem"
      w="100vw"
      h="100vh"
    >
      <Text color="black" fontSize="4xl" align="center">
        But Y'all didn't stopped texting each other
      </Text>
    </VStack>
  );
};

export default Card6;
