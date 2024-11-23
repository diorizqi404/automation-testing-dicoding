import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest, // Menambahkan globals untuk jest
      },
    },
  },
  pluginJs.configs.recommended,
];