// Larvel mix

let mix = require('laravel-mix');
let args = require('yargs');
let purgeFromHTML = require('purgecss-from-html');

let path = require('path');
mix.setPublicPath('./dist')

console.log( 'purge' );
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


