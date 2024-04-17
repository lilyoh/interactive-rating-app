/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					1: '#141518',
					2: '#222832',
					3: '#272E38',
				},
				gray: {
					1: '#9096A2',
				},
				orange: {
					1: '#F87813',
				},
			},
		},
	},
	plugins: [],
};
