import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "WhatsApp Wrapped 2025 - Chat Insights and Analysis | OurChatStory",
	description:
		"Discover your WhatsApp Wrapped! Analyze your chat history with beautiful visualizations, stats, and insights. See your most active days, emoji usage, and more.",
	keywords: [
		"WhatsApp Wrapped",
		"Chat Analysis",
		"WhatsApp Stats",
		"Chat Insights",
		"Message Analytics",
		"OurChatStory",
	],
	openGraph: {
		title: "WhatsApp Wrapped 2025 - Chat Insights and Analysis",
		description: "Discover your WhatsApp Wrapped! Analyze your chat history with beautiful visualizations.",
		type: "website",
		images: [
			{
				url: "https://ourchatstory.co/banner_sdd.png",
				width: 1200,
				height: 630,
				alt: "OurChatStory WhatsApp Wrapped banner",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "WhatsApp Wrapped 2025 - Chat Insights and Analysis",
		description: "Discover your WhatsApp Wrapped! Analyze your chat history with beautiful visualizations.",
		images: ["https://ourchatstory.co/banner_sdd.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#111b21" />
				<meta property="og:image" content="https://ourchatstory.co/banner_sdd.png" />
			</head>
			<body className={`${poppins.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
