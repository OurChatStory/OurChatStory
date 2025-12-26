import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IntroButton } from "./IntroButton";
import { DemoDeck } from "./DemoDeck";

interface IntroContentProps {
  setShowUploader: (show: boolean) => void;
}

export const IntroContent: React.FC<IntroContentProps> = ({ setShowUploader }) => {
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
                <IntroButton
                  onClick={() => {
                    setShowUploader(true);
                    document.body.style.overflow = "hidden";
                  }}
                />
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
