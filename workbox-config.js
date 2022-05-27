module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,html,svg,png,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};