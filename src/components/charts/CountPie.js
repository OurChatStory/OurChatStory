import { Box, Text, Flex, Spacer, VStack, Heading } from "@chakra-ui/react";

import { VictoryBar, VictoryStack, VictoryPie } from "victory";

import background from "../../static/bg9.png";

const Card4 = ({ drawData }) => {
  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="top"
      bgImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
      p="1rem"
      width="100vw"
      h="100vh"
    >
      <Heading mt="4rem" fontSize="3xl" textAlign="center" fontWeight="bold">
        Who was the Top Texter?
      </Heading>
      {/* <Text fontSize="4xl" textAlign="center" fontWeight="bold">
        {drawData.no_of_messages_per_member[0].count >
        drawData.no_of_messages_per_member[1].count
          ? drawData.no_of_messages_per_member[0].member
          : drawData.no_of_messages_per_member[1].member}
      </Text> */}
      <Box align="center" width="100%" height="75%">
        <VictoryPie
          width="300"
          animate={{
            duration: 3000,
          }}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={drawData.no_of_messages_per_member
            .slice(0, 8)
            .map(({ member, count }) => {
              return { x: member.split(" ")[0], y: count };
            })}
        />
        {/* <VictoryStack
          height={50}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          colorScale={["brown", "#F5F5F5"]}
          style={{
            data: { stroke: "black", strokeWidth: 3 },
          }}
        >
          <VictoryBar
            barWidth={20}
            data={[
              {
                x: "a",
                y: drawData.no_of_messages_per_member[0].count,
              },
            ]}
            horizontal
          />

          <VictoryBar
            barWidth={20}
            data={[
              {
                x: "a",
                y: drawData.no_of_messages_per_member[1].count,
              },
            ]}
            horizontal
          />
        </VictoryStack>

        <Flex>
          <Text fontSize="2xl">
            <b>{drawData.no_of_messages_per_member[0].count}</b>
            <br />
            <br />
            {drawData.no_of_messages_per_member[0].member}
          </Text>
          <Spacer />
          <Text fontSize="2xl" pr="0.5rem">
            <b>{drawData.no_of_messages_per_member[1].count}</b>
            <br />
            <br />
            {drawData.no_of_messages_per_member[1].member}
          </Text>
        </Flex> */}
      </Box>
    </VStack>
  );
};

export default Card4;
