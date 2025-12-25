import { Text, VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Card1 = ({ drawData }) => {
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
      {/* Background Elements */}
      <MotionBox
        position="absolute"
        top="-10%"
        right="-10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(59, 130, 246, 0.04)"
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
        bg="rgba(59, 130, 246, 0.02)"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        zIndex={0}
      />

      <MotionText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        color="#8696a0"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
        zIndex={1}
      >
        Total Messages
      </MotionText>

      <MotionBox
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
        zIndex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text
          fontSize="6xl"
          color="#3b82f6" // Blue
          fontWeight="900"
          lineHeight="1"
          letterSpacing="-0.02em"
        >
          <CountUp
            end={drawData.total_no_of_chats}
            duration={2.5}
            separator=","
          />
        </Text>
        <Text color="#e9edef" fontSize="xl" fontWeight="medium" mt={2}>
          messages sent
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }} // Wait for countup
        bg="#202c33" // Darker card background
        p="1.5rem"
        borderRadius="lg"
        borderLeft="4px solid #3b82f6"
        maxW="85%"
        zIndex={1}
      >
        <Text color="#d1d7db" fontSize="md" align="left" lineHeight="1.6">
          That puts you in the top{" "}
          <Text as="span" color="#3b82f6" fontWeight="bold" fontSize="lg">
            {parseFloat(drawData.top_percent * 100).toFixed(drawData.top_percent < 0.001 ? 4 : 2)}%
          </Text>
          {" "}of texters worldwide! 🌍
        </Text>
      </MotionBox>

    </VStack>
  );
};

export default Card1;
