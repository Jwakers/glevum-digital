import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://penumbradigital"),
  title: {
    default: "Penumbra Digital | Get Seen in Gloucester",
    template: "%s | Penumbra Digital",
  },
  description:
    "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Penumbra Digital",
  category: "business",
  openGraph: {
    type: "website",
    url: "https://penumbradigital",
    siteName: "Penumbra Digital",
    title: "Penumbra Digital | Get Seen in Gloucester",
    description:
      "Bold websites, local visibility, and practical digital support for Gloucester small businesses.",
    locale: "en_GB",
    // images: [
    //   {
    //     url: "/og-image.svg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Penumbra Digital - local digital support for Gloucester small businesses",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penumbra Digital | Get Seen in Gloucester",
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
      className={`${bodyFont.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        {children}
        <footer className="border-t border-outline-variant py-8 text-center text-xs font-mono text-outline uppercase tracking-widest bg-background">
          &copy; {new Date().getFullYear()} Penumbra Digital · Bold digital
          support for Gloucester small businesses.
        </footer>
      </body>
    </html>
  );
}
