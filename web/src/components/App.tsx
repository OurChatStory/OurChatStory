"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import Uploader from "./Uploader";
import Intro from "./Intro";
import { ChatData } from "@/types/chat";

const BackgroundBlobs = () => (
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

const App = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState<ChatData>({} as ChatData);
  const [showLoader, setShowLoader] = useState(false);
  const [isDemo, setIsDemo] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isSuccessfulPWAInstall, setIsSuccessfulPWAInstall] = useState(false);
  const [sharedFile, setSharedFile] = useState<File | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsSuccessfulPWAInstall(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // Listen for messages from the Service Worker (Web Share Target)
  useEffect(() => {
    if (navigator.serviceWorker) {
      const handler = (event: MessageEvent) => {
        const { action, file } = (event.data || {}) as { action?: string; file?: File };
        if (action === "load-image" && file) {
          setSharedFile(file);
          setShowUploader(true);
        }
      };
      navigator.serviceWorker.addEventListener("message", handler);
      return () => navigator.serviceWorker.removeEventListener("message", handler);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#111b21] text-[#e9edef] relative">
      {showResults ? (
        <Dashboard chatData={data} isDemo={isDemo} />
      ) : (
        <>
          <BackgroundBlobs />

          {/* Main Content */}
          <Intro setShowUploader={setShowUploader} />

          {/* Uploader Overlay */}
          {(showUploader || showLoader) && (
            <Uploader
              setIsDemo={setIsDemo}
              setShowResults={setShowResults}
              setData={setData}
              setShowUploader={setShowUploader}
              showLoader={showLoader}
              setShowLoader={setShowLoader}
              deferredPrompt={deferredPrompt}
              isSuccessfulPWAInstall={isSuccessfulPWAInstall}
              setIsSuccessfulPWAInstall={setIsSuccessfulPWAInstall}
              sharedFile={sharedFile}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
