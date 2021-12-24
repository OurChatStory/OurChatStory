import {
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import background from "../../static/bg7.png";
import { VictoryLine } from "victory";

const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="1rem"
      align="center"
      justify="center"
      p="2rem"
      w="100vw"
      h="100vh"
      backgroundImage={background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="110%"
    >
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        The time of the day you talk the most is
      </Text>
      <Text color="#F5F5F5" fontSize="5xl" align="center" fontWeight="medium">
        {parser.active_time(drawData.most_active_hour.hour)}
      </Text>

      <Box>
        <VictoryLine
          height={200}
          domain={{ y: [-50, drawData.most_active_hour.count + 100] }}
          interpolation="natural"
          style={{
            data: {
              stroke: "#e1e3c8",
              strokeWidth: 4,
              strokeLinecap: "round",
            },
          }}
          animate={{ duration: 4000, onLoad: { duration: 4000 } }}
          data={parser.hourly_count_data(drawData.hourly_count)}
        />
      </Box>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        {parser.active_time_type(drawData.most_active_hour.hour)}
      </Text>
    </VStack>
  );
};

export default Card6;
