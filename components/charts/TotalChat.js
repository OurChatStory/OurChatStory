import { Text, VStack, Box, Image as CImage, keyframes } from "@chakra-ui/react";

import CountUp from "react-countup";

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

  // var end = 0;
  // const temp = drawData.monthly_chat_count.map(({ month, count }) => {
  //   end += count;
  // });
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      bgImage="/static/asdf.jpg"
      bgBlendMode="multiply"
      // backdropFilter="blur(70px) hue-rotate(90deg)"
      // bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="78vh"
      bgColor="gray"
      borderRadius="1rem"
      p="1rem"
      border="4px solid"
      animation={zoomAnimation}
    >
      {/* <CImage
        // boxSize="45px"
        borderRadius="1rem"
        src="static/asdf.png"
        alt="OurChatStory"
        // w="100%"
        bgRepeat="no-repeat"
        // h="100%"
        w="100%"
        h="78vh"
        zIndex="5"
        bgSize="cover"
        position={"absolute"}
        style={{ imageRendering: "crisp-edges" }}
        animation={zoomAnimation}
      ></CImage>
      <CImage
        // boxSize="45px"
        borderRadius="1rem"
        src="static/asdf.png"
        alt="OurChatStory"
        // w="100%"
        bgRepeat="no-repeat"
        // h="100%"
        w="100%"
        h="78vh"
        zIndex="3"
        bgSize="cover"
        // position={"absolute"}
        style={{ imageRendering: "crisp-edges" }}
        animation={zoomAnimation}
      ></CImage> */}
      <Text align="center" as="b" fontSize="4xl">
        Infact y&apos;all sent a total of{" "}
      </Text>
      <Text
        fontSize="5xl"
        // color="#fded03"
        align="center"
        fontWeight="medium"
        bgColor="#800280"
        pl="1rem"
        pr="1rem"
        as="b"
      >
        <CountUp
          end={drawData.total_no_of_chats}
          onEnd={({ countUpRef }) => {
            countUpRef = "a";
          }}
          duration={2}
        />
      </Text>
      <Text fontSize="2xl" align="center">
        {" "}
        messages to each other this year!!
      </Text>
      <br />
      <Text fontSize="3xl" align="center">
        That puts you into top{" "}
        <b style={{ textDecoration: "underline" }}>
          {parseFloat(drawData.top_percent * 100).toFixed(2)}%
        </b>{" "}
        of texters in the world🤯
      </Text>
    </VStack>
  );
};

export default Card1;
