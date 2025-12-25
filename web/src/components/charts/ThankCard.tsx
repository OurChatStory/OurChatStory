import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChatData } from "@/types/chat";
import { FaTwitter, FaCoffee } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionButton = motion.button;

interface ThankCardProps {
  drawData: ChatData;
}

const ThankCard = ({ drawData }: ThankCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#25d366" }}
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
        That&apos;s a wrap!
      </MotionP>

      <div className="flex flex-col items-center gap-2 z-10 text-center">
        <MotionP
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#e9edef] text-4xl font-bold"
        >
          OurChatStory
        </MotionP>
        <MotionP
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[#25d366] text-lg"
        >
          Your chats tell a story.
        </MotionP>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="z-10 bg-[#202c33] p-6 rounded-lg max-w-[85%] text-center"
      >
        <p className="text-[#d1d7db] text-md mb-4">
          Enjoyed your wrapped? Help us keep the servers running! ☕
        </p>
        <Link
          href="https://www.buymeacoffee.com/whatsappwrapped"
          target="_blank"
          className="block no-underline"
        >
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFDD00] text-black text-lg font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FFEA00] transition-colors"
          >
            <FaCoffee />
            Buy us a coffee
          </MotionButton>
        </Link>
      </MotionDiv>

      <div className="flex flex-col items-center gap-4 z-10">
        <p className="text-[#8696a0] text-sm">Made with 💚 by</p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link href="https://twitter.com/anshulagx" target="_blank">
            <MotionButton
              whileHover={{ scale: 1.1 }}
              className="text-sm px-4 py-2 border border-blue-400 text-blue-400 rounded-md flex items-center gap-2 hover:bg-blue-400/10 transition-colors"
            >
              <FaTwitter />
              @anshulagx
            </MotionButton>
          </Link>
          <Link href="https://twitter.com/iamyajat" target="_blank">
            <MotionButton
              whileHover={{ scale: 1.1 }}
              className="text-sm px-4 py-2 border border-blue-400 text-blue-400 rounded-md flex items-center gap-2 hover:bg-blue-400/10 transition-colors"
            >
              <FaTwitter />
              @iamyajat
            </MotionButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankCard;
