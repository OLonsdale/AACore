module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,html,json,svg,png,webp,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};