import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import TinderCard from "react-tinder-card";

import Card1 from "./charts/Card1";
import Card2 from "./charts/Card2";
import Card3 from "./charts/Card3";
import Card4 from "./charts/Card4";
import Card5 from "./charts/Card5";
import Card6 from "./charts/Card6";

const Dashboard = ({ drawData }) => {
  return (
    <Box p="2rem">
      <Heading size="md">
        Conversation between {drawData.members[0]} & {drawData.members[1]}
      </Heading>
      <Box m={["1rem", "3rem"]}>
        <TinderCard>
          <Card1 drawData={drawData} />
        </TinderCard>
        <TinderCard>
          <Card2 drawData={drawData} />
        </TinderCard>
        <TinderCard>
          <Card6 drawData={drawData} />
        </TinderCard>
        <TinderCard>
          <Card3 drawData={drawData} />
        </TinderCard>

        <TinderCard>
          <Card4 drawData={drawData} />
        </TinderCard>

        <TinderCard>
          <Card5 drawData={drawData} />
        </TinderCard>
      </Box>
    </Box>
  );
};

export default Dashboard;
