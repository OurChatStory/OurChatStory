"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileUploader } from "react-drag-drop-files";
import { IoClose, IoCloudUpload, IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import axios from "axios";
import { API_URL } from "@/lib/constants";
import { sendEvent } from "@/lib/analytics";
import { sample } from "@/data/sampleResponse";
import { ChatData } from "@/types/chat";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface UploaderProps {
  setShowResults: (show: boolean) => void;
  setData: (data: ChatData) => void;
  setIsDemo: (isDemo: boolean) => void;
  setShowUploader: (show: boolean) => void;
  showLoader: boolean;
  setShowLoader: (show: boolean) => void;
  deferredPrompt: Event | null;
  isSuccessfulPWAInstall: boolean;
  setIsSuccessfulPWAInstall: (success: boolean) => void;
  sharedFile?: File | null;
}

const InstructionList = ({ steps }: { steps: string[] }) => (
  <ol className="space-y-3 text-[#d1d7db] ml-5 list-decimal">
    {steps.map((step, index) => (
      <li key={index}>
        <p className="text-sm">{step}</p>
      </li>
    ))}
  </ol>
);

const Uploader: React.FC<UploaderProps> = ({
  setShowResults,
  setData,
  setIsDemo,
  setShowUploader,
  showLoader,
  setShowLoader,
  sharedFile,
  deferredPrompt,
  isSuccessfulPWAInstall,
  setIsSuccessfulPWAInstall,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-select tab based on device
  const [tabIndex, setTabIndex] = useState(
    typeof navigator !== "undefined" &&
    ([
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document))
      ? 1
      : 0
  );

  const handleFileUpload = (file: File | File[]) => {
    const uploadFile = Array.isArray(file) ? file[0] : file;
    
    if (uploadFile.name.endsWith(".txt") || uploadFile.name.endsWith(".zip")) {
      const data = new FormData();
      data.append("file", uploadFile);
      setIsUploading(true);
      setShowLoader(true);
      setError(null);

      sendEvent("chat_upload_initiated", {
        category: "Chat Upload",
        action: "submit",
        label: "initiated",
      });

      axios
        .post(API_URL + "wrap", data)
        .then((res) => {
          setData(res.data);
          setIsDemo(false);
          setShowResults(true);
          sendEvent("chat_upload_success", {
            category: "Chat Upload",
            action: "submit",
            label: "success",
          });
        })
        .catch((err) => {
          const detail = err?.response?.data?.detail;

          setIsUploading(false);
          setShowLoader(false);
          setError(typeof detail === "string" && detail.trim() ? detail : "Connection failed. Please try again.");
          sendEvent("chat_upload_error", {
            category: "Chat Upload",
            action: "submit",
            label: "error",
          });
        });
    } else {
      setError("Please upload a .txt or .zip file exported from WhatsApp.");
    }
  };

  // If a file is provided via Web Share Target, process it automatically
  useEffect(() => {
    if (sharedFile) {
      handleFileUpload(sharedFile);
    }
  }, [sharedFile]);

  const fileTypes = ["TXT", "ZIP"];

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/85 backdrop-blur-[10px] z-[1000] overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#111b21] w-full md:w-[600px] rounded-xl shadow-2xl border border-[#2a3942] relative overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-[#2a3942] flex justify-between items-center bg-[#202c33]">
            <h2 className="text-md font-semibold text-[#e9edef]">Upload Chat</h2>
            <button
              onClick={() => {
                setShowUploader(false);
                document.body.style.overflow = "auto";
              }}
              className="text-[#8696a0] hover:bg-white/10 p-2 rounded"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto overflow-x-hidden flex-1">
            {showLoader ? (
              <div className="flex flex-col items-center gap-6 py-10">
                <div className="w-16 h-16 border-4 border-gray-700 border-t-[#25d366] rounded-full animate-spin" />
                <p className="text-[#e9edef] text-lg font-bold">Analyzing your chat...</p>
                <p className="text-[#8696a0] text-center">
                  Hang tight! We&apos;re weaving your chat into a beautiful story. <br />
                  This usually takes just a few seconds...
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {/* Tabs */}
                <div className="bg-[#202c33] p-1 rounded-full flex">
                  <button
                    className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors ${
                      tabIndex === 0
                        ? "bg-[#25d366] text-[#111b21]"
                        : "text-[#8696a0]"
                    }`}
                    onClick={() => setTabIndex(0)}
                  >
                    <IoLogoAndroid /> Android
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors ${
                      tabIndex === 1
                        ? "bg-[#25d366] text-[#111b21]"
                        : "text-[#8696a0]"
                    }`}
                    onClick={() => setTabIndex(1)}
                  >
                    <IoLogoApple /> iOS
                  </button>
                </div>

                {/* Instructions */}
                <div className="mt-4">
                  {tabIndex === 0 ? (
                    <>
                      {isSuccessfulPWAInstall ? (
                        <InstructionList
                          steps={[
                            "Open a chat in WhatsApp",
                            "Tap the three dots (⋮) > More > Export Chat",
                            "Choose 'Without Media'",
                            "Share the file with OurChatStory app",
                          ]}
                        />
                      ) : (
                        <>
                          <InstructionList
                            steps={[
                              "Open a chat in WhatsApp",
                              "Tap the three dots (⋮) > More > Export Chat",
                              "Choose 'Without Media'",
                              "Upload the .txt or .zip file here",
                            ]}
                          />
                          {deferredPrompt && (
                            <button
                              className="mt-4 w-full py-2 px-4 bg-[#25d366] text-[#111b21] font-semibold rounded-lg hover:bg-[#20ba5a] transition-colors"
                              onClick={async () => {
                                if (deferredPrompt) {
                                  (deferredPrompt as BeforeInstallPromptEvent).prompt();
                                  const { outcome } = await (deferredPrompt as BeforeInstallPromptEvent).userChoice;
                                  if (outcome === 'accepted') {
                                    setIsSuccessfulPWAInstall(true);
                                  }
                                }
                              }}
                            >
                              Install App
                            </button>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <InstructionList
                      steps={[
                        "Open a chat in WhatsApp",
                        "Tap the contact name at the top",
                        "Scroll down and tap 'Export Chat'",
                        "Choose 'Without Media'",
                        "Save to Files and upload here",
                      ]}
                    />
                  )}
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-[#2a3942] rounded-xl p-8 text-center bg-[#202c33]/50 transition-all hover:border-[#25d366] hover:bg-[#25d366]/5">
                  <FileUploader
                    handleChange={handleFileUpload}
                    name="file"
                    types={fileTypes}
                    classes="drop_zone"
                  >
                    <div className="flex flex-col items-center gap-4 cursor-pointer">
                      <IoCloudUpload className="w-12 h-12 text-[#25d366]" />
                      <div className="flex flex-col gap-1">
                        <p className="text-[#e9edef] font-bold text-lg">
                          Drag & Drop or Click to Upload
                        </p>
                        <p className="text-[#8696a0] text-sm">Supports .txt and .zip files</p>
                      </div>
                    </div>
                  </FileUploader>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  className="text-sm text-[#8696a0] hover:text-[#25d366] transition-colors"
                  onClick={() => {
                    setIsDemo(true);
                    setData(sample);
                    setShowResults(true);
                    setShowUploader(false);
                  }}
                >
                  Try with demo data instead
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Uploader;
