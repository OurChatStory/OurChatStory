import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Icon,
  Center,
  Link,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaChartPie, FaMagic, FaTwitter, FaInstagram } from "react-icons/fa";

// Import Chart Components for the Demo Deck
import Welcome from "./charts/Welcome";
import TotalChat from "./charts/TotalChat";
import Emoji from "./charts/emoji";
import MostActive from "./charts/MostActive";
import CountPie from "./charts/CountPie";

// Import Sample Data
const sample_data = require("../data/sample-response");

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const DemoDeck = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { component: Welcome, id: "welcome" },
    { component: TotalChat, id: "total" },
    { component: MostActive, id: "active" },
    { component: Emoji, id: "emoji" },
    { component: CountPie, id: "pie" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const CurrentSlide = slides[index].component;

  return (
    <Box
      w="370px"
      h="620px"
      bg="#111b21"
      borderRadius="2rem"
      border="8px solid #2a3942"
      boxShadow="0 0 50px rgba(37, 211, 102, 0.2)"
      position="relative"
      overflow="hidden"
    >
      {/* Status Bar Mock */}
      <HStack
        position="absolute"
        top={4}
        left={0}
        w="full"
        px={6}
        justify="space-between"
        zIndex={20}
      >
        <Text fontSize="xs" color="white" fontWeight="bold">
          9:41
        </Text>
        <HStack spacing={1}>
          <Box w={4} h={4} bg="white" borderRadius="full" opacity={0.8} />
          <Box w={4} h={4} bg="white" borderRadius="full" opacity={0.8} />
        </HStack>
      </HStack>

      {/* Slide Container */}
      <Box
        h="100%"
        w="100%"
        pt={10}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={slides[index].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            h="100%"
            sx={{
              "& > div": {
                height: "100% !important",
                width: "100% !important",
                borderRadius: "0 !important",
                boxShadow: "none !important",
              }
            }}
          >
            <CurrentSlide drawData={sample_data.sample} />
          </MotionBox>
        </AnimatePresence>
      </Box>

      {/* Bottom Indicator */}
      <Center position="absolute" bottom={2} w="full">
        <Box w="40%" h="5px" bg="white" borderRadius="full" opacity={0.5} />
      </Center>
    </Box>
  );
};

const Intro = ({ setShowUploader }) => {
  return (
    <Box w="full" overflow="hidden" minH="100vh" display="flex" flexDirection="column">
      <Box flex="1" display="flex" alignItems="center" py={{ base: 16, lg: 0 }}>
        <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 10 }} alignItems="center">
          {/* Left Content */}
          <VStack align={{ base: "center", lg: "start" }} spacing={{ base: 6, lg: 8 }} textAlign={{ base: "center", lg: "left" }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HStack spacing={3}>
                <Image
                  src="static/compress/logo2.webp"
                  w="50px"
                  h="50px"
                  alt="Logo"
                />
              </HStack>
            </MotionBox>

            <MotionHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              as="h1"
              size={{ base: "3xl", md: "4xl" }} // Bigger, bolder
              lineHeight="1"
              color="#e9edef"
              fontWeight="900"
              letterSpacing="-0.04em"
            >
              YOUR <br />
              <Text as="span" color="#25d366">
                WHATSAPP
              </Text>{" "}
              <br />
              WRAPPED.
            </MotionHeading>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              fontSize="xl"
              color="#8696a0"
              fontWeight="medium"
              maxW="lg"
            >
              Rediscover your conversations. Visualize your chat history with beautiful insights, statistics, and a personalized story.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                size="lg"
                bg="#25d366"
                color="#111b21"
                px={{ base: 8, md: 10 }}
                py={{ base: 6, md: 8 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                borderRadius="full"
                onClick={() => {
                  setShowUploader(true);
                  document.body.style.overflow = "hidden";
                }}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)",
                }}
                _active={{ transform: "scale(0.95)" }}
              >
                Make your wrap
              </Button>
            </MotionBox>
          </VStack>

          {/* Right Visual - Demo Deck */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            display="flex"
            justifyContent="center"
            position="relative"
          >
            {/* Glow Effect behind the phone */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: "280px", md: "330px" }}
              h={{ base: "500px", md: "620px" }}
              bgGradient="radial(rgba(37, 211, 102, 0.2), transparent 70%)"
              zIndex={0}
            />
            <Box zIndex={1}>
              <DemoDeck />
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
      </Box>

      {/* Footer */}
      <Container maxW="container.xl" py={{ base: 6, md: 8 }}>
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center" spacing={{ base: 6, md: 4 }}>
          <VStack align={{ base: "center", md: "start" }} spacing={1}>
            <Text fontSize="xs" color="#8696a0">
              100% Private • No data stored
            </Text>
            <HStack spacing={2} fontSize="xs" color="#8696a0">
              <Link href="/privacy" _hover={{ color: "#25d366" }}>Privacy</Link>
              <Text>•</Text>
              <Link href="/blogs" _hover={{ color: "#25d366" }}>Blogs</Link>
              <Text>•</Text>
              <Link href="https://github.com/OurChatStory/OurChatStory" isExternal _hover={{ color: "#25d366" }}>Code</Link>
            </HStack>
          </VStack>

          <HStack spacing={4}>
            <HStack spacing={2}>
              <IconButton
                as={Link}
                href="https://twitter.com/ourchatstory"
                isExternal
                aria-label="Twitter"
                icon={<FaTwitter size="1.2em" />}
                variant="ghost"
                color="#8696a0"
                _hover={{ color: "#1DA1F2", bg: "rgba(29, 161, 242, 0.1)" }}
                borderRadius="full"
              />
              <IconButton
                as={Link}
                href="https://www.instagram.com/ourchatstory.co/"
                isExternal
                aria-label="Instagram"
                icon={<FaInstagram size="1.2em" />}
                variant="ghost"
                color="#8696a0"
                _hover={{ color: "#E1306C", bg: "rgba(225, 48, 108, 0.1)" }}
                borderRadius="full"
              />
            </HStack>

            <Link
              href="https://www.buymeacoffee.com/whatsappwrapped"
              isExternal
              _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                h="40px"
              />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
