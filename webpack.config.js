module.exports = {
	entry: './scripts/main.js',
	output: {
		filename: "bundle.js"
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	devtool: "source-map"
};