import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { validateEnvVars } from "@/lib/config";

// Validate environment variables on app start
validateEnvVars();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Brian Lockhart - Full Stack Developer & Entrepreneur",
    template: "%s | Brian Lockhart",
  },
  description:
    "Professional portfolio of Brian Lockhart - Full Stack Developer, UNC Chapel Hill Coding Bootcamp graduate, and entrepreneur behind OuterWave ventures.",
  keywords: [
    "Brian Lockhart",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "MERN Stack",
    "UNC Chapel Hill",
    "OuterWave",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Brian Lockhart", url: "https://github.com/DeviScript" }],
  creator: "Brian Lockhart",
  publisher: "Brian Lockhart",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Brian Lockhart - Full Stack Developer & Entrepreneur",
    description:
      "Professional portfolio of Brian Lockhart - Full Stack Developer and entrepreneur.",
    siteName: "Brian Lockhart Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brian Lockhart - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Lockhart - Full Stack Developer & Entrepreneur",
    description:
      "Professional portfolio of Brian Lockhart - Full Stack Developer and entrepreneur.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-white dark:bg-gray-950">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
