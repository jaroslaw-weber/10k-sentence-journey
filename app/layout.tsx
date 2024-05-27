
import type { Metadata } from "next";
import { Inter, Gaegu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const koreanFont = Gaegu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "10k sentence journey",
  description: "learn korean by reading 10k sentences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={koreanFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
