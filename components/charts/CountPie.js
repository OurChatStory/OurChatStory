import { Box, Text, Flex, Spacer, VStack, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

import { VictoryBar, VictoryStack, VictoryPie } from "victory";

const Card4 = ({ drawData }) => {
  const [piRadii, setPiRadii] = useState(0);
  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="top"
      bgImage="/static/bg9.png"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="1rem"
      width="100vw"
      h="100vh"
    >
      <Heading mt="4rem" fontSize="3xl" textAlign="center" fontWeight="bold">
        Who texts the most?
      </Heading>
      <Text
        pl="1rem"
        pr="1rem"
        backgroundColor="SaddleBrown"
        fontSize="4xl"
        textAlign="center"
        color="white"
        fontWeight="bold"
      >
        {drawData.most_active_member.member}
      </Text>
      <Box align="center" width="100%" height="65%">
        <VictoryPie
          height="300"
          innerRadius={70}
          animate={{
            duration: 3000,
          }}
          colorScale={[
            "tomato",
            "orange",
            "gold",
            "cyan",
            "navy",
            "pink",
            "green",
          ]}
          data={drawData.no_of_messages_per_member
            .slice(0, 6)
            .map(({ member, count }) => {
              return { x: member.split(" ")[0], y: count };
            })}
        />
      </Box>
    </VStack>
  );
};

export default Card4;
