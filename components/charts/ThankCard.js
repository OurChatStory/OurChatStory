import {
  VStack,
  Text,
  Image,
  Link,
  Box,
  Center,
  keyframes,
  Spacer,
} from "@chakra-ui/react";

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

// function fun(dataUrl) {
//   const file = new File([dataUrl], "share.mp4", { type: dataUrl.type });

//   if (navigator.canShare && navigator.canShare({ files: [file] })) {
//     navigator
//       .share({
//         title: "OurChatStory",
//         text: "Look at our #WhatsAppWrapped. I made it using OurChatStory.co!",
//         files: [file],
//       })
//       .then(() => console.log("Share was successful."))
//       .catch((error) => console.log(error));
//     // setIsShared(false);
//   } else {
//     console.log("no share support");
//     console.log("file", file);
//     const link = document.createElement("a");
//     link.download = "my-image-name.mp4";
//     link.href = dataUrl;
//     link.click();
//   }
// }

const Card6 = ({ drawData, videoFile }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;
  // if(videoFile)
  //   fun(videoFile);
  return (
    <VStack
      // bg="#30475E"
      // p="1rem"
      // w="100vw"
      // h="100vh"
      align="center"
      justify="center"
      spacing="1rem"
      backgroundImage="static/dark/v2bg6.webp"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      border="2px solid white"
      // bg="#30475E"
      borderRadius="1rem"
      p="1rem"
      animation={zoomAnimation}
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        This was
      </Text>
      <Image h="80px" src="static/compress/logo2.webp" alt="OurChatStory" />
      <Text color="#F5F5F5" fontSize="4xl" align="center" pb="1rem">
        <b>OurChatStory</b>
      </Text>
      <Text color="#F5F5F5" fontSize="xl" align="center">
        While we create many more amazing stories together, let&apos;s share
        this with friends
      </Text>
      <Text color="#F5F5F5" fontSize="xl" align="center">
        Because every story is
        <br />
        unique and worth sharing
      </Text>
      {/* <Box zIndex={10000}>
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
      {/* <Spacer /> */}
    </VStack>
  );
};

export default Card6;
