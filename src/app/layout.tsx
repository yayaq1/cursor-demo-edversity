import React from "react";
import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeAwareToast } from "@/components/theme/ThemeAwareToast";

export const metadata: Metadata = {
  title: "Ali Hamza - AI Developer & Computer Science Student",
  description: "Personal portfolio of Ali Hamza, a third-year Computer Science student at NUST specializing in AI development and intelligent software systems.",
  keywords: ["Ali Hamza", "Computer Science", "AI Developer", "NUST", "Portfolio", "Software Engineering"],
  authors: [{ name: "Ali Hamza" }],
  creator: "Ali Hamza",
  publisher: "Ali Hamza",
  metadataBase: new URL("https://alihamza.dev"),
  openGraph: {
    title: "Ali Hamza - AI Developer & Computer Science Student",
    description: "Personal portfolio of Ali Hamza, a third-year Computer Science student at NUST specializing in AI development and intelligent software systems.",
    url: "https://alihamza.dev",
    siteName: "Ali Hamza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Hamza - AI Developer & Computer Science Student",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hamza - AI Developer & Computer Science Student",
    description: "Personal portfolio of Ali Hamza, a third-year Computer Science student at NUST specializing in AI development and intelligent software systems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <ThemeProvider defaultTheme="system" enableSystem>
          {children}
          <ThemeAwareToast />
        </ThemeProvider>
      </body>
    </html>
  );
}
