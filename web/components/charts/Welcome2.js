import { Text, VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Welcome2 = ({ drawData }) => {
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

      <MotionText
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        color="#8696a0"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
        zIndex={1}
      >
        Starring
      </MotionText>

      {/* Name 1 - Green Bubble */}
      <MotionBox
        initial={{ x: -50, opacity: 0, rotate: -5 }}
        animate={{ x: 0, opacity: 1, rotate: -2 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        bg="#25d366"
        p="1.5rem"
        borderRadius="20px 4px 20px 20px" // Chat bubble shape
        boxShadow="4px 4px 0px rgba(0,0,0,0.2)"
        maxW="85%"
        zIndex={1}
      >
        <Text 
            color="#111b21" 
            fontSize="3xl" 
            fontWeight="900" 
            align="center" 
            lineHeight="1.1"
            wordBreak="break-word"
        >
          {drawData.members[0]}
        </Text>
      </MotionBox>

      <MotionText
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        color="#8696a0" // Muted color for the ampersand
        fontSize="2xl"
        fontWeight="bold"
        zIndex={1}
      >
        &
      </MotionText>

      {/* Name 2 - White Bubble */}
      <MotionBox
        initial={{ x: 50, opacity: 0, rotate: 5 }}
        animate={{ x: 0, opacity: 1, rotate: 2 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
        bg="#e9edef"
        p="1.5rem"
        borderRadius="4px 20px 20px 20px" // Chat bubble shape mirrored
        boxShadow="4px 4px 0px rgba(0,0,0,0.2)"
        maxW="85%"
        zIndex={1}
      >
        <Text 
            color="#111b21" 
            fontSize="3xl" 
            fontWeight="900" 
            align="center" 
            lineHeight="1.1"
            wordBreak="break-word"
        >
          {drawData.members[1]}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        mt={6}
        px={4}
        py={1}
        border="1px solid #2a3942"
        borderRadius="full"
        bg="rgba(17, 27, 33, 0.5)"
        zIndex={1}
      >
        <Text color="#8696a0" fontSize="xs" letterSpacing="wide">
          2025 EDITION
        </Text>
      </MotionBox>

    </VStack>
  );
};

export default Welcome2;
