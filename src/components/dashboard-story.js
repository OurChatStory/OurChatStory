import React, { useCallback, useRef, useState } from "react";
import { Heading, Box, Button, Text, Center, HStack, Image } from "@chakra-ui/react";
import { HiShare } from "react-icons/hi";
import Stories from "react-insta-stories";
import Card8 from "./charts/monthly";
import Card0 from "./charts/Card0";
import Card1 from "./charts/Card1";
import Card3 from "./charts/wordcloud";
import Card4 from "./charts/Card4";
import Card5 from "./charts/emoji";
import Card6 from "./charts/time";
import Card7 from "./charts/cold";
import Card9 from "./charts/Card1.2";

import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";

import logo from "../static/logo2.png";

import * as htmlToImage from "html-to-image";

const Dashboard = ({ drawData }) => {
  const [isShared, setIsShared] = useState(false);
  const ref = useRef();
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    setIsShared(true);
    htmlToImage
      .toBlob(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const file = new File([dataUrl], "share.png", { type: dataUrl.type });
        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator
            .share({
              title: "OurChatStory",
              text: "Look at out #WhatsAppWrapped. I made it using OurChatStory.co!",
              files: [file],
            })
            .then(() => console.log("Share was successful."))
            .catch((error) => alert(error));
          setIsShared(false);
        } else alert("no share support");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const stories = [
    {
      content: (props) => <Welcome drawData={drawData} />,
    },
    {
      content: (props) => <Card0 drawData={drawData} />,
    },
    {
      content: (props) => <Card1 drawData={drawData} />,
    },
    {
      content: (props) => <Card9 drawData={drawData} />,
    },
    {
      content: (props) => <Card8 drawData={drawData} />,
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
      <Box ref={ref}>
        <Stories
          stories={stories}
          defaultInterval={20000}
          width="100vw"
          height="95vh"
          preventDefault={false}
        />
        <HStack w="100%" h="5vh"
          position="fixed"
          spacing="0.5rem"
          p="1rem"
          align="center"
          bottom="5vh">
          <Image
            boxSize='3vh'
            src={logo}
            alt='OurChatStory'
            style={{ imageRendering: "crisp-edges" }}
          />
          <Text align="center" color="white" fontSize="xs"
            style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
            Made using OurChatStory.co
          </Text>
        </HStack>
      </Box>
      <Button
        leftIcon={<HiShare />}
        w="100%"
        h="5vh"
        onClick={onButtonClick}
      ></Button>
    </Box>
  );
};

export default Dashboard;
