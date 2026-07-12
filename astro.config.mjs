// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://t2del.com",
	integrations: [
		mdx(), 
		sitemap({
			customSitemaps: [
				'https://t2del.com/sitemap-blog.xml',
			],
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	// plugins: [
	// 	tailwindcss(),
	// ],
	vite: {
		plugins: [tailwindcss()],
	},
	output: 'server',
});
