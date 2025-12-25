import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const parser = require("../../script/parser");

const MotionBox = motion(Box);
const MotionText = motion(Text);

const NoTalk = ({ drawData }) => {
  const gapLength = drawData.longest_gap.length;
  const startDate = parser.format_date(drawData.longest_gap.start_date);
  const endDate = parser.format_date(drawData.longest_gap.end_date);

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

      {gapLength > 0 ? (
        <>
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
            mt={4}
          >
            Longest Silence
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            zIndex={1}
            textAlign="center"
            py={8}
          >
            <Text fontSize="2xl" fontWeight="bold" color="#e9edef">
              You didn't talk for
            </Text>
            <Text
              fontSize="6xl"
              fontWeight="900"
              color="#25d366"
              lineHeight="1.2"
            >
              {gapLength} {gapLength === 1 ? "Day" : "Days"}
            </Text>
            <Text fontSize="lg" color="#8696a0" mt={2}>
              {startDate} — {endDate}
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            zIndex={1}
            bg="#202c33"
            p="1.5rem"
            borderRadius="lg"
            borderLeft="4px solid #25d366"
            maxW="85%"
          >
            <Text color="#d1d7db" fontSize="md" align="left">
              {gapLength < 5
                ? "Even the best chats need a breather. 😌"
                : "Absence makes the heart grow fonder? 🤔"}
            </Text>
          </MotionBox>
        </>
      ) : (
        <>
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
            mt={4}
          >
            Consistency Score
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            zIndex={1}
            textAlign="center"
            py={8}
          >
            <Text fontSize="2xl" fontWeight="bold" color="#e9edef">
              Days active
            </Text>
            <Text
              fontSize="6xl"
              fontWeight="900"
              color="#25d366"
              lineHeight="1.2"
            >
              365 / 365
            </Text>
            <Text fontSize="lg" color="#8696a0" mt={2}>
              Not a single day missed!
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            zIndex={1}
            bg="#202c33"
            p="1.5rem"
            borderRadius="lg"
            borderLeft="4px solid #25d366"
            maxW="85%"
          >
            <Text color="#d1d7db" fontSize="md" align="left">
              {drawData.group 
                ? "This group chat is officially legendary. 🏆" 
                : "You two are inseparable! ❤️"}
            </Text>
          </MotionBox>
        </>
      )}
    </VStack>
  );
};

export default NoTalk;
