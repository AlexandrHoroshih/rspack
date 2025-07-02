const { ModuleFederationPlugin } = require("@rspack/core").container;
const { SubresourceIntegrityPlugin } = require("@rspack/core").experiments;

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	target: "web",
	output: {
		crossOriginLoading: "anonymous"
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			filename: "container-file.js",
			library: {
				type: "commonjs-module"
			},
			exposes: {
				"./test": "./test",
				"./test2": ["./init-module", "./test2"],
				".": "./main"
			}
		}),
		new SubresourceIntegrityPlugin()
	]
};
