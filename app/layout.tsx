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
  title: "Xtreme Collision Repair | Auto Body & Collision Repair in Carrollton, TX",
  description:
    "Collision repair, auto body repair, insurance claim help, hail damage repair, frame repair, and auto paint repair in Carrollton, TX.",
  keywords: [
    "collision repair Carrollton TX",
    "auto body repair Carrollton TX",
    "body shop Carrollton TX",
    "hail damage repair Carrollton TX",
    "insurance collision repair Carrollton TX",
    "paintless dent repair Carrollton TX",
    "auto frame repair Carrollton TX",
    "insurance claims assistance collision repair",
    "auto paint repair Carrollton TX",
    "North Texas collision repair",
  ],
  icons: {
    icon: "/brand/xtreme-favicon.png",
    shortcut: "/brand/xtreme-favicon.png",
    apple: "/brand/xtreme-favicon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Xtreme Collision Repair",
  url: "https://xtreme-collision-repair.collision-te-9566.chatgpt-team.site",
  telephone: "+1-972-233-0207",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2025 Midway Road, Suite E",
    addressLocality: "Carrollton",
    addressRegion: "TX",
    postalCode: "75006",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:30",
    },
  ],
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=2025%20Midway%20Road%20Suite%20E%20Carrollton%20TX%2075006",
  areaServed: [
    "Carrollton",
    "Addison",
    "Dallas",
    "Plano",
    "Frisco",
    "Richardson",
    "North Texas",
  ],
  priceRange: "$$",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
