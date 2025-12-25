import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;
const MotionP = motion.p;

const randomEmojis = [
  "🔥", "✨", "🎉", "❤️", "🚀", "🌈", "💎", "🦄", "🍕", "🍦",
  "🍭", "🎈", "🎁", "🏆", "🌟", "🍀", "🎵", "🌺", "🦋", "🐬",
  "🎨", "🎭", "🎪", "🎢", "🎡",
];

interface FallingEmojiProps {
  emoji: string;
  delay: number;
  duration: number;
  left: string;
}

const FallingEmoji = ({ emoji, delay, duration, left }: FallingEmojiProps) => (
  <MotionDiv
    className="absolute -top-[20%] text-4xl sm:text-5xl md:text-6xl z-10 pointer-events-none"
    style={{ left }}
    initial={{ y: 0, opacity: 0, rotate: 0 }}
    animate={{ y: "120vh", opacity: [0, 1, 1, 0], rotate: 360 }}
    transition={{ duration, delay, ease: "linear" }}
  >
    {emoji}
  </MotionDiv>
);

interface EmojiChartProps {
  drawData: ChatData;
}

const EmojiChart = ({ drawData }: EmojiChartProps) => {
  const topEmojis = drawData.top_emojis || [];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Generate random falling emojis
  const fallingEmojis = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    emoji: randomEmojis[Math.floor(Math.random() * randomEmojis.length)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.8,
    duration: 1.0 + Math.random() * 0.8,
  }));

  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#f97316" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <MotionDiv
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ffffff" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Waterfall Animation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 pointer-events-none">
        {fallingEmojis.map((item) => (
          <FallingEmoji key={item.id} {...item} />
        ))}
      </div>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col items-center justify-center gap-[4vh] z-10"
          >
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#8696a0] text-sm font-bold uppercase tracking-widest"
            >
              Top Emojis
            </MotionP>

            <div className="flex flex-col gap-[4vh] w-full">
              {/* #1 Emoji */}
              <MotionDiv
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                className="text-center will-change-transform"
                style={{ backfaceVisibility: "hidden", perspective: 1000 }}
              >
                <p className="text-9xl leading-none">{topEmojis[0]}</p>
                <p className="text-[#f97316] text-xl font-bold mt-2">
                  #1 Most Used
                </p>
              </MotionDiv>

              {/* Other Emojis */}
              <div className="flex justify-center gap-4">
                {topEmojis.slice(1, 5).map((emoji: string, index: number) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-[#202c33] p-3 rounded-xl shadow-lg"
                  >
                    <p className="text-4xl">{emoji}</p>
                  </MotionDiv>
                ))}
              </div>
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-[#202c33] p-6 rounded-lg border-l-4 border-[#f97316] max-w-[85%]"
            >
              <p className="text-[#d1d7db] text-md text-left">
                An emoji is worth a thousand words. 🎨
              </p>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmojiChart;
