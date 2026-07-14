import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "create-next-mui",
  description: "The fastest way to create a nextjs and mui project.",
};

export default function Layout({ children }: LayoutProps<"/">) {
  const basePath =
    process.env.NODE_ENV === "production" ? "/create-next-mui" : "";

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: "static",
              api: `${basePath}/api/search`,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
