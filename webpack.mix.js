// Larvel mix

let mix = require('laravel-mix');
let args = require('yargs');
let purgeFromHTML = require('purgecss-from-html');

let path = require('path');
mix.setPublicPath('./dist_tw');

if ( args.argv.env == 'purge' ) {
	mix
	.postCss("./assets_tw/css/app.css", "./dist_tw/css/app-purge.css", [
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
	.js('./assets_tw/js/app.js', './dist_tw/js/app.js')
	.js('./assets_tw/js/editor.js', './dist_tw/js/editor.js')
	.postCss("./assets_tw/css/app.css", "./dist_tw/css/app.css", [
		require("tailwindcss"),
	]);

	mix.copyDirectory('./assets_tw/images', './dist_tw/images');
	mix.copyDirectory('./assets_tw/fonts', './dist_tw/fonts');
}

