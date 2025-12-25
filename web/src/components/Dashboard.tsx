"use client";

import React, { useState, useCallback } from "react";
import { HiShare } from "react-icons/hi";
import { IoClose, IoCaretForward, IoCaretBack } from "react-icons/io5";
import Stories from "react-insta-stories";
import * as htmlToImage from "html-to-image";
import Image from "next/image";

// Import all chart components
import MonthlyGraph from "./charts/MonthlyGraph";
import Welcome2 from "./charts/Welcome2";
import GWelcome2 from "./charts/GWelcome2";
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

interface DashboardProps {
  chatData: ChatData;
  isDemo: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ chatData, isDemo }) => {
  const [isShared, setIsShared] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);

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

  const pStories = [
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
    {
      content: () => <ThankCard drawData={chatData} />,
    },
  ];

  const gStories = [
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
    {
      content: () => <ThankCard drawData={chatData} />,
    },
  ];

  const stories = chatData.group ? gStories : pStories;

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
            onClick={handleShare}
          >
            {isShared ? (
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <HiShare />
            )}
            Share
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
