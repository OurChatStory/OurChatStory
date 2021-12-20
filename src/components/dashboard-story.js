import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";

import Stories from "react-insta-stories";

import Card1 from "./charts/Card1";
import Card2 from "./charts/Card2";
import Card3 from "./charts/Card3";
import Card4 from "./charts/Card4";
import Card5 from "./charts/Card5";
import Card6 from "./charts/Card6";
import Card7 from "./charts/Card7";
import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";

const Dashboard = ({ drawData }) => {
  const stories = [
    {
      content: (props) => <Welcome drawData={drawData} />,
    },
    {
      content: (props) => <Card1 drawData={drawData} />,
    },

    {
      content: (props) => <Card2 drawData={drawData} />,
    },
    {
      content: (props) => <Card6 drawData={drawData} />,
    },
    {
      content: (props) => <Card7 drawData={drawData} />,
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
    {
      content: (props) => <ThankYou drawData={drawData} />,
    },
  ];
  return (
    <Box>
      <Stories
        stories={stories}
        defaultInterval={8000}
        width="100vw"
        height="100vh"
        preventDefault={false}
      />
    </Box>
  );
};

export default Dashboard;
