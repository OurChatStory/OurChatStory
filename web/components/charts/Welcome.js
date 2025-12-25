import { Text, VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Welcome = ({ drawData }) => {
  return (
    <VStack
      spacing="4vh"
      align="center"
      justify="center"
      w="100%"
      h="78vh"
      bgColor="#111b21" // WhatsApp Dark Background
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
      
      {/* Main Title Card - "Sticker" Style */}
      <MotionBox
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        zIndex={1}
        bg="#25d366" // WhatsApp Green
        p="2.5rem"
        // Slightly more "torn paper" or "rough sticker" look
        borderRadius="2px 20px 2px 25px" 
        boxShadow="6px 6px 0px rgba(0,0,0,0.2)" 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="2px solid #128C7E"
      >
        <Text 
            color="#075E54" 
            fontSize="xs" 
            fontWeight="900" 
            align="center" 
            mb={2} 
            letterSpacing="0.2em" 
            textTransform="uppercase"
            borderBottom="2px solid #075E54"
            pb={1}
        >
          Insights Unlocked
        </Text>
        <Text
            color="#111b21"
            fontSize="5xl"
            fontWeight="900"
            align="center"
            lineHeight="0.9"
            letterSpacing="-0.02em"
        >
            YOUR CHAT
        </Text>
        <Text
            color="#111b21"
            fontSize="5xl"
            fontWeight="900"
            align="center"
            lineHeight="0.9"
            letterSpacing="-0.02em"
        >
            WRAPPED
        </Text>
      </MotionBox>

      {/* Subtitle / Intro Text */}
      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        color="#e9edef" // WhatsApp Light Text
        fontSize="xl"
        align="center"
        fontWeight="normal"
        pb={12}
        pt={8}
        zIndex={1}
        lineHeight="1.6"
        maxW="85%"
      >
        The story of <Text as="span" color="#25d366" fontWeight="bold">{drawData.group ? "this group" : "your bond"}</Text>, told through every text and emoji.
      </MotionText>
      
    </VStack>
  );
};

export default Welcome;
