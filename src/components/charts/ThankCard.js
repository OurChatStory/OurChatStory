import { VStack, Text, Image, Link, Box } from "@chakra-ui/react";
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
      spacing="3rem"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
    >
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        <strike>The End</strike> <br />
      </Text>
      <Text color="#F5F5F5" fontSize="4xl" align="center">
        A new year
        <br /> A new Story!
      </Text>
      <br />
      <br />
      <Text color="#F5F5F5" fontSize="2xl" align="center">
        Share with your friends
      </Text>
      <Image boxSize="70px" src={logo} alt="OurChatStory" />
      <Box zIndex={10000}>
        <Text color="#F5F5F5" fontSize="2xl" align="center">
          Made with ❤️ by
        </Text>
        <Text color="#F5F5F5" fontSize="xl" align="center">
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
      </Box>
    </VStack>
  );
};

export default Card6;
