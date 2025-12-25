import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryArea } from "victory";
import { motion } from "framer-motion";

const parser = require("../../script/parser");

const MotionBox = motion(Box);
const MotionText = motion(Text);

const MonthlyGraph = ({ drawData, isShared }) => {
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
      spacing={2}
      align="center"
      justify="center"
      w="100%"
      h="78vh"
      bgColor="#111b21"
      borderRadius="1rem"
      p="1rem"
      pb="10vh"
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
        mt={4}
      >
        Year in Review
      </MotionText>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        zIndex={1}
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#e9edef">
          You peaked in
        </Text>
        <Text
          fontSize="5xl"
          fontWeight="900"
          color="#25d366"
          lineHeight="1.2"
        >
          {parser.months[drawData.most_active_month.month]}
        </Text>
        <Text fontSize="lg" color="#8696a0" mt={1}>
          {drawData.most_active_month.count} messages sent
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        w="100%"
        h="220px"
        zIndex={1}
        mt={-2}
        mb={2}
      >
        <VictoryChart
          theme={chartTheme}
          width={400}
          height={220}
          padding={{ top: 10, bottom: 40, left: 20, right: 20 }}
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
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
            fixLabelOverlap={true}
          />
          <VictoryArea
            interpolation="linear"
            style={{
              data: {
                fill: "url(#gradient1)",
                stroke: "transparent",
              },
            }}
            data={parser.monthly_count_data(drawData.monthly_chats_count)}
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
            data={parser.monthly_count_data(drawData.monthly_chats_count)}
          />
        </VictoryChart>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        zIndex={1}
        bg="#202c33"
        p="1rem"
        borderRadius="lg"
        borderLeft="4px solid #25d366"
        maxW="90%"
      >
        <Text color="#d1d7db" fontSize="md" align="left">
          {drawData.month_correlation > 0.5
            ? "Your connection grew stronger every month! 📈"
            : drawData.month_correlation < -0.5
            ? "Things cooled off as the year went on. ❄️"
            : "Consistency is your middle name. 🤝"}
        </Text>
      </MotionBox>
    </VStack>
  );
};

export default MonthlyGraph;
