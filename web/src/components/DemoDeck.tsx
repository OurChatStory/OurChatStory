"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sample } from "@/data/sampleResponse";

// Import chart components
import Welcome from "./charts/Welcome";
import TotalChat from "./charts/TotalChat";
import EmojiChart from "./charts/EmojiChart";
import MostActive from "./charts/MostActive";
import CountPie from "./charts/CountPie";

export const DemoDeck = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { component: Welcome, id: "welcome" },
    { component: TotalChat, id: "total" },
    { component: MostActive, id: "active" },
    { component: EmojiChart, id: "emoji" },
    { component: CountPie, id: "pie" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const CurrentSlide = slides[index].component;

  return (
    <div className="w-[370px] h-[620px] bg-[#111b21] rounded-[2rem] border-8 border-[#2a3942] shadow-[0_0_50px_rgba(37,211,102,0.2)] relative overflow-hidden">
      {/* Status Bar Mock */}
      <div className="absolute top-4 left-0 w-full px-6 flex justify-between items-center z-20">
        <span className="text-xs text-white font-bold">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-white rounded-full opacity-80" />
          <div className="w-4 h-4 bg-white rounded-full opacity-80" />
        </div>
      </div>

      {/* Slide Container */}
      <div className="h-full w-full pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            <CurrentSlide drawData={sample} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-2 w-full flex justify-center">
        <div className="w-[40%] h-[5px] bg-white rounded-full opacity-50" />
      </div>
    </div>
  );
};
