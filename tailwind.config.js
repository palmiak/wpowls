module.exports = {
	content: ["./views/**/*.twig"],
	theme: {
		extend: {
			colors: {
				"owl-blue": "#006D77",
				"owl-dark-blue": "#00241B",
				"owl-medium-blue": "#83C5BE",
				"owl-light-blue": "#EDF6F9",
				"owl-orange": "#E29578",
				"owl-light-orange": "#FFDDD2",
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
