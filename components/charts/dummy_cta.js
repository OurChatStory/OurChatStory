import { Text, VStack, Box, Spacer, Button, Link } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const DummyCTA = ({ drawData, setShowUploader }) => {
  return (
    <VStack
      align="center"
      // justify="center"
      spacing="2rem"
      // bgImage="static/download.jpeg"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="1rem"
      w="100%"
      h="78vh"
      bgColor="#6f0cbb00"
      borderRadius="1rem"
      mt="5rem"
      // pb="1rem"
      p="1rem"
      // borderColor="#fcea2b"
      // errorBorderColor="red.300"
      border="0px solid #fcea2b"
    >
      {/* <Spacer /> */}
      <Text
        fontSize="3xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
        textAlign="center"
      >
        Now to the best part!
      </Text>
      <Text
        fontSize="2xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="500"
        textAlign="center"
        pl={"1rem"}
        pr={"1rem"}
      >
        You can know your WhatsApp Chat Story with your friends!
      </Text>
      {/* <Spacer /> */}
      <Button
        colorScheme="primary"
        p={{
          base: ["2rem", "1.5rem"],
          sm: ["2rem", "1.5rem"],
          lg: ["2rem", "1.5rem"],
        }}
        borderRadius={50}
        onClick={() => {
          setShowUploader(true);
          // Disable scroll
          document.body.style.overflow = "hidden";
        }}
      >
        {/* <label for="hid" cursor="pointer">
                      </label> */}
        <Text fontSize={{ base: "sm", sm: "sm", lg: "md" }} color="dark">
          Click to make your WhatsApp Wrapped
        </Text>
        {/* <input
                        id="hid"
                        type="file"
                        name="file"
                        title=""
                        hidden
                        className="custom-file-input"
                        size="100"
                        onChange={uploadFile}
                    /> */}
      </Button>
      <Spacer />
      {/* scroll to top to #marquee */}
      {/* <Text
        fontSize="2xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="500"
        textAlign="center"
        pl={"1rem"}
        pr={"1rem"}
        as="a"
        cursor={"pointer"}
        onClick={() => {
          console.log("scrolling to top");
          document.getPageTop().scrollIntoView();
          // window.scrollTo(0, 0)
        }}
      >
        See what others have made
      </Text> */}
      {/* <Spacer /> */}
      <Spacer />
      <Text fontSize={{ base:"smaller", sm: "sm", lg: "smaller" }} color="grey" pb="2rem">
        And yes, we take privacy very seriously and don't store or see any of
        your chats{" "}
      </Text>
      {/* <Spacer/>
      <Box pb="2rem">
        <Text color="#F5F5F5" fontSize="sm" align="center">
          Made with ❤️ by
        </Text>
        <Text color="#F5F5F5" fontSize="sm" align="center">
          <Link
            textDecoration="underline"
            cursor="pointer"
            zIndex={10000}
            href="https://twitter.com/anshulagx"
            target="_blank"
          >
            @anshulagx
          </Link>{" "}
          &{" "}
          <Link
            zIndex={10000}
            textDecoration="underline"
            href="https://twitter.com/iamyajat"
            target="_blank"
          >
            @iamyajat
          </Link>
        </Text>
      </Box> */}
    </VStack>
  );
};

export default DummyCTA;
