const { experiments } = require("@rspack/core");

module.exports = {
	mode: "production",
	target: "web",
	entry: {
		a: "./a.js",
		b: "./b.js"
	},
	output: {
		crossOriginLoading: "anonymous"
	},
	plugins: [new experiments.SubresourceIntegrityPlugin()],
	experiments: {
		rspackFuture: {
			bundlerInfo: {
				force: false
			}
		}
	}
};
