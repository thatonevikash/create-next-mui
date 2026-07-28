import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The fastest CLI for setting up NextJS & MaterialUI - Next MUI",
  description:
    "The fastest way to start with nextjs and mui. NextMUI eliminates all the hassle for setting up a fresh project with nextjs and material-ui combined.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
