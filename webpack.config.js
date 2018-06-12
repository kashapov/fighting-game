module.exports = {
	entry: './assets/scripts/game.js',
	output: {
		filename: "bundle.js"
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	devtool: "source-map"
};