import React from "react";
import { motion } from "framer-motion";
import { VictoryPie } from "victory";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;
const MotionP = motion.p;

interface CountPieProps {
  drawData: ChatData;
}

const CountPie = ({ drawData }: CountPieProps) => {
  const mostActive = drawData.most_active_member?.member || "";
  const pieData = drawData.no_of_messages_per_member
    .slice(0, 6)
    .map(({ member, count }) => ({
      name: member.split(" ")[0],
      value: count,
      label: `${member.split(" ")[0]}\n${count}`,
    }));

  // Red-themed color palette
  const colorScale = [
    "#ef4444", // Red
    "#fee2e2", // Very Light Red
    "#f87171", // Light Red
    "#b91c1c", // Darker Red
    "#fca5a5", // Lighter Red
    "#dc2626", // Dark Red
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[1vh] w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
      {/* Background Blobs */}
      <MotionDiv
        className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
        style={{ backgroundColor: "#ef4444" }}
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
        Chat Participation
      </MotionP>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="z-10 text-center"
      >
        <p className="text-2xl font-bold text-[#e9edef]">
          Who texts the most?
        </p>
        <p className="text-4xl font-black text-[#ef4444] leading-tight mt-2">
          {mostActive}
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="z-10 w-full h-[250px] flex items-center justify-center -mt-[4vh] -mb-[2vh]"
      >
        <VictoryPie
          data={pieData}
          x="name"
          y="value"
          colorScale={colorScale}
          innerRadius={70}
          padding={40}
          width={350}
          height={180}
          labelRadius={({ innerRadius }) => ((innerRadius as number) ?? 70) + 10}
          labels={({ datum }) => `${datum.name}\n${datum.value}`}
          padAngle={2}
          cornerRadius={4}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: {
              stroke: "#111b21",
              strokeWidth: 2,
            },
            labels: {
              fill: "#e9edef",
              fontSize: 12,
              fontWeight: "bold",
              fontFamily: "Helvetica, Arial, sans-serif",
            },
          }}
        />
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="z-10 bg-[#202c33] p-6 rounded-lg border-l-4 border-[#ef4444] max-w-[85%]"
      >
        <p className="text-[#d1d7db] text-md text-left">
          {drawData.group
            ? `${mostActive} is carrying this group chat! 🏋️`
            : "It&apos;s a close call... or is it? 👀"}
        </p>
      </MotionDiv>
    </div>
  );
};

export default CountPie;
