"use client";

import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

interface ChartProps {
  drawData: ChatData;
}

const Welcome2: React.FC<ChartProps> = ({ drawData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#25d366" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ffffff" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
      >
        Starring
      </motion.p>

      {/* Name 1 - Green Bubble */}
      <motion.div
        initial={{ x: -50, opacity: 0, rotate: -5 }}
        animate={{ x: 0, opacity: 1, rotate: -2 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="bg-[#25d366] p-6 rounded-[20px_4px_20px_20px] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] max-w-[85%] z-10"
      >
        <h2 className="text-[#111b21] text-3xl font-black text-center leading-tight break-words">
          {drawData.members[0]}
        </h2>
      </motion.div>

      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        className="text-[#8696a0] text-2xl font-bold z-10"
      >
        &
      </motion.p>

      {/* Name 2 - White Bubble */}
      <motion.div
        initial={{ x: 50, opacity: 0, rotate: 5 }}
        animate={{ x: 0, opacity: 1, rotate: 2 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
        className="bg-[#e9edef] p-6 rounded-[4px_20px_20px_20px] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] max-w-[85%] z-10"
      >
        <h2 className="text-[#111b21] text-3xl font-black text-center leading-tight break-words">
          {drawData.members[1]}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 px-4 py-1 border border-[#2a3942] rounded-full bg-[rgba(17,27,33,0.5)] z-10"
      >
        <p className="text-[#8696a0] text-xs tracking-wide">2025 EDITION</p>
      </motion.div>
    </div>
  );
};

export default Welcome2;
