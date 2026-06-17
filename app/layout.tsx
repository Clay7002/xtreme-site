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
  title: "Xtreme Collision Repair | Collision Repair in Euless, TX",
  description:
    "Professional collision repair, auto body repair, hail damage repair, paint refinishing, and insurance claim help in Euless, Texas.",
  keywords: [
    "collision repair Euless TX",
    "auto body repair Euless TX",
    "body shop Euless TX",
    "hail damage repair Euless TX",
    "insurance collision repair Euless TX",
    "auto paint repair Euless TX",
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
