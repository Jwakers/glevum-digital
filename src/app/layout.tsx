import type { Metadata } from "next";
import { DM_Serif_Display, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glevum.digital"),
  title: {
    default: "Glevum Digital | Get Seen in Gloucester",
    template: "%s | Glevum Digital",
  },
  description:
    "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Glevum Digital",
  category: "business",
  openGraph: {
    type: "website",
    url: "https://glevum.digital",
    siteName: "Glevum Digital",
    title: "Glevum Digital | Get Seen in Gloucester",
    description:
      "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
    locale: "en_GB",
    // images: [
    //   {
    //     url: "/og-image.svg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Glevum Digital - local digital support for Gloucester small businesses",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glevum Digital | Get Seen in Gloucester",
    description:
      "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
    // images: ["/og-image.svg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${geistMono.variable} ${displayFont.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
