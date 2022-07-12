module.exports = {
	content: ["./views/**/*.twig"],
	darkMode: 'class',
	safelist: [
		'top-0',
	],
	theme: {
		extend: {
			colors: {
				"owl-green": "#64906E",
				"owl-light-green": "#86B688",
				"owl-dark-blue": "#273B53",
				"owl-orange": "#CF9963",
				"owl-red": "#B56576",
				"owl-dark-beige": "#E4E4E4",
				"owl-light-beige": "#FAFAFA",
			},
			fontFamily: {
				owlFont: ["n27regular", "sans-serif"],
				owlFontBold: ["n27bold", "sans-serif"],
				owlFontText: ["'Plus Jakarta Sans'", "sans-serif"],
			},
			fontSize: {
				'h1sm': '30px',
				'h1md': '50px',
				'h1lg': '60px',

				'h2sm': '25px',
				'h2md': '35px',
				'h2lg': '40px',

				'h3sm': '18px',
				'h3md': '25px',
				'h3lg': '35px',
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
