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
  title: "Mohamed Shazan | AI Engineer & Data Scientist",
  description:
    "Portfolio of Mohamed Shazan — AI Engineer, Machine Learning Engineer, Data Scientist, and Data Analyst. Building intelligent systems with AI and Machine Learning.",
  keywords: [
    "Mohamed Shazan",
    "AI Engineer",
    "Machine Learning",
    "Data Scientist",
    "Data Analyst",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Shazan" }],
  openGraph: {
    title: "Mohamed Shazan | AI Engineer & Data Scientist",
    description:
      "Building intelligent systems with AI and Machine Learning.",
    url: "https://mohamedshazan.dev",
    siteName: "Mohamed Shazan Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Shazan | AI Engineer & Data Scientist",
    description:
      "Building intelligent systems with AI and Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
