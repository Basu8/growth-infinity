import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";  
import CookieConsent from "./components/CookieConsent"; 

// Configure fonts (mix of new Geist + your old fonts)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased">
          <Navbar />
          {children}
        <CookieConsent />
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: "Growth Infinity | Digital Marketing Services",
  description:
    "Growth Infinity provides SEO, Google Ads, Social Media Marketing, and Website Growth solutions for businesses.",
  keywords: [
    "digital marketing agency",
    "seo services",
    "google ads management",
    "social media marketing",
  ],
  openGraph: {
    title: "Growth Infinity",
    description: "Grow your business with data-driven digital marketing.",
    url: "https://growthinfinity.com",
    siteName: "Growth Infinity",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
