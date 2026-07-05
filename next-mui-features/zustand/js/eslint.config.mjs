import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import nextTypeScript from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
      "perfectionist/sort-exports": [
        "warn",
        { order: "asc", type: "line-length" },
      ],
      "perfectionist/sort-named-imports": [
        "warn",
        { order: "asc", type: "line-length" },
      ],
      "perfectionist/sort-named-exports": [
        "warn",
        { order: "asc", type: "line-length" },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          order: "asc",
          ignoreCase: true,
          type: "line-length",
          specialCharacters: "keep",
          internalPattern: ["^@/.*"],
          newlinesBetween: "always",
          groups: [
            "style",
            "react",
            "next",
            "mui",
            "external",
            "internal-lib",
            "internal-hooks",
            "internal-actions",
            "internal-components",
            "internal-auth",
            "internal-routes",
            "internal-theme",
            "internal",
            ["parent", "sibling", "index"],
            "icons",
            "object",
            "unknown",
          ],
          customGroups: {
            value: {
              react: ["react"],
              next: ["^next", "^next/.*", "cookies-next"],
              mui: ["^@mui/.*", "^@emotion/.*"],
              icons: ["^lucide-react$"],
              "internal-lib": ["^@/lib/.*"],
              "internal-actions": ["^@/actions/.*"],
              "internal-hooks": ["^@/hooks/.*"],
              "internal-components": ["^@/components/.*"],
              "internal-auth": ["^@/auth/.*"],
              "internal-routes": ["^@/routes/.*"],
              "internal-theme": ["^@/theme/.*"],
            },
          },
        },
      ],
    },
  },
]);

export default eslintConfig;
