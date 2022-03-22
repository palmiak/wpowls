// Larvel mix

let mix = require('laravel-mix');
let args = require('yargs');
let purgeFromHTML = require('purgecss-from-html');

let path = require('path');
mix.setPublicPath('./dist');

if ( args.argv.env == 'purge' ) {
	mix
	.postCss("./assets/css/app.css", "./dist/css/app-purge.css", [
		require("tailwindcss"),
		require('postcss-purgecss-laravel')({
			content: ['./stat_test/**/*.html'],
			extractors: [
				{
				extractor: purgeFromHTML,
				extensions: ['html']
				}
			],
			safelist: {
				greedy: [/^ais-/, /^scroll-down$/, /^checkbox-toggle$/, /^hamburger$/]
			}
		}),
	]);
} else {
	mix
	.js('./assets/js/app.js', './dist/js/app.js')
	.js('./assets/js/editor.js', './dist/js/editor.js')
	.postCss("./assets/css/app.css", "./dist/css/app.css", [
		require("tailwindcss"),
	]);

	mix.copyDirectory('./assets/images', './dist/images');
	mix.copyDirectory('./assets/fonts', './dist/fonts');
}

