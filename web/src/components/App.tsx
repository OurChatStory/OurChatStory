"use client";

import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Uploader from "./Uploader";
import Intro from "./Intro";
import { ChatData } from "@/types/chat";
import { BackgroundBlobs } from "./BackgroundBlobs";

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
        const { action, file } = (event.data || {}) as { action?: string; file?: { data: ArrayBuffer; type: string; name: string } };
        if (action === "load-image" && file) {
          // Reconstruct File object from the data sent by service worker
          const fileBlob = new Blob([new Uint8Array(file.data)], { type: file.type });
          const reconstructedFile = new File([fileBlob], file.name, { type: file.type });
          setSharedFile(reconstructedFile);
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
