import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface DummyIntroProps {
  drawData: ChatData;
}

const DummyIntro = ({ drawData }: DummyIntroProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[78vh] bg-[#111b21] rounded-2xl p-4 pb-[10vh] relative overflow-hidden space-y-[3vh]">
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
        Let&apos;s talk about
      </MotionP>

      {/* Name 1 - Green Bubble */}
      <MotionDiv
        initial={{ x: -50, opacity: 0, rotate: -5 }}
        animate={{ x: 0, opacity: 1, rotate: -2 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="bg-[#25d366] p-6 rounded-[20px] max-w-[85%] z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
        style={{ borderRadius: "20px 4px 20px 20px" }}
      >
        <p className="text-[#111b21] text-3xl font-black text-center leading-tight break-words">
          {drawData.members[0]}
        </p>
      </MotionDiv>

      <MotionP
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        className="text-[#8696a0] text-2xl font-bold z-10"
      >
        &
      </MotionP>

      {/* Name 2 - White Bubble */}
      <MotionDiv
        initial={{ x: 50, opacity: 0, rotate: 5 }}
        animate={{ x: 0, opacity: 1, rotate: 2 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
        className="bg-[#e9edef] p-6 rounded-[20px] max-w-[85%] z-10 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
        style={{ borderRadius: "4px 20px 20px 20px" }}
      >
        <p className="text-[#111b21] text-3xl font-black text-center leading-tight break-words">
          {drawData.members[1]}
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-6 px-4 py-1 border border-[#2a3942] rounded-full z-10"
        style={{ background: "rgba(17, 27, 33, 0.5)" }}
      >
        <p className="text-[#8696a0] text-xs tracking-wide">2025 EDITION</p>
      </MotionDiv>
    </div>
  );
};

export default DummyIntro;
