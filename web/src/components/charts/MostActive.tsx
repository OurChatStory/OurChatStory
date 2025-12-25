import React from "react";
import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface MostActiveProps {
  drawData: ChatData;
}

const MostActive = ({ drawData }: MostActiveProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#f59e0b" }}
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
        transition={{ delay: 0.2 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
      >
        Conversation Starter
      </MotionP>

      <MotionDiv
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
        className="z-10 flex flex-col items-center text-center"
      >
        <p className="text-5xl text-[#f59e0b] font-black leading-tight tracking-tight mb-2">
          {drawData.who_texts_first}
        </p>
        <p className="text-[#e9edef] text-xl font-medium">
          usually texts first
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bg-[#202c33] p-6 rounded-lg border-l-4 border-[#f59e0b] max-w-[85%] z-10"
      >
        <p className="text-[#d1d7db] text-md text-left">
          {drawData.who_texts_first} is the real MVP keeping the chat alive. ⚡
        </p>
      </MotionDiv>
    </div>
  );
};

export default MostActive;
