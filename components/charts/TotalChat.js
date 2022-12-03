import { Text, VStack, Box, Image as CImage, keyframes } from "@chakra-ui/react";

import CountUp from "react-countup";

const randomUpDownAnimation = keyframes`
    0% {
        background-position: 0 0;
    }
    50%{
      background-position: 100% 0;
    }
    100% {
        background-position: 0 0;
    }
`;

const Card1 = ({ drawData }) => {
  const spinAnimation = `${randomUpDownAnimation} infinite 70s linear`;

  // var end = 0;
  // const temp = drawData.monthly_chat_count.map(({ month, count }) => {
  //   end += count;
  // });
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      bgImage="/static/asdf.png"
      bgBlendMode={"darken"}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="78vh"
      bgColor="gray"
      borderRadius="1rem"
      p="1rem"
      border="4px solid"
      animation={spinAnimation}
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
        animation={spinAnimation}
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
        animation={spinAnimation}
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
