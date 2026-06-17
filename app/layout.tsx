import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xtreme Collision Repair | Collision Repair in Carrollton, TX",
  description:
    "5-Star collision repair in North Texas for Carrollton, Addison, Dallas, Plano, Frisco, Richardson and surrounding areas.",
  keywords: [
    "collision repair Carrollton TX",
    "auto body repair Carrollton TX",
    "body shop Carrollton TX",
    "hail damage repair Carrollton TX",
    "insurance collision repair Carrollton TX",
    "auto paint repair Carrollton TX",
    "collision repair North Texas",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
