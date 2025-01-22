/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4169E1',
					foreground: '#ffff'
				},
				link: {
					DEFAULT: '#163aa5',
					foreground: '#ffff'
				}
			}
		}
	},
	plugins: [],
}
