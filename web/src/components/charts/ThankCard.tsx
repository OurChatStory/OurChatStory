import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChatData } from "@/types/chat";
import { FaTwitter, FaCoffee, FaInstagram } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import SupportersModal from "../SupportersModal";
import { BMC_TOKEN } from "@/lib/constants";
import { BMCSupporterData, BMCSubscriptionData, Supporter } from "@/types/supporters";

const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionButton = motion.button;

interface ThankCardProps {
  drawData: ChatData;
  onSharePDF?: () => void;
  forPDF?: boolean;
  isSharing?: boolean;
}

const ThankCard = ({ 
  drawData, 
  onSharePDF,
  forPDF = false,
  isSharing = false,
}: ThankCardProps) => {
  const [showSupporters, setShowSupporters] = React.useState(false);
  const [supporters, setSupporters] = React.useState<Supporter[]>([]);
  const [loading, setLoading] = React.useState(false);

  const fetchSupporters = async () => {
    if (supporters.length > 0) {
      setShowSupporters(true);
      return;
    }

    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${BMC_TOKEN}`,
      };

      const [supportersRes, subscriptionsRes] = await Promise.all([
        fetch("https://developers.buymeacoffee.com/api/v1/supporters", { headers }),
        fetch("https://developers.buymeacoffee.com/api/v1/subscriptions?status=active", { headers })
      ]);

      const supportersData = await supportersRes.json();
      const subscriptionsData = await subscriptionsRes.json();
      
      const mappedSupporters = (supportersData.data || []).map((s: BMCSupporterData) => ({
        supporter_name: s.supporter_name || s.payer_name || "Anonymous",
        support_coffees: s.support_coffees,
        support_note: s.support_note,
        support_amount: (parseFloat(s.support_coffee_price) || 5) * s.support_coffees
      }));

      const mappedSubscriptions = (subscriptionsData.data || []).map((s: BMCSubscriptionData) => ({
        supporter_name: s.payer_name || "Anonymous",
        support_coffees: s.subscription_coffee_num,
        support_note: s.subscription_message,
        support_amount: (parseFloat(s.subscription_coffee_price) || 5) * s.subscription_coffee_num
      }));

      const allSupporters = [...mappedSupporters, ...mappedSubscriptions];

      if (allSupporters.length > 0) {
        setSupporters(allSupporters);
      }
    } catch (error) {
      console.error("Error fetching supporters:", error);
    } finally {
      setLoading(false);
      setShowSupporters(true);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full bg-[#111b21] rounded-2xl p-8 relative ${
      forPDF 
        ? "gap-[24px] h-full pb-[40px]" 
        : "gap-[2vh] h-[78vh] pb-[10vh] overflow-hidden"
    }`}>
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

      <MotionP
        initial={forPDF ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#8696a0] text-sm font-bold uppercase tracking-widest z-10"
      >
        That&apos;s a wrap!
      </MotionP>

      <div className="flex flex-col items-center gap-2 z-10 text-center">
        <MotionP
          initial={forPDF ? false : { scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[#e9edef] text-4xl font-bold"
        >
          OurChatStory
        </MotionP>
        <MotionP
          initial={forPDF ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-[#25d366] text-lg"
        >
          Your chats tell a story.
        </MotionP>
      </div>

      <MotionDiv
        initial={forPDF ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="z-[10002] bg-[#202c33] p-6 rounded-lg max-w-[85%] text-center relative"
      >
        <p className="text-[#d1d7db] text-md mb-4">
          Enjoyed your wrapped? Help us keep the servers running! ☕
        </p>
        <a
          href="https://www.buymeacoffee.com/whatsappwrapped"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            width={160}
            height={40}
          />
        </a>
        {!forPDF && (
          <div className="mt -mb-2">
            <button
              onClick={fetchSupporters}
              disabled={loading}
              className="text-xs text-[#8696a0] hover:text-[#25d366] transition-colors hover:underline disabled:opacity-50"
            >
              {loading ? "Loading..." : "Meet our supporters"}
            </button>
          </div>
        )}
      </MotionDiv>

      {onSharePDF && (
        <MotionDiv
          initial={forPDF ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="z-[10002] w-[85%] relative"
        >
          <MotionButton
            whileHover={isSharing ? {} : { scale: 1.05 }}
            whileTap={isSharing ? {} : { scale: 0.95 }}
            onClick={isSharing ? undefined : onSharePDF}
            disabled={isSharing}
            className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold text-lg transition-all ${
              isSharing 
                ? "bg-[#25d366] text-[#111b21] opacity-80 cursor-wait" 
                : "bg-[#25d366] text-[#111b21] hover:bg-[#1ebe5d] cursor-pointer"
            }`}
          >
            {isSharing ? (
              <>
                <div className="w-5 h-5 border-2 border-[#111b21] border-t-transparent rounded-full animate-spin" />
                Preparing...
              </>
            ) : (
              <>
                <HiShare size="1.2em" />
                Share
              </>
            )}
          </MotionButton>
        </MotionDiv>
      )}

      <div className="flex flex-col items-center gap-2 z-[10002] relative">
        <p className="text-[#8696a0] text-sm">Follow us for updates</p>
        <div className="flex gap-3">
          <a
            href="https://twitter.com/ourchatstory"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#1DA1F2] hover:bg-[rgba(29,161,242,0.1)] rounded-full transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size="1.2em" />
          </a>
          <a
            href="https://www.instagram.com/ourchatstory.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#E1306C] hover:bg-[rgba(225,48,108,0.1)] rounded-full transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size="1.2em" />
          </a>
        </div>
      </div>

      <SupportersModal
        isOpen={showSupporters}
        onClose={() => setShowSupporters(false)}
        supporters={supporters}
        loading={loading}
      />
    </div>
  );
};

export default ThankCard;
