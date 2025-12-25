import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const CountPie = ({ drawData }) => {
  const mostActive = drawData.most_active_member.member;
  const pieData = drawData.no_of_messages_per_member
    .slice(0, 6)
    .map(({ member, count }) => ({
      x: member.split(" ")[0],
      y: count,
      label: `${member.split(" ")[0]}\n${count}`
    }));

  // Red-themed color palette
  const colorScale = [
    "#ef4444", // Red
    "#fee2e2", // Very Light Red
    "#f87171", // Light Red
    "#b91c1c", // Darker Red
    "#fca5a5", // Lighter Red
    "#dc2626", // Dark Red
  ];

  return (
    <VStack
      spacing="1vh"
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
        bg="rgba(239, 68, 68, 0.04)"
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
        bg="rgba(239, 68, 68, 0.02)"
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
        Chat Participation
      </MotionText>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        zIndex={1}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#e9edef">
          Who texts the most?
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="900"
          color="#ef4444"
          lineHeight="1.2"
          mt={2}
        >
          {mostActive}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        zIndex={1}
        w="100%"
        h="250px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="-5vh"
        mb="-4vh"
      >
        <VictoryPie
          height={280}
          innerRadius={70}
          padAngle={2}
          cornerRadius={4}
          data={pieData}
          colorScale={colorScale}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "#111b21",
              strokeWidth: 2,
            },
            labels: {
              fill: "#e9edef",
              fontSize: 12,
              fontWeight: "bold",
              fontFamily: "Helvetica, Arial, sans-serif",
            },
          }}
          labelRadius={({ innerRadius }) => innerRadius + 40}
        />
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        zIndex={1}
        bg="#202c33"
        p="1.5rem"
        borderRadius="lg"
        borderLeft="4px solid #ef4444"
        maxW="85%"
      >
        <Text color="#d1d7db" fontSize="md" align="left">
          {drawData.group 
            ? `${mostActive} is carrying this group chat! 🏋️` 
            : "It's a close call... or is it? 👀"}
        </Text>
      </MotionBox>
    </VStack>
  );
};

export default CountPie;
