import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import MantineThemeProvider from "@/lib/MantineProvider";
import { ColorSchemeScript } from "@mantine/core";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Plugin Mantine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={cn(inter.className, "p-sm")}>
        <MantineThemeProvider>{children}</MantineThemeProvider>
      </body>
    </html>
  );
}
