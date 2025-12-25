import { motion } from "framer-motion";
import { ChatData } from "@/types/chat";

const MotionDiv = motion.div;

interface GridStatsProps {
  drawData: ChatData;
}

const GridStats = ({ drawData }: GridStatsProps) => {
  const stats = [
    {
      label: "Days Active",
      value: drawData.total_days_talked,
      unit: "days",
      subtext: "kept the streak alive",
      color: "#25d366",
    },
    {
      label: "Most Active Day",
      value: drawData.most_active_day?.day?.substring(0, 3) || "N/A",
      unit: "",
      subtext: "was the vibe",
      color: "#34b7f1",
    },
    {
      label: "Longest Session",
      value:
        drawData.longest_session?.total_time > 120 * 60
          ? parseInt(String(drawData.longest_session.total_time / (60 * 60)))
          : parseInt(String(drawData.longest_session?.total_time / 60)),
      unit:
        drawData.longest_session?.total_time > 120 * 60 ? "hrs" : "mins",
      subtext: "non-stop chatting",
      color: "#a855f7",
    },
    {
      label: "Avg Reply Time",
      value: Math.round((drawData.longest_session?.avg_reply_time || 0) * 10) / 10,
      unit: "sec",
      subtext: "during peak chats",
      color: "#f78901",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[78vh] bg-[#111b21] rounded-2xl p-8 pb-[10vh] relative overflow-hidden">
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

      <p className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10">
        Chat Highlights
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-4 w-full z-10 mt-[4vh]"      >
        {stats.map((stat, index) => (
          <MotionDiv
            key={index}
            variants={item}
            className="col-span-1 bg-[#202c33] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center min-h-[160px]"
            style={{ borderTop: `4px solid ${stat.color}` }}
          >
            <p className="text-[#8696a0] text-xs font-medium mb-2 uppercase text-center">
              {stat.label}
            </p>
            <div className="flex items-baseline">
              <p className="text-[#e9edef] text-4xl font-black leading-none">
                {stat.value}
              </p>
              {stat.unit && (
                <p className="text-[#8696a0] text-sm font-bold ml-1">
                  {stat.unit}
                </p>
              )}
            </div>
            <p className="text-[#8696a0] text-xs mt-2 text-center">
              {stat.subtext}
            </p>
          </MotionDiv>
        ))}
      </motion.div>
    </div>
  );
};

export default GridStats;
