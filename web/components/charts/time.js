import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryArea } from "victory";
import { motion } from "framer-motion";

const parser = require("../../script/parser");

const MotionBox = motion(Box);
const MotionText = motion(Text);

const HourlyGraph = ({ drawData, isShared }) => {
  const activeTime = parser.active_time(drawData.most_active_hour.hour);
  let activeType = parser.active_time_type(drawData.most_active_hour.hour);
  const hourlyData = parser.hourly_count_data(drawData.hourly_count);

  if (!activeType) {
    activeType = "Daytime Chatters ☀️";
  }

  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          fill: "#8696a0",
          fontSize: 10,
          fontFamily: "Helvetica, Arial, sans-serif",
        },
        grid: {
          fill: "none",
          stroke: "none",
        },
        axis: {
          stroke: "transparent",
        },
      },
    },
  };

  return (
    <VStack
      spacing="2vh"
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
        Peak Chat Time
      </MotionText>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        zIndex={1}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#e9edef">
          Most active at
        </Text>
        <Text
          fontSize="5xl"
          fontWeight="900"
          color="#25d366"
          lineHeight="1.2"
        >
          {activeTime}
        </Text>
        <Text fontSize="lg" color="#8696a0" mt={1}>
          {activeType}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        w="100%"
        h="220px"
        zIndex={1}
        mt="-3vh"
        mb="-2vh"
      >
        <VictoryChart
          theme={chartTheme}
          width={400}
          height={220}
          padding={{ top: 10, bottom: 40, left: 20, right: 20 }}
        >
          <defs>
            <linearGradient id="gradientTime" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#25d366" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#25d366" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <VictoryAxis
            style={{
              tickLabels: {
                fill: "#8696a0",
                fontSize: 10,
                fontFamily: "Helvetica, Arial, sans-serif",
              },
              axis: { stroke: "transparent" },
            }}
            tickCount={6}
            tickFormat={(t) => {
                // t is integer hour 0-23
                if (t === 0) return "12 AM";
                if (t === 12) return "12 PM";
                return t > 12 ? `${t - 12} PM` : `${t} AM`;
            }}
          />
          <VictoryArea
            interpolation="linear"
            style={{
              data: {
                fill: "url(#gradientTime)",
                stroke: "transparent",
              },
            }}
            data={hourlyData}
          />
          <VictoryLine
            interpolation="linear"
            style={{
              data: {
                stroke: "#25d366",
                strokeWidth: 4,
                strokeLinecap: "round",
              },
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
            data={hourlyData}
          />
        </VictoryChart>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        zIndex={1}
        bg="#202c33"
        p="1.5rem"
        borderRadius="lg"
        borderLeft="4px solid #25d366"
        maxW="85%"
      >
        <Text color="#d1d7db" fontSize="md" align="left">
          {activeType.includes("Owl") 
            ? "Late night conversations are the best conversations. 🌙" 
            : activeType.includes("Bird")
            ? "Up and at 'em! You start the day with a bang. ☀️"
            : "Keeping the chat alive throughout the day! 💬"}
        </Text>
      </MotionBox>
    </VStack>
  );
};

export default HourlyGraph;
