/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "#FBFBFE",
				dark: "#35353F",
				skyblue: "#E9F0FF",
				accent: "#87ADF7"
			},
		},
	},
	plugins: [],
}
