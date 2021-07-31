module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				470: '470px',
        500: '500px'
			},
			colors: {
				'next-grey': '#6D7D8B',
				'next-blue': '#1ACC8D',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
