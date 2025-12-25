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

  // WhatsApp-themed color palette
  const colorScale = [
    "#25d366", // Green
    "#34b7f1", // Blue
    "#00a884", // Teal
    "#53bdeb", // Light Blue
    "#128c7e", // Dark Teal
    "#aebac1", // Grey
  ];

  return (
    <VStack
      spacing={2}
      align="center"
      justify="center"
      w="100%"
      h="78vh"
      bgColor="#111b21"
      borderRadius="1rem"
      p={6}
      position="relative"
      overflow="hidden"
    >
      {/* Background Blobs */}
      <MotionBox
        position="absolute"
        top="-10%"
        left="-10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(37, 211, 102, 0.05)"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        zIndex={0}
      />
      <MotionBox
        position="absolute"
        bottom="-5%"
        right="-5%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="rgba(52, 183, 241, 0.05)"
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
          color="#25d366"
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
        mt={-2}
        mb={2}
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
        p="1rem"
        borderRadius="lg"
        borderLeft="4px solid #25d366"
        maxW="90%"
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
