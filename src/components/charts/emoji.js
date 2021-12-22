import {
  Heading,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import bg from "../../static/bg3.png";
const Card5 = ({ drawData }) => {
  return (
    <VStack
      spacing="1.5rem"
      align="center"
      justify="center"
      bgImage={bg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="2rem"
      height="100vh"
      w="100vw"
    >
      <Heading textAlign="center">
        Most used emojis :)
      </Heading>
      <Box>
        {drawData.top_10_emojis.slice(0, 5).map(({ emoji }, i) => {
          return (
            <Text
              align="center"
              style={{
                margin: "0.5rem",
                fontSize: (5 - i) * (20 + i),
              }}
              lineHeight={i == 5 ? 0 : (1.2 + 0.1 * i)}
            >
              {emoji}
            </Text>
          );
        })}
      </Box>
    </VStack>
  );
};

export default Card5;
