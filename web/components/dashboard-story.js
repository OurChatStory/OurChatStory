import React, { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Text,
  HStack,
  IconButton,
  Spinner,
  Center,
  useToast,
} from "@chakra-ui/react";
import { HiShare } from "react-icons/hi";
import { IoClose, IoChevronForward, IoChevronBack } from "react-icons/io5";
import Stories from "react-insta-stories";
import * as htmlToImage from "html-to-image";

// Charts
import MonthlyGraph from "./charts/monthly";
import Welcome2 from "./charts/Welcome2";
import TotalChat from "./charts/TotalChat";
import WordCloud from "./charts/wordcloud";
import CountPie from "./charts/CountPie";
import Emoji from "./charts/emoji";
import HourlyGraph from "./charts/time";
import NoTalk from "./charts/cold";
import MostActive from "./charts/MostActive";
import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";
import GridStats from "./charts/GridStats";

const Dashboard = ({ drawData, isDemo }) => {
  const [isShared, setIsShared] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const toast = useToast();

  const onButtonClick = useCallback(() => {
    setIsShared(true);
    htmlToImage
      .toBlob(document.body)
      .then((dataUrl) => {
        const file = new File([dataUrl], "share.png", { type: dataUrl.type });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator
            .share({
              title: "OurChatStory",
              text: "Check out my #WhatsAppWrapped! Made with OurChatStory.co",
              files: [file],
            })
            .then(() => console.log("Share successful"))
            .catch((error) => console.log("Share failed", error));
          setIsShared(false);
        } else {
          console.log("Web Share API not supported");
          setIsShared(false);
          toast({
            title: "Sharing not supported",
            description: "Your browser doesn't support direct sharing. Screenshot to share!",
            status: "info",
            duration: 3000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setIsShared(false);
      });
  }, [toast]);

  const pStories = [
    { content: (props) => <Welcome drawData={drawData} /> },
    { content: (props) => <Welcome2 drawData={drawData} /> },
    { content: (props) => <TotalChat drawData={drawData} /> },
    { content: (props) => <GridStats drawData={drawData} /> },
    { content: (props) => <MostActive drawData={drawData} /> },
    { content: (props) => <MonthlyGraph drawData={drawData} isShared={isShared} /> },
    { content: (props) => <HourlyGraph drawData={drawData} isShared={isShared} /> },
    { content: (props) => <NoTalk drawData={drawData} /> },
    { content: (props) => <WordCloud drawData={drawData} /> },
    { content: (props) => <CountPie drawData={drawData} /> },
    { content: (props) => <Emoji drawData={drawData} /> },
    { content: (props) => <ThankYou drawData={drawData} /> },
  ];

  const gStories = [
    { content: (props) => <Welcome drawData={drawData} /> },
    { content: (props) => <TotalChat drawData={drawData} /> },
    { content: (props) => <GridStats drawData={drawData} /> },
    { content: (props) => <MostActive drawData={drawData} /> },
    { content: (props) => <MonthlyGraph drawData={drawData} /> },
    { content: (props) => <HourlyGraph drawData={drawData} /> },
    { content: (props) => <NoTalk drawData={drawData} /> },
    { content: (props) => <WordCloud drawData={drawData} /> },
    { content: (props) => <CountPie drawData={drawData} /> },
    { content: (props) => <Emoji drawData={drawData} /> },
    { content: (props) => <ThankYou drawData={drawData} /> },
  ];

  const stories = drawData.group ? gStories : pStories;

  return (
    <Box bg="#000" h="100vh" w="100vw" position="relative" overflow="hidden">
      <Center h="100%">
        <Box
          w={{ base: "100%", md: "400px" }} // Mobile width or fixed width on desktop
          h={{ base: "100%", md: "90vh" }}
          position="relative"
        >
          <Stories
            currentIndex={storyIndex}
            stories={stories}
            defaultInterval={20000}
            width="100%"
            height="100%"
            onStoryChange={(s) => setStoryIndex(s)}
            preventDefault={false}
            keyboardNavigation={true}
            storyStyles={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Center>

      {/* Close Button */}
      <IconButton
        icon={<IoClose size="24px" />}
        position="absolute"
        top={4}
        right={4}
        variant="ghost"
        color="white"
        zIndex={2000}
        onClick={() => window.location.reload()}
        _hover={{ bg: "rgba(255,255,255,0.1)" }}
      />

      {/* Navigation Overlays (Desktop) */}
      {storyIndex > 0 && (
        <Box
          position="absolute"
          left={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1000}
          display={{ base: "none", md: "block" }}
        >
          <IconButton
            icon={<IoChevronBack size="30px" />}
            variant="ghost"
            color="white"
            onClick={() => setStoryIndex(storyIndex - 1)}
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            h="100px"
          />
        </Box>
      )}
      
      {storyIndex < stories.length - 1 && (
        <Box
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1000}
          display={{ base: "none", md: "block" }}
        >
          <IconButton
            icon={<IoChevronForward size="30px" />}
            variant="ghost"
            color="white"
            onClick={() => setStoryIndex(storyIndex + 1)}
            _hover={{ bg: "rgba(255,255,255,0.1)" }}
            h="100px"
          />
        </Box>
      )}

      {/* Bottom Action Bar */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        w="100%"
        zIndex={2000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        borderTop="1px solid rgba(255,255,255,0.1)"
      >
        {isDemo ? (
          <Button
            w="100%"
            h="60px"
            colorScheme="whatsapp"
            borderRadius={0}
            onClick={() => window.location.reload()}
          >
            Make your own wrap
          </Button>
        ) : (
          <Button
            w="100%"
            h="60px"
            colorScheme="whatsapp"
            borderRadius={0}
            onClick={onButtonClick}
            isLoading={isShared}
            loadingText="Preparing Share..."
            leftIcon={<HiShare />}
          >
            Share
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
