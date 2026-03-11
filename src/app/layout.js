import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The EPIX Initiative | Building Africa's Next Generation of Health Leaders",
  description: "We train young Africans to collect data, lead research, and design solutions that work for their communities. Education + Data + Research = Impact.",
  keywords: "EPIX Initiative, health research, Africa, public health, education, data, research, Nigeria, health leaders, community health",
  authors: [{ name: "The EPIX Initiative" }],
  creator: "The EPIX Initiative",
  publisher: "The EPIX Initiative",
  openGraph: {
    title: "The EPIX Initiative | Building Africa's Health Leaders",
    description: "We train young Africans to collect data, lead research, and design solutions that work for their communities.",
    url: "https://epixinitiative.org",
    siteName: "The EPIX Initiative",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The EPIX Initiative - Building Africa's Next Generation of Health Leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The EPIX Initiative | Building Africa's Health Leaders",
    description: "We train young Africans to collect data, lead research, and design solutions that work for their communities.",
    images: ["/images/og-image.jpg"],
    creator: "@epixinitiative",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Security Headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
