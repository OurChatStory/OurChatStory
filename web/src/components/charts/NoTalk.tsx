import React from "react";
import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";
import { formatDate } from "@/utils/parser";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface NoTalkProps {
  drawData: ChatData;
}

const NoTalk = ({ drawData }: NoTalkProps) => {
  const gapLength = drawData.longest_gap?.length || 0;
  const startDate = formatDate(drawData.longest_gap?.start_date || "");
  const endDate = formatDate(drawData.longest_gap?.end_date || "");

  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#06b6d4" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <MotionDiv
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ffffff" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {gapLength > 0 ? (
        <>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
          >
            Longest Silence
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="z-10 text-center py-8"
          >
            <p className="text-2xl font-bold text-[#e9edef]">
              You didn&apos;t talk for
            </p>
            <p className="text-6xl font-black text-[#06b6d4] leading-tight">
              {gapLength} {gapLength === 1 ? "Day" : "Days"}
            </p>
            <p className="text-lg text-[#8696a0] mt-2">
              {startDate} — {endDate}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-10 bg-[#202c33] p-6 rounded-lg border-l-4 border-[#06b6d4] max-w-[85%]"
          >
            <p className="text-[#d1d7db] text-md text-left">
              {gapLength < 5
                ? "Even the best chats need a breather. 😌"
                : "Absence makes the heart grow fonder? 🤔"}
            </p>
          </MotionDiv>
        </>
      ) : (
        <>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
          >
            Consistency Score
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="z-10 text-center py-8"
          >
            <p className="text-2xl font-bold text-[#e9edef]">Days active</p>
            <p className="text-6xl font-black text-[#06b6d4] leading-tight">
              365 / 365
            </p>
            <p className="text-lg text-[#8696a0] mt-2">
              Not a single day missed!
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="z-10 bg-[#202c33] p-6 rounded-lg border-l-4 border-[#06b6d4] max-w-[85%]"
          >
            <p className="text-[#d1d7db] text-md text-left">
              {drawData.group
                ? "This group chat is officially legendary. 🏆"
                : "You two are inseparable! ❤️"}
            </p>
          </MotionDiv>
        </>
      )}
    </div>
  );
};

export default NoTalk;
