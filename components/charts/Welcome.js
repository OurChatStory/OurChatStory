import { Text, VStack } from "@chakra-ui/react";

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      backgroundImage="/static/tbg1.jpeg"
      bgBlendMode={"lighten"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      bgColor="#f4e9e1"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
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
