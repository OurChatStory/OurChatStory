import { Text, VStack } from "@chakra-ui/react";

const Card6 = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      // bgImage="static/asdf.png"
      bgImage="static/v2bg0.jpg"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="78vh"
      bgColor="#6f0cbb"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
      // borderColor="#fcea2b"
      // errorBorderColor="red.300"
      border="2px solid #fcea2b"
      // animation={zoomAnimation}
    >
      <Text color="white" fontSize="4xl" align="center">
        But the Texts between
      </Text>
      <br />
      <Text
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
