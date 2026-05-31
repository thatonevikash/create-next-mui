"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import { theme } from "./create-theme";

// ---------------------------------------------------------------

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
