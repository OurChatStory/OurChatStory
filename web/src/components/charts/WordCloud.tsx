import React from "react";
import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface WordCloudProps {
  drawData: ChatData;
}

const WordCloud = ({ drawData }: WordCloudProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#6366f1" }}
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
        Word Cloud
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 flex items-center justify-center w-full p-0"
      >
        <div className="bg-[#111b21] rounded-2xl p-4">
          <img
            src={`data:image/png;base64, ${drawData.wordcloud}`}
            alt="Word Cloud"
            className="max-h-full object-contain"
          />
        </div>
      </MotionDiv>
    </div>
  );
};

export default WordCloud;
