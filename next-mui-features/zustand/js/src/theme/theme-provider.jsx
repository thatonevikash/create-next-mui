"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "node_modules/@mui/material";

import { theme } from "./create-theme";

// ---------------------------------------------------------------

export function ThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
