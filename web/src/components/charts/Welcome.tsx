"use client";

import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

interface ChartProps {
  drawData: ChatData;
}

const Welcome: React.FC<ChartProps> = ({ drawData }) => {
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

      {/* Main Title Card - "Sticker" Style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="z-10 bg-[#25d366] p-10 rounded-[2px_20px_2px_25px] shadow-[6px_6px_0px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center border-2 border-[#128C7E]"
      >
        <p className="text-[#075E54] text-xs font-black text-center mb-2 tracking-[0.2em] uppercase border-b-2 border-[#075E54] pb-1">
          Insights Unlocked
        </p>
        <h2 className="text-[#111b21] text-5xl font-black text-center leading-[0.9] tracking-tight">
          YOUR CHAT
        </h2>
        <h2 className="text-[#111b21] text-5xl font-black text-center leading-[0.9] tracking-tight">
          WRAPPED
        </h2>
      </motion.div>

      {/* Subtitle / Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-[#e9edef] text-xl text-center font-normal pb-12 pt-8 z-10 leading-relaxed max-w-[85%]"
      >
        The story of <span className="text-[#25d366] font-bold">{drawData.group ? "this group" : "your bond"}</span>, told through every text and emoji.
      </motion.p>
    </div>
  );
};

export default Welcome;
