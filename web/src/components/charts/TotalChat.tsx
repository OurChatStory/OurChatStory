"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface ChartProps {
  drawData: any;
}

const TotalChat: React.FC<ChartProps> = ({ drawData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#3b82f6" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#3b82f6" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-[0.2em] z-10"
      >
        Total Messages
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
        className="z-10 flex flex-col items-center"
      >
        <p className="text-6xl text-[#3b82f6] font-black leading-none tracking-tight">
          <CountUp end={drawData.total_no_of_chats || 0} duration={2.5} separator="," />
        </p>
        <p className="text-[#e9edef] text-xl font-medium mt-2">messages sent</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-[#202c33] p-6 rounded-lg border-l-4 border-[#3b82f6] max-w-[85%] z-10"
      >
        <p className="text-[#d1d7db] text-md text-left leading-relaxed">
          That puts you in the top{" "}
          <span className="text-[#3b82f6] font-bold text-lg">
            {parseFloat(String(drawData.top_percent * 100)).toFixed(drawData.top_percent < 0.001 ? 4 : 2)}%
          </span>
          {" "}of texters worldwide! 🌍
        </p>
      </motion.div>
    </div>
  );
};

export default TotalChat;
