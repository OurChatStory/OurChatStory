import React, { useState } from "react";
import { VStack, Text, Image } from "@chakra-ui/react";
import background from "../../static/bg8.png";
import logo from "../../static/logo2.png";

const Card6 = ({ drawData }) => {
  return (
    <VStack
      bg="#30475E"
      p="1rem"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      spacing="8rem"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
    >
      <Text
        color="#F5F5F5"
        fontSize="4xl"
        align="center"
      >
        <strike>The End</strike> <br />
        The New Beginning
      </Text>

      <Text
        color="#F5F5F5"
        fontSize="2xl"
        align="center"
      >
        Share with your friends
      </Text>
      <Image
        boxSize='70px'
        src={logo}
        alt='OurChatStory'
      />
    </VStack>
  );
};

export default Card6;
