import { motion } from "framer-motion";

export const BackgroundBlobs = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    <motion.div
      className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-5 blur-[80px]"
      style={{ backgroundColor: "#25d366" }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-5 blur-[80px]"
      style={{ backgroundColor: "#34b7f1" }}
      animate={{
        scale: [1, 1.1, 1],
        x: [0, -50, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-2 blur-[60px]"
      style={{ backgroundColor: "#ffffff" }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);
