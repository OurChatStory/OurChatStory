import { Text, VStack } from "@chakra-ui/react";

const Card6 = ({ drawData }) => {
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
      // p="1rem"
      w="100%"
      h="78vh"
      bgColor="#6f0cbb"
      borderRadius="1rem"
      p="1rem"
      // borderColor="#fcea2b"
      // errorBorderColor="red.300"
      border="4px solid #fcea2b"
      // align="center"
      // justify="center"
      // spacing="1rem"
      // bgImage="/static/bg2.png"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="1rem"
      // w="100vw"
      // h="100vh"
    >
      <Text color="white" fontSize="4xl" align="center">
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
        bgColor="#fcea2b"
        textAlign="center"
        color="#210934"
      >
        {console.log("d", drawData)}
        {drawData.members[0]}
      </Text>
      <Text color="white" fontSize="4xl" align="center">
        &{" "}
      </Text>
      <Text
        color="white"
        pl="1rem"
        pr="1rem"
        bgColor="#fcea2b"
        textAlign="center"
        color="#210934"
        fontSize="4xl"
        align="center"
        fontWeight="medium"
      >
        {drawData.members[1]}
      </Text>
      <br />
      <Text color="white" fontSize="4xl" align="center">
        never stopped!
      </Text>
    </VStack>
  );
};

export default Card6;
