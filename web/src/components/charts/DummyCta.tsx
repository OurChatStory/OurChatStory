import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChatData } from "@/types/chat";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionButton = motion.button;

interface DummyCtaProps {
  drawData: ChatData;
  setShowUploader: (show: boolean) => void;
}

const DummyCta = ({ drawData, setShowUploader }: DummyCtaProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[78vh] bg-transparent rounded-2xl p-4 pb-[10vh] relative overflow-hidden space-y-[3vh]">
      {/* Background Elements */}
      <MotionDiv
        className="absolute top-[10%] -left-[5%] w-[200px] h-[200px] rounded-full z-0"
        style={{ background: "rgba(37, 211, 102, 0.03)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <MotionDiv
        className="absolute bottom-[20%] -right-[5%] w-[150px] h-[150px] rounded-full z-0"
        style={{ background: "rgba(255, 255, 255, 0.02)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <MotionP
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
      >
        Your turn!
      </MotionP>

      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-[85%] z-10"
      >
        <p className="text-2xl sm:text-3xl text-white font-black text-center leading-tight">
          Create Your Own
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="max-w-[85%] z-10"
      >
        <p className="text-md sm:text-lg text-[#e9edef] font-normal text-center leading-relaxed">
          Discover your unique chat story and see your relationship unfold
          through data
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
        className="mt-6 w-[85%] max-w-[350px] z-10"
      >
        <MotionButton
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setShowUploader(true);
            document.body.style.overflow = "hidden";
          }}
          className="w-full bg-[#25d366] text-[#111b21] text-md sm:text-lg font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-[#20bd5a] active:bg-[#1fa952] transition-all"
        >
          Make yours now
        </MotionButton>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="mt-4 z-10"
      >
        <div className="flex gap-4">
          <Link
            href="https://twitter.com/ourchatstory"
            target="_blank"
            rel="noreferrer"
          >
            <MotionButton
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size="1.5em" color="#1DA1F2" />
            </MotionButton>
          </Link>
          <Link
            href="https://www.instagram.com/ourchatstory.co/"
            target="_blank"
            rel="noreferrer"
          >
            <MotionButton
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size="1.5em" color="#E4405F" />
            </MotionButton>
          </Link>
        </div>
      </MotionDiv>

      <motion.a
        href="https://www.buymeacoffee.com/whatsappwrapped"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 z-10 cursor-pointer block"
      >
        <Image
          height={40}
          width={160}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </motion.a>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-6 px-6 py-3 max-w-[90%] z-10"
      >
        <p className="text-xs text-[#8696a0] text-center leading-relaxed">
          <span className="font-bold text-[#e9edef] uppercase text-[10px]">
            100% Private • No data stored
          </span>
          <br />
          <span className="text-[10px]">
            Check our{" "}
            <Link
              href="/privacy"
              className="underline text-[#25d366]"
            >
              privacy
            </Link>
            {" "}•{" "}
            <Link
              href="/blogs"
              className="underline text-[#25d366]"
            >
              blogs
            </Link>
            {" "}•{" "}
            <Link
              href="https://github.com/OurChatStory/OurChatStory"
              className="underline text-[#25d366]"
            >
              code
            </Link>
          </span>
        </p>
      </MotionDiv>
    </div>
  );
};

export default DummyCta;
