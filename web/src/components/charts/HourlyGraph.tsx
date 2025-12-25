import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";
import { ChatData } from "@/types/chat";
import { activeTime, activeTimeType, hourlyCountData } from "@/utils/parser";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface HourlyGraphProps {
  drawData: ChatData;
  isShared?: boolean;
}

const HourlyGraph = ({ drawData, isShared }: HourlyGraphProps) => {
  const activeTimeStr = activeTime(drawData.most_active_hour?.hour || 0);
  let activeType = activeTimeType(drawData.most_active_hour?.hour || 0);
  const hourlyData = hourlyCountData(drawData.hourly_count || []);

  if (!activeType) {
    activeType = "Daytime Chatters ☀️";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[2vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ec4899" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <MotionDiv
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ffffff" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
      >
        Peak Chat Time
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="z-10 text-center"
      >
        <p className="text-2xl font-bold text-[#e9edef]">Most active at</p>
        <p className="text-5xl font-black text-[#ec4899] leading-tight">
          {activeTimeStr}
        </p>
        <p className="text-lg text-[#8696a0] mt-1">{activeType}</p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full h-[200px] z-10"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={hourlyData}
            margin={{ top: 10, right: 20, left: 20, bottom: 40 }}
          >
            <defs>
              <linearGradient id="gradientTime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#ec4899" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="x"
              stroke="#8696a0"
              tick={{ fill: "#8696a0", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(t) => {
                if (t === 0) return "12 AM";
                if (t === 12) return "12 PM";
                return t > 12 ? `${t - 12} PM` : `${t} AM`;
              }}
            />
            <Area
              type="linear"
              dataKey="y"
              stroke="#ec4899"
              strokeWidth={4}
              fill="url(#gradientTime)"
              strokeLinecap="round"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="z-10 bg-[#202c33] p-6 rounded-lg border-l-4 border-[#ec4899] max-w-[85%]"
      >
        <p className="text-[#d1d7db] text-md text-left">
          {activeType.includes("Owl")
            ? "Late night conversations are the best conversations. 🌙"
            : activeType.includes("Bird")
            ? "Up and at 'em! You start the day with a bang. ☀️"
            : "Keeping the chat alive throughout the day! 💬"}
        </p>
      </MotionDiv>
    </div>
  );
};

export default HourlyGraph;
