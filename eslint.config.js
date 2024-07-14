import config, { DEFAULT_IGNORES } from "@huntabyte/eslint-config";

const ignores = ["**/extended-types"];

export default config({ svelte: true, ignores: [...DEFAULT_IGNORES, ...ignores] })
	.override("antfu/typescript/rules", {
		rules: {
			"ts/consistent-type-definitions": "off",
		},
	})
	.override("antfu/javascript/rules", {
		rules: {
			"no-unused-expressions": "off",
		},
	});
