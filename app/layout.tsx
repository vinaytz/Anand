import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Anand K Shukla | Speaker. Author. Thinker.",
  description: "The personal portfolio of Dr. Anand K Shukla. Wisdom, leadership, and storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-gray-300 font-sans selection:bg-white/20`}
      >
        {children}
      </body>
    </html>
  );
}
