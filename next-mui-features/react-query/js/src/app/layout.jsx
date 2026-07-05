import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { TanStackProvider } from "@/lib/tanstack-provider";

import { ThemeProvider } from "@/theme/theme-provider";

// ---------------------------------------------------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "create-next-mui",
  description: "The fastest way to scaffold Nextjs + MUI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <TanStackProvider> {children} </TanStackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
