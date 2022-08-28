/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'off-black': '#292525',
				'light-black': '#292525',
				'off-white': '#E8E5DA',
				'ghost-white': '#F4F4F9',

			}
		},
	},
	plugins: [],
}
