import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import TinderCard from "react-tinder-card";
import Stories from "react-insta-stories";

import Card1 from "./charts/Card1";
import Card2 from "./charts/Card2";
import Card3 from "./charts/Card3";
import Card4 from "./charts/Card4";
import Card5 from "./charts/Card5";

const Dashboard = ({ drawData }) => {
  const stories = [
    {
      content: (props) => <Card1 drawData={drawData} />,
    },
    {
      content: (props) => <Card2 drawData={drawData} />,
    },
    {
      content: (props) => <Card3 drawData={drawData} />,
    },
    {
      content: (props) => <Card4 drawData={drawData} />,
    },
    {
      content: (props) => <Card5 drawData={drawData} />,
    },
  ];
  return (
    <Box p="2rem">
      <Stories
        stories={stories}
        defaultInterval={3000}
        width={500}
        height={900}
      />
    </Box>
  );
};

export default Dashboard;
