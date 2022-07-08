module.exports = {
	content: ["./views/**/*.twig"],
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
				'h1sm': '35px',
				'h1md': '50px',
				'h1lg': '79px',

				'h2sm': '28px',
				'h2md': '36px',
				'h2lg': '45px',
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
