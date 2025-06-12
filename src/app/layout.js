import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Portfolio - Fadhel Naufal A",
  description: "Fadhel Naufal A - Web Developer Portfolio - Badak.dev",
  keywords: [
    "Fadhel Naufal A",
    "Portfolio",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Badak.dev",
  ],
  authors: [
    {
      name: "Fadhel Naufal A",
    },
  ],
  creator: "Fadhel Naufal A",
  openGraph: {
    title: "Portfolio - Fadhel Naufal A",
    description: "Fadhel Naufal A - Web Developer Portfolio",
    siteName: "Badak.dev",
    images: [
      {
        url: "/images/about/logoku-only.svg", // ✅ used here as preview image
        width: "auto",
        height: "auto",
        alt: "Fadhel Naufal A - Web Developer Portfolio",
        priority: true,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/about/logoku-only.svg", // ✅ used here as favicon
    apple: "/images/about/logoku-only.svg", // ✅ used for Apple devices
    shortcut: "/images/about/logoku-only.svg", // optional
    other: [
      // {
      //   rel: "manifest",
      //   url: "/site.webmanifest",
      // },
      {
        rel: "mask-icon",
        url: "/images/about/logoku-only.svg",
        color: "#000000",
      },
    ],
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
