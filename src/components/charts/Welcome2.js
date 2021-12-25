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
        But the Texts between
      </Text>
      <br />
      <Text
        color="white"
        pl="1rem"
        pr="1rem"
        backgroundColor="LightSalmon"
        fontSize="4xl"
        align="center"
        fontWeight="medium"
      >
        {console.log("d", drawData)}
        {drawData.members[0]}
      </Text>
      <Text color="black" fontSize="4xl" align="center">
        &{" "}
      </Text>
      <Text
        color="white"
        pl="1rem"
        pr="1rem"
        backgroundColor="LightSalmon"
        fontSize="4xl"
        align="center"
        fontWeight="medium"
      >
        {drawData.members[1]}
      </Text>
      <br />
      <Text color="black" fontSize="4xl" align="center">
        never stopped!
      </Text>
    </VStack>
  );
};

export default Card6;
