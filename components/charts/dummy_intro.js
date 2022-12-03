import { Text, VStack, Box, Spacer } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const DummyIntro = ({ drawData }) => {
  return (
    <>
      {/* <div id="overlay"></div> */}
      <VStack
        align="center"
        justify="center"
        spacing="1rem"
        // bgImage="static/asdf.png"
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
        pt="1rem"
        pb="1rem"
        // borderColor="#fcea2b"
        // errorBorderColor="red.300"
        border="4px solid #fcea2b"
      >
        {/* <Marquee
        gradient={true}
        speed={40}
        gradientColor={[155, 31, 232]}
        gradientWidth={30}
        pauseOnHover={true}
      >
        {[...Array(10)].map((i) => (
          <Box w="1rem" h="1rem" borderRadius="50%" bgColor="yellow"></Box>
        ))}
      </Marquee>
      <Spacer/> */}
        <Text
          fontSize="4xl"
          align="left"
          color="white"
          w={"100%"}
          fontWeight="600"
          textAlign="center"
        >
          Let&apos;s talk about
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
          {drawData.members[0]}
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
          {drawData.members[1]}
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
      {/* <style jsx>{`
        #overlay {
          position: absolute;
          width: 100%;
          height: 78vh;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }
      `}</style> */}
    </>
  );
};

export default DummyIntro;
