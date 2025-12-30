"use client";

import React, { useState, useCallback, useRef, useMemo } from "react";
import { HiShare } from "react-icons/hi";
import { IoClose, IoCaretForward, IoCaretBack } from "react-icons/io5";
import Stories from "react-insta-stories";
import * as htmlToImage from "html-to-image";
import Image from "next/image";
import jsPDF from "jspdf";

// Import all chart components
import MonthlyGraph from "./charts/MonthlyGraph";
import Welcome2 from "./charts/Welcome2";
import TotalChat from "./charts/TotalChat";
import WordCloud from "./charts/WordCloud";
import CountPie from "./charts/CountPie";
import EmojiChart from "./charts/EmojiChart";
import HourlyGraph from "./charts/HourlyGraph";
import NoTalk from "./charts/NoTalk";
import MostActive from "./charts/MostActive";
import ThankCard from "./charts/ThankCard";
import Welcome from "./charts/Welcome";
import GridStats from "./charts/GridStats";
import { ChatData } from "@/types/chat";
import { sendEvent } from "@/lib/analytics";

interface DashboardProps {
  chatData: ChatData;
  isDemo: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ chatData, isDemo }) => {
  const [isShared, setIsShared] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [showPDFRenderer, setShowPDFRenderer] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const handleShare = useCallback(() => {
    setIsShared(true);
    htmlToImage
      .toBlob(document.body)
      .then((dataUrl) => {
        if (!dataUrl) return;
        const file = new File([dataUrl], "share.png", { type: dataUrl.type });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator
            .share({
              title: "OurChatStory",
              text: "Look at our #WhatsAppWrapped. I made it using OurChatStory.co!",
              files: [file],
            })
            .then(() => console.log("Share was successful."))
            .catch((error) => console.log(error));
          setIsShared(false);
        } else {
          console.log("no share support");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsShared(false);
      });
  }, []);

  const handleSharePDF = useCallback(async () => {
    setIsSharing(true);
    setShowPDFRenderer(true);

    // Wait for the hidden slides to render
    await new Promise((resolve) => setTimeout(resolve, 2500));

    if (!pdfContainerRef.current) {
      setShowPDFRenderer(false);
      setIsSharing(false);
      return;
    }

    const slides = pdfContainerRef.current.querySelectorAll("[data-pdf-slide]");
    const totalSlides = slides.length;

    if (totalSlides === 0) {
      setShowPDFRenderer(false);
      setIsSharing(false);
      return;
    }

    // Create PDF with phone-like dimensions matching slide height (78vh of typical viewport)
    const slideWidth = 390;
    const slideHeight = 650; // 78% of 844px viewport to match h-[78vh]
    
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [slideWidth, slideHeight],
    });

    for (let i = 0; i < totalSlides; i++) {
      const slide = slides[i] as HTMLElement;

      if (i > 0) {
        pdf.addPage();
      }

      // Use html-to-image for all slides
      try {
        const dataUrl = await htmlToImage.toPng(slide, {
          quality: 1,
          pixelRatio: 2,
          backgroundColor: "#111b21",
          width: slideWidth,
          height: slideHeight,
          skipAutoScale: true,
          filter: (node) => {
            // Include all nodes
            return true;
          },
        });

        pdf.addImage(dataUrl, "PNG", 0, 0, slideWidth, slideHeight);
      } catch (error) {
        console.error(`Error capturing slide ${i + 1}:`, error);
      }

      // Add clickable link for watermark on every page (bottom center)
      pdf.link(80, slideHeight - 50, 230, 40, { url: "https://ourchatstory.co" });

      // Add clickable links for the last slide (ThankCard)
      const isLastSlide = i === totalSlides - 1;
      if (isLastSlide) {
        // "Buy us a coffee" button
        pdf.link(20, 420, 350, 100, { url: "https://www.buymeacoffee.com/whatsappwrapped" });
        
        // Social icons - middle position
        pdf.link(140, 580, 50, 50, { url: "https://twitter.com/ourchatstory" });
        pdf.link(200, 580, 50, 50, { url: "https://www.instagram.com/ourchatstory.co/" });
        
        // OurChatStory title
        pdf.link(50, 175, 290, 100, { url: "https://ourchatstory.co" });
      }
    }

    const memberNames = chatData.members.slice(0, 2).join("-").replace(/[^a-zA-Z0-9-]/g, "");
    const filename = `whatsapp-wrapped-${memberNames}-2025.pdf`;

    // Get PDF as blob and use Web Share API
    const pdfBlob = pdf.output("blob");
    const pdfFile = new File([pdfBlob], filename, { type: "application/pdf" });

    try {
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          title: "WhatsApp Wrapped",
          text: "Check out my WhatsApp Wrapped from OurChatStory!",
          files: [pdfFile],
        });
        console.log("Share was successful.");
      } else {
        // Fallback to download if sharing is not supported
        console.log("Web Share API not supported, falling back to download");
        pdf.save(filename);
      }
    } catch (error) {
      console.error("Error sharing PDF:", error);
      // Fallback to download on error
      pdf.save(filename);
    }

    setShowPDFRenderer(false);
    setIsSharing(false);

    // Track PDF share event
    sendEvent("pdf_share", {
      members_count: chatData.members.length,
      is_group: chatData.group,
      total_chats: chatData.total_no_of_chats,
    });
  }, [chatData.members, chatData.group, chatData.total_no_of_chats]);

  const pStories = useMemo(() => [
    {
      content: () => <Welcome drawData={chatData} />,
    },
    {
      content: () => <Welcome2 drawData={chatData} />,
    },
    {
      content: () => <TotalChat drawData={chatData} />,
    },
    {
      content: () => <GridStats drawData={chatData} />,
    },
    {
      content: () => <MostActive drawData={chatData} />,
    },
    {
      content: () => <MonthlyGraph drawData={chatData} isShared={isShared} />,
    },
    {
      content: () => <HourlyGraph drawData={chatData} isShared={isShared} />,
    },
    {
      content: () => <NoTalk drawData={chatData} />,
    },
    {
      content: () => <WordCloud drawData={chatData} />,
    },
    {
      content: () => <CountPie drawData={chatData} />,
    },
    {
      content: () => <EmojiChart drawData={chatData} />,
    },
  ], [chatData, isShared]);

  const gStories = useMemo(() => [
    {
      content: () => <Welcome drawData={chatData} />,
    },
    {
      content: () => <TotalChat drawData={chatData} />,
    },
    {
      content: () => <GridStats drawData={chatData} />,
    },
    {
      content: () => <MostActive drawData={chatData} />,
    },
    {
      content: () => <MonthlyGraph drawData={chatData} isShared={isShared} />,
    },
    {
      content: () => <HourlyGraph drawData={chatData} isShared={isShared} />,
    },
    {
      content: () => <NoTalk drawData={chatData} />,
    },
    {
      content: () => <WordCloud drawData={chatData} />,
    },
    {
      content: () => <CountPie drawData={chatData} />,
    },
    {
      content: () => <EmojiChart drawData={chatData} />,
    },
  ], [chatData, isShared]);

  // ThankCard story with isSharing - kept separate to allow loading state updates
  const thankCardStory = useMemo(() => ({
    content: () => (
      <ThankCard
        drawData={chatData}
        onSharePDF={handleSharePDF}
        isSharing={isSharing}
      />
    ),
  }), [chatData, handleSharePDF, isSharing]);

  const stories = useMemo(() => {
    const baseStories = chatData.group ? gStories : pStories;
    return [...baseStories, thankCardStory];
  }, [chatData.group, gStories, pStories, thankCardStory]);

  return (
    <div>
      <div className="bg-[#111111]">
        <div className="flex justify-center">
          {typeof window !== "undefined" && window.innerWidth > 500 ? (
            <Stories
              currentIndex={storyIndex}
              stories={stories}
              defaultInterval={20000}
              height="95vh"
              onAllStoriesEnd={() => {
                console.log("All stories completed");
              }}
              preventDefault={false}
              keyboardNavigation={true}
            />
          ) : (
            <Stories
              currentIndex={storyIndex}
              stories={stories}
              defaultInterval={20000}
              height="95vh"
              width="97vw"
              onAllStoriesEnd={() => {
                console.log("All stories completed");
              }}
              preventDefault={false}
              keyboardNavigation={true}
            />
          )}
        </div>

        <div className="flex justify-center">
          <div className="h-[5vh] absolute flex items-center gap-2 p-4 bottom-[15vh] opacity-75">
            <Image
              width={24}
              height={24}
              src="/static/compress/logo2.webp"
              alt="OurChatStory"
              className="w-[3vh] h-[3vh]"
              style={{ imageRendering: "crisp-edges" }}
            />
            <p className="text-white text-xs" style={{
              textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
            }}>
              Made using OurChatStory.co
            </p>
          </div>
        </div>
      </div>

      <button
        aria-label="Close"
        className="fixed top-[2vh] right-[1vw] z-[10003] bg-transparent border-none cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        <IoClose size="1.5em" opacity={0.8} color="#555555" />
      </button>

      {storyIndex !== stories.length - 1 && (
        <>
          <button
            aria-label="Next"
            className="fixed bottom-[50vh] right-[0.5vw] z-[10000] bg-transparent border-none cursor-pointer opacity-30"
            onClick={() => {
              setStoryIndex(storyIndex + 1);
            }}
          >
            <IoCaretForward size="1.5em" color="#cccccc" />
          </button>
          <div
            className="fixed top-0 right-0 z-[10001] h-screen w-[50vw] bg-transparent cursor-pointer"
            onClick={() => {
              setStoryIndex(storyIndex + 1);
            }}
          />
        </>
      )}

      {storyIndex !== 0 && (
        <>
          <button
            aria-label="Prev"
            className="fixed bottom-[50vh] left-[0.5vw] z-[10000] bg-transparent border-none cursor-pointer opacity-30"
            onClick={() => {
              setStoryIndex(storyIndex - 1);
            }}
          >
            <IoCaretBack size="1.5em" color="#cccccc" />
          </button>
          <div
            className="fixed top-0 left-0 z-[10001] h-screen w-[50vw] bg-transparent cursor-pointer"
            onClick={() => {
              setStoryIndex(storyIndex - 1);
            }}
          />
        </>
      )}

      <div className="bg-black">
        {isDemo ? (
          <button
            className="w-full h-[5vh] sticky bottom-0 z-[10003] rounded-none bg-[#25d366] hover:bg-[#1da851] text-white font-bold"
            onClick={() => {
              window.location.reload();
            }}
          >
            Click here to make your own wrap
          </button>
        ) : typeof window !== "undefined" && typeof navigator.canShare !== "undefined" ? (
          <button
            className="w-full h-[5vh] sticky bottom-0 z-[10003] rounded-none bg-white hover:bg-white active:bg-white text-black font-bold flex items-center justify-center gap-2"
            onClick={handleSharePDF}
          >
            {isSharing ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <HiShare />
            )}
            Share
          </button>
        ) : null}
      </div>

      {/* Hidden container for PDF generation - uses iframe-like approach for proper vh calculation */}
      {showPDFRenderer && (
        <div
          ref={pdfContainerRef}
          style={{
            position: "fixed",
            left: "-9999px",
            top: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          {/* Render all slides for PDF capture */}
          {(chatData.group ? [
            <Welcome key="welcome" drawData={chatData} />,
            <TotalChat key="totalchat" drawData={chatData} />,
            <GridStats key="gridstats" drawData={chatData} />,
            <MostActive key="mostactive" drawData={chatData} />,
            <MonthlyGraph key="monthly" drawData={chatData} isShared={true} forPDF={true} />,
            <HourlyGraph key="hourly" drawData={chatData} isShared={true} forPDF={true} />,
            <NoTalk key="notalk" drawData={chatData} />,
            <WordCloud key="wordcloud" drawData={chatData} />,
            <CountPie key="countpie" drawData={chatData} />,
            <EmojiChart key="emoji" drawData={chatData} />,
            <ThankCard key="thanks" drawData={chatData} forPDF={true} />,
          ] : [
            <Welcome key="welcome" drawData={chatData} />,
            <Welcome2 key="welcome2" drawData={chatData} forPDF={true} />,
            <TotalChat key="totalchat" drawData={chatData} />,
            <GridStats key="gridstats" drawData={chatData} />,
            <MostActive key="mostactive" drawData={chatData} />,
            <MonthlyGraph key="monthly" drawData={chatData} isShared={true} forPDF={true} />,
            <HourlyGraph key="hourly" drawData={chatData} isShared={true} forPDF={true} />,
            <NoTalk key="notalk" drawData={chatData} />,
            <WordCloud key="wordcloud" drawData={chatData} />,
            <CountPie key="countpie" drawData={chatData} />,
            <EmojiChart key="emoji" drawData={chatData} />,
            <ThankCard key="thanks" drawData={chatData} forPDF={true} />,
          ]).map((slide, index, array) => (
            <div
              key={index}
              data-pdf-slide
              style={{
                width: "390px",
                height: "650px", // Match h-[78vh] from slide components (78% of 844px)
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#111b21",
              }}
            >
              {/* Inner wrapper to simulate viewport for vh units */}
              <div
                style={{
                  width: "390px",
                  height: "650px", // Match h-[78vh] from slide components
                  position: "relative",
                }}
              >
                {slide}
              </div>
              {/* Watermark */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  opacity: 0.9,
                  whiteSpace: "nowrap",
                  minWidth: "250px",
                }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/static/compress/logo2.webp"
                  alt="OurChatStory"
                  style={{ width: "20px", height: "20px", flexShrink: 0 }}
                />
                <p
                  style={{
                    color: "white",
                    fontSize: "12px",
                    margin: 0,
                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                    whiteSpace: "nowrap",
                  }}
                >
                  Made using{" "}
                  <span style={{ textDecoration: "underline", color: "#25d366" }}>
                    OurChatStory.co
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
