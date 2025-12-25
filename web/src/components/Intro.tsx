"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { sample } from "@/data/sampleResponse";

// Import chart components
import Welcome from "./charts/Welcome";
import TotalChat from "./charts/TotalChat";
import EmojiChart from "./charts/EmojiChart";
import MostActive from "./charts/MostActive";
import CountPie from "./charts/CountPie";

const DemoDeck = () => {
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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

interface IntroProps {
  setShowUploader: (show: boolean) => void;
}

const Intro: React.FC<IntroProps> = ({ setShowUploader }) => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex flex-col">
      <div className="flex-1 flex items-center py-16 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/static/compress/logo2.webp"
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-6xl leading-none text-[#e9edef] font-black tracking-tight"
              >
                YOUR <br />
                <span className="text-[#25d366]">WHATSAPP</span> <br />
                WRAPPED.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl text-[#8696a0] font-medium max-w-lg"
              >
                Rediscover your conversations. Visualize your chat history with beautiful insights,
                statistics, and a personalized story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <button
                  className="px-6 md:px-8 py-4 md:py-6 text-lg md:text-xl font-bold bg-[#25d366] text-[#111b21] rounded-full hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  onClick={() => {
                  setShowUploader(true);
                  document.body.style.overflow = "hidden";
                  }}
                >
                  Make your wrap
                </button>
              </motion.div>
            </div>

            {/* Right Visual - Demo Deck */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center relative"
            >
              {/* Glow Effect behind the phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[330px] h-[500px] md:h-[620px] bg-gradient-radial from-[rgba(37,211,102,0.2)] to-transparent opacity-70 z-0" />
              <div className="z-10">
                <DemoDeck />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full py-6 md:py-8 px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-[#8696a0]">100% Private • No data stored</p>
            <div className="flex items-center gap-2 text-xs text-[#8696a0]">
              <Link href="/privacy" className="hover:text-[#25d366]">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/blogs" className="hover:text-[#25d366]">
                Blogs
              </Link>
              <span>•</span>
              <a
                href="https://github.com/OurChatStory/OurChatStory"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25d366]"
              >
                Code
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <a
                href="https://twitter.com/ourchatstory"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8696a0] hover:text-[#1DA1F2] hover:bg-[rgba(29,161,242,0.1)] rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size="1.2em" />
              </a>
              <a
                href="https://www.instagram.com/ourchatstory.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8696a0] hover:text-[#E1306C] hover:bg-[rgba(225,48,108,0.1)] rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size="1.2em" />
              </a>
            </div>

            <a
              href="https://www.buymeacoffee.com/whatsappwrapped"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                width={160}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
