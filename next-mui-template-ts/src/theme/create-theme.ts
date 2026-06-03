import { createTheme } from "@mui/material";
import { components } from "./core/components";

import { palette } from "./core/palette";
import { typography } from "./core/typography";

import { CONFIG } from "@/config-global";

// ---------------------------------------------------------------

const { defaultMode } = CONFIG;

const defaultFont = "var(--font-geist-sans), Arial, sans-serif";

export const theme = createTheme({
  cssVariables: true,

  palette: { mode: defaultMode, ...palette },

  typography: {
    fontFamily: defaultFont,
    ...typography,
  },

  spacing: "8px",

  components,
});
