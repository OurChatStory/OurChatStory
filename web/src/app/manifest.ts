import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'OurChatStory - WhatsApp Wrapped',
		short_name: 'OurChatStory',
		description:
			'Discover your WhatsApp Wrapped! Analyze your chat history with beautiful visualizations.',
		start_url: '/',
		display: 'standalone',
		background_color: '#111b21',
		theme_color: '#111b21',
		icons: [
			{
				src: '/favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon',
			},
			{
				src: '/logo192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/logo512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
