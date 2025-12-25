import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, AreaChart, Area, ResponsiveContainer } from "recharts";
import { ChatData } from "@/types/chat";
import { months, monthlyCountData } from "@/utils/parser";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface MonthlyGraphProps {
  drawData: ChatData;
  isShared?: boolean;
}

const MonthlyGraph = ({ drawData, isShared }: MonthlyGraphProps) => {
  const chartData = monthlyCountData(drawData.monthly_chats_count);

  return (
    <div className="flex flex-col items-center justify-center gap-[2vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#8b5cf6" }}
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
        Year in Review
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="z-10 text-center"
      >
        <p className="text-2xl font-bold text-[#e9edef]">You peaked in</p>
        <p className="text-5xl font-black text-[#8b5cf6] leading-tight">
          {months[drawData.most_active_month?.month]}
        </p>
        <p className="text-lg text-[#8696a0] mt-1">
          {drawData.most_active_month?.count} messages sent
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full h-[200px] z-10"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 20, bottom: 40 }}
          >
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="x"
              stroke="#8696a0"
              tick={{ fill: "#8696a0", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <Area
              type="linear"
              dataKey="y"
              stroke="#8b5cf6"
              strokeWidth={4}
              fill="url(#gradient1)"
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
        className="z-10 bg-[#202c33] p-6 rounded-lg border-l-4 border-[#8b5cf6] max-w-[85%]"
      >
        <p className="text-[#d1d7db] text-md text-left">
          {drawData.month_correlation > 0.5
            ? "Your connection grew stronger every month! 📈"
            : drawData.month_correlation < -0.5
            ? "Things cooled off as the year went on. ❄️"
            : "Consistency is your middle name. 🤝"}
        </p>
      </MotionDiv>
    </div>
  );
};

export default MonthlyGraph;
