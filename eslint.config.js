import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default defineConfig(
	globalIgnores([
		"dist",
		".wrangler",
		".react-router/",
		"worker-configuration.d.ts",
	]),
	eslint.configs.recommended,
	tseslint.configs.recommended,
	prettierConfig,
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "^_",
				},
			],
		},
	}
);
