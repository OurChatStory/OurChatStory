import { Text, VStack } from "@chakra-ui/react";
import background from "../../static/bg2.png";

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="140%"
      p="2rem"
      w="100vw"
      h="100vh"
    >
      <Text color="black" fontSize="4xl" align="center" fontWeight="bold">
        This year was eventful
      </Text>
      <Text color="black" fontSize="3xl" align="center">
        We were locked inside our home, but together we made it to the end!
      </Text>
    </VStack>
  );
};

export default Card6;
