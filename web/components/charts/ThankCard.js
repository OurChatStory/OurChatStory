import React from "react";
import { Box, Text, VStack, HStack, Link, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTwitter, FaCoffee } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const ThankYou = ({ drawData }) => {
  return (
    <VStack
      spacing="4vh"
      align="center"
      justify="center"
      w="100%"
      h="78vh"
      bgColor="#111b21"
      borderRadius="1rem"
      p="2rem"
      pb="10vh"
      position="relative"
      overflow="hidden"
    >
      {/* Background Blobs */}
      <MotionBox
        position="absolute"
        top="-10%"
        right="-10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(37, 211, 102, 0.04)"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        bottom="-5%"
        left="-5%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.02)"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        color="#8696a0"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
        zIndex={1}
      >
        That's a wrap!
      </MotionText>

      <VStack spacing={2} zIndex={1} textAlign="center">
        <MotionText
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          color="#e9edef"
          fontSize="4xl"
          fontWeight="bold"
        >
          OurChatStory
        </MotionText>
        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          color="#25d366"
          fontSize="lg"
        >
          Your chats tell a story.
        </MotionText>
      </VStack>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        zIndex={1}
        bg="#202c33"
        p="1.5rem"
        borderRadius="lg"
        maxW="85%"
        textAlign="center"
      >
        <Text color="#d1d7db" fontSize="md" mb={4}>
          Enjoyed your wrapped? Help us keep the servers running! ☕
        </Text>
        <Link
          href="https://www.buymeacoffee.com/whatsappwrapped"
          target="_blank"
          _hover={{ textDecoration: "none" }}
        >
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            bg="#FFDD00"
            color="black"
            leftIcon={<FaCoffee />}
            size="lg"
            width="full"
            _hover={{ bg: "#FFEA00" }}
          >
            Buy us a coffee
          </MotionButton>
        </Link>
      </MotionBox>

      <VStack spacing={4} zIndex={1} mt={4}>
        <Text color="#8696a0" fontSize="sm">
          Made with 💚 by
        </Text>
        <Stack 
          direction={{ base: "column", md: "row" }} 
          spacing={4}
          align="center"
        >
          <Link href="https://twitter.com/anshulagx" target="_blank">
            <MotionButton
              size="sm"
              leftIcon={<FaTwitter />}
              colorScheme="twitter"
              variant="outline"
              whileHover={{ scale: 1.1 }}
            >
              @anshulagx
            </MotionButton>
          </Link>
          <Link href="https://twitter.com/iamyajat" target="_blank">
            <MotionButton
              size="sm"
              leftIcon={<FaTwitter />}
              colorScheme="twitter"
              variant="outline"
              whileHover={{ scale: 1.1 }}
            >
              @iamyajat
            </MotionButton>
          </Link>
        </Stack>
      </VStack>
    </VStack>
  );
};

export default ThankYou;
