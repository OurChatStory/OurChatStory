import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn - OurChatStory Blog",
  description: "Learn what you can do with OurChatStory.co - WhatsApp Chat Analysis and Insights",
};

const pages = [
  "Initiating WhatsApp Chats Relationship Dynamics Uncovered by OurChatStory",
  "Longest WhatsApp Conversations Analyzing Chat Endurance with OurChatStory",
  "Peak Chat Times Are You a Morning or Night WhatsApp User Discover with OurChatStory",
  "Understanding Relationship Gaps WhatsApp Silent Days Analysis by OurChatStory",
  "Understanding Relationship Gaps WhatsApp Silent Days Analysis",
  "WhatsApp Chat Analysis Revealed Discover Your Unique Chat Persona with OurChatStory",
  "WhatsApp Ranking See Your Global Chat Position on OurChatStory",
  "WhatsApp Reply Time Are You Quick or Slow Insights from OurChatStory",
  "Your Most Active WhatsApp Day Insights and Fun Facts from OurChatStory",
  "Track Your Year in Messages",
];

export default function BlogsPage() {
  return (
    <div className="p-12 bg-[#111b21] min-h-screen">
      <h1 className="text-6xl font-bold text-[#e9edef] mb-8">
        Learn what you can do with OurChatStory.co
      </h1>
      {pages.map((page) => (
        <div key={page} className="mb-4">
          <Link
            href={`/learn/${page}.html`}
            className="text-3xl text-[#25d366] hover:text-[#1da851] transition-colors"
          >
            {page}
          </Link>
        </div>
      ))}
    </div>
  );
}
