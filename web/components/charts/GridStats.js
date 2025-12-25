import {
  Text,
  Grid,
  GridItem,
  VStack,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

const GridStats = ({ drawData }) => {
  const stats = [
    {
      label: "Days Active",
      value: drawData.total_days_talked,
      unit: "days",
      subtext: "kept the streak alive",
      color: "#25d366",
    },
    {
      label: "Most Active Day",
      value: drawData.most_active_day.day.substring(0, 3),
      unit: "",
      subtext: "was the vibe",
      color: "#34b7f1", // WhatsApp Blue
    },
    {
      label: "Longest Session",
      value: drawData.longest_session.total_time > (120 * 60)
        ? parseInt(drawData.longest_session.total_time / (60 * 60))
        : parseInt(drawData.longest_session.total_time / 60),
      unit: drawData.longest_session.total_time > (120 * 60) ? "hrs" : "mins",
      subtext: "non-stop chatting",
      color: "#a855f7", // Purple accent
    },
    {
      label: "Avg Reply Time",
      value: Math.round(drawData.longest_session.avg_reply_time * 10) / 10,
      unit: "sec",
      subtext: "during peak chats",
      color: "#f78901", // Orange accent
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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

      <Text
        color="#8696a0"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
        zIndex={1}
        mb={2}
      >
        Chat Highlights
      </Text>

      <Grid
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        w="100%"
        zIndex={1}
      >
        {stats.map((stat, index) => (
          <MotionGridItem
            key={index}
            variants={item}
            colSpan={1}
            bg="#202c33"
            p="1.5rem"
            borderRadius="xl"
            boxShadow="0 4px 6px rgba(0,0,0,0.1)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minH="160px"
            borderTop={`4px solid ${stat.color}`}
          >
            <Text color="#8696a0" fontSize="xs" fontWeight="medium" mb={2} textTransform="uppercase" textAlign="center">
              {stat.label}
            </Text>
            <Box display="flex" alignItems="baseline">
              <Text
                color="#e9edef"
                fontSize="4xl"
                fontWeight="900"
                lineHeight="1"
              >
                {stat.value}
              </Text>
              {stat.unit && (
                <Text color="#8696a0" fontSize="sm" fontWeight="bold" ml={1}>
                  {stat.unit}
                </Text>
              )}
            </Box>
            <Text color="#8696a0" fontSize="xs" mt={2} textAlign="center">
              {stat.subtext}
            </Text>
          </MotionGridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default GridStats;
