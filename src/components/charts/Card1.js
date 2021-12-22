import {
  Text,
  VStack,
} from "@chakra-ui/react";
import background from "../../static/bg4.png";
import CountUp from "react-countup";

const Card1 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="140%"
      p="1.5rem"
      w="100vw"
      h="100vh"
    >
      <Text align="center" fontSize="5xl">
        Infact y'all sent a total of{" "}
      </Text>
      <Text fontSize="6xl" color="Brown" align="center" fontWeight="medium">
        <CountUp
          end={
            drawData.no_of_messages_per_member[0].count +
            drawData.no_of_messages_per_member[1].count
          }
          onEnd={({ countUpRef }) => {
            countUpRef = "a";
          }}
          duration={2}
        />
      </Text>
      <Text fontSize="3xl" align="center">
        {" "}
        messages to each other this year!!
      </Text>
      <br />
      <Text fontSize="4xl" align="center">
        That puts you into top <b>{parseFloat(drawData.top_percent * 100).toFixed(2)}% </b>
        of texters in the world🤯
      </Text>
    </VStack>
  );
};

export default Card1;
