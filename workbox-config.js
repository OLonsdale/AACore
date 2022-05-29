module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,html,json,svg,png,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};