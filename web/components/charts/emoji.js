import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const randomEmojis = ["🔥", "✨", "🎉", "❤️", "🚀", "🌈", "💎", "🦄", "🍕", "🍦", "🍭", "🎈", "🎁", "🏆", "🌟", "🍀", "🎵", "🌺", "🦋", "🐬", "🎨", "🎭", "🎪", "🎢", "🎡"];

const FallingEmoji = ({ emoji, delay, duration, left }) => (
  <MotionBox
    position="absolute"
    top="-20%"
    left={left}
    initial={{ y: 0, opacity: 0, rotate: 0 }}
    animate={{ y: "120vh", opacity: [0, 1, 1, 0], rotate: 360 }}
    transition={{ duration: duration, delay: delay, ease: "linear" }}
    fontSize={["4xl", "5xl", "6xl"]}
    zIndex={10}
    pointerEvents="none"
  >
    {emoji}
  </MotionBox>
);

const Card5 = ({ drawData }) => {
  const topEmojis = drawData.top_emojis;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Generate random falling emojis
  const fallingEmojis = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    emoji: randomEmojis[Math.floor(Math.random() * randomEmojis.length)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.8,
    duration: 1.0 + Math.random() * 0.8,
  }));

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
        bg="rgba(249, 115, 22, 0.04)"
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
        bg="rgba(249, 115, 22, 0.02)"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />

      {/* Waterfall Animation */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} zIndex={20} pointerEvents="none">
        {fallingEmojis.map((item) => (
            <FallingEmoji key={item.id} {...item} />
        ))}
      </Box>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                w="100%"
                h="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                zIndex={1}
            >
                <MotionText
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    color="#8696a0"
                    fontSize="sm"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    mb={6}
                >
                    Top Emojis
                </MotionText>

                <VStack spacing={8} w="100%">
                    {/* #1 Emoji */}
                    <MotionBox
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    textAlign="center"
                    >
                    <Text fontSize="9xl" lineHeight="1">
                        {topEmojis[0]}
                    </Text>
                    <Text color="#f97316" fontSize="xl" fontWeight="bold" mt={2}>
                        #1 Most Used
                    </Text>
                    </MotionBox>

                    {/* Other Emojis */}
                    <HStack spacing={4} justify="center">
                    {topEmojis.slice(1, 5).map((emoji, index) => (
                        <MotionBox
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        bg="#202c33"
                        p={3}
                        borderRadius="xl"
                        boxShadow="lg"
                        >
                        <Text fontSize="4xl">{emoji}</Text>
                        </MotionBox>
                    ))}
                    </HStack>
                </VStack>

                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    bg="#202c33"
                    p="1.5rem"
                    borderRadius="lg"
                    borderLeft="4px solid #f97316"
                    maxW="85%"
                    mt={8}
                >
                    <Text color="#d1d7db" fontSize="md" align="left">
                    An emoji is worth a thousand words. 🎨
                    </Text>
                </MotionBox>
            </MotionBox>
        )}
      </AnimatePresence>
    </VStack>
  );
};

export default Card5;
