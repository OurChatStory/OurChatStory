import { useState, useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import Intro from "./intro";

const MotionBox = motion(Box);

const BackgroundBlobs = () => (
  <Box position="fixed" top="0" left="0" w="100%" h="100%" zIndex="-1" overflow="hidden">
    <MotionBox
      position="absolute"
      top="-10%"
      left="-10%"
      w="500px"
      h="500px"
      borderRadius="full"
      bg="rgba(37, 211, 102, 0.05)"
      filter="blur(80px)"
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <MotionBox
      position="absolute"
      bottom="-10%"
      right="-10%"
      w="600px"
      h="600px"
      borderRadius="full"
      bg="rgba(52, 183, 241, 0.05)"
      filter="blur(80px)"
      animate={{
        scale: [1, 1.1, 1],
        x: [0, -50, 0],
        y: [0, -30, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    />
    <MotionBox
      position="absolute"
      top="40%"
      left="40%"
      w="300px"
      h="300px"
      borderRadius="full"
      bg="rgba(255, 255, 255, 0.02)"
      filter="blur(60px)"
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </Box>
);

const App = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isSuccessfulPWAInstall, setIsSuccessfulPWAInstall] = useState(false);

  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("dark"); // Force dark mode

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsSuccessfulPWAInstall(true);
    }
  }, [setColorMode]);

  return (
    <Box minH="100vh" bg="#111b21" color="#e9edef" position="relative">
      {showRes ? (
        <Dashboard drawData={data} isDemo={isDemo} />
      ) : (
        <>
          <BackgroundBlobs />
          
          {/* Main Content */}
          <Intro setShowUploader={setShowUploader} />

          {/* Uploader Overlay */}
          {(showUploader || showLoader) && (
            <Uploader
              setIsDemo={setIsDemo}
              setShowRes={setShowRes}
              setData={setData}
              setShowUploader={setShowUploader}
              showLoader={showLoader}
              setShowLoader={setShowLoader}
              deferredPrompt={deferredPrompt}
              isSuccessfulPWAInstall={isSuccessfulPWAInstall}
              setIsSuccessfulPWAInstall={setIsSuccessfulPWAInstall}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default App;
