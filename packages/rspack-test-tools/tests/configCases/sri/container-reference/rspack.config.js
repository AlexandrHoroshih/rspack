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
			remoteType: "var",
			remotes: {
				abc: "ABC",
				def: "DEF"
			}
		}),
		new SubresourceIntegrityPlugin()
	]
};
