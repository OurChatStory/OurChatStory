"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatData } from "@/types/chat";

interface ChartProps {
  drawData: ChatData;
  forPDF?: boolean;
}

const ALL_TYPES = [
  "Romantic / Partnership",
  "Best Friends",
  "Close Friends",
  "Work / School Friends",
  "Casual Friends",
  "Acquaintances",
  "Friends"
];

const getTheme = (type: string = "") => {
  const normalizedType = type.toLowerCase();
  if (normalizedType.includes("romantic") || normalizedType.includes("partnership")) {
    return { 
      color: "#ff4b4b", 
      emoji: "❤️", 
      title: "Romantic Partners",
      description: "Love is in the air! You two are inseparable." 
    };
  }
  if (normalizedType.includes("best")) {
    return { 
      color: "#ffd700", 
      emoji: "🌟", 
      title: "Best Friends",
      description: "A bond like no other. Truly golden!" 
    };
  }
  if (normalizedType.includes("close")) {
    return { 
      color: "#25d366", 
      emoji: "🤞", 
      title: "Close Friends",
      description: "Through thick and thin, you're always there." 
    };
  }
  if (normalizedType.includes("work") || normalizedType.includes("school")) {
    return { 
      color: "#34b7f1", 
      emoji: "💼", 
      title: "Work / School Friends",
      description: "Grinding together, succeeding together." 
    };
  }
  if (normalizedType.includes("casual")) {
    return { 
      color: "#ff9900", 
      emoji: "👋", 
      title: "Casual Friends",
      description: "Good vibes and good times whenever you chat." 
    };
  }
  if (normalizedType.includes("acquaintances")) {
    return { 
      color: "#8696a0", 
      emoji: "👋", 
      title: "Acquaintances",
      description: "Just the beginning of something new?" 
    };
  }
  // Default to Friends
  return { 
    color: "#a855f7", 
    emoji: "🤝", 
    title: "Friends",
    description: "A solid friendship that keeps on growing." 
  };
};

const FriendshipStats: React.FC<ChartProps> = ({ drawData, forPDF = false }) => {
  const { friendship_score = 0, friendship_type = "Friends" } = drawData;
  
  const [displayScore, setDisplayScore] = useState(0);
  const [isRevealed, setIsRevealed] = useState(forPDF);

  const finalTheme = useMemo(() => getTheme(friendship_type), [friendship_type]);

  useEffect(() => {
    if (forPDF) {
      setDisplayScore(friendship_score);
      return;
    }

    // Smooth count up animation
    const duration = 2000;
    const startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Ease out quart for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setDisplayScore(Math.floor(friendship_score * ease));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsRevealed(true);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [friendship_score, forPDF]);

  const currentTheme = isRevealed ? finalTheme : {
    color: "#8696a0",
    emoji: "⚡",
    title: "Analyzing...",
    description: "Calculating your unique friendship pattern..."
  };

  // Circular progress calculation
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  return (
    <div 
      className={`flex flex-col items-center justify-center w-full bg-[#111b21] rounded-2xl p-8 relative ${
        forPDF 
          ? "gap-[15px] h-full pb-[60px]" 
          : "gap-[2vh] h-[78vh] pb-[10vh] overflow-hidden"
      }`}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        animate={{ 
          backgroundColor: currentTheme.color,
          scale: [1, 1.1, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{
          backgroundColor: { duration: 1 },
          scale: { duration: 10, repeat: Infinity, ease: "linear" },
          opacity: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      />
      <motion.div
        className="absolute -bottom-[5%] -left-[5%] w-[200px] h-[200px] rounded-full opacity-[0.02]"
        animate={{ 
          backgroundColor: isRevealed ? "#ffffff" : currentTheme.color,
          y: [0, -20, 0] 
        }}
        transition={{
          backgroundColor: { duration: 1 },
          y: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Header */}
      <motion.div
        initial={forPDF ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center z-10"
      >
        <h3 className="text-[#8696a0] text-sm font-bold uppercase tracking-widest mb-2">
          Friendship Analysis
        </h3>
      </motion.div>

      {/* Score Circle */}
      <div className="relative w-[200px] h-[200px] flex items-center justify-center z-10 my-4">
        {/* SVG Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#2a3942"
            strokeWidth="15"
            fill="transparent"
          />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            stroke={currentTheme.color}
            strokeWidth="15"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            animate={{ stroke: currentTheme.color }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        
        {/* Score Text */}
        <div className="absolute flex flex-col items-center justify-center">
          <motion.span 
            className="text-5xl font-black text-white"
          >
            {displayScore}
          </motion.span>
          <span className="text-[#8696a0] text-xs font-bold uppercase mt-1">Score</span>
        </div>
      </div>

      {/* Type Card */}
      <motion.div
        className="w-full max-w-[85%] z-10"
        animate={isRevealed ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className={`p-6 rounded-xl text-center relative overflow-hidden transition-all duration-500 border-l-4 bg-[#202c33]`}
          animate={{ 
            borderColor: currentTheme.color,
          }}
        >
          <motion.div 
            key={isRevealed ? "revealed" : "analyzing"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-4xl mb-3"
          >
            {currentTheme.emoji}
          </motion.div>
          
          <motion.h2 
            key={`title-${isRevealed}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black mb-2 text-[#e9edef]"
          >
            {currentTheme.title}
          </motion.h2>

          <AnimatePresence mode="wait">
            {isRevealed && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-[#d1d7db] font-medium text-sm leading-relaxed"
              >
                {currentTheme.description}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FriendshipStats;
