import { Text, VStack, keyframes } from "@chakra-ui/react";

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Card1 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      // p="1rem"
      // w="100vw"
      // h="100vh"
      // backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgBlendMode="multiply"
      bgImage="/static/asdf.jpg"
      w="100%"
      h="78vh"
      bgColor="gray"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
      animation={zoomAnimation}
    >
      <Text mb="1rem" fontSize="3xl" align="center">
        Let me tell you this
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
        backgroundColor="#FCBA12"
      >
        {" "}
        {drawData.who_texts_first}
      </Text>
      <Text mb="2rem" fontSize="4xl" align="center">
        {" "}
        who texts first
      </Text>
    </VStack>
  );
};

export default Card1;
