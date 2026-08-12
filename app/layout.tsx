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
  title: "Bassam Alzahrani | Certificates & Training",
  description:
    "A curated record of technical courses and cybersecurity training completed by Bassam Alzahrani, a Computer Science student.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Bassam Alzahrani | Certificates & Training",
    description:
      "Technical courses and cybersecurity training completed by Computer Science student Bassam Alzahrani.",
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Bassam Alzahrani certificates and training portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bassam Alzahrani | Certificates & Training",
    description:
      "Technical courses and cybersecurity training completed by Computer Science student Bassam Alzahrani.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
