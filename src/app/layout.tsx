import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import FloatingActions from "@/components/floating-actions";
import { siteConstants } from "@/constants/siteConstants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConstants.name} | Packers And Movers In Patna`,
  description: "Professional packers and movers in Bihar offering complete moving solutions, office relocation, home shifting, vehicle transport, and packing services. Get free quotes and reliable moving services across all 38 districts of Bihar.",
  keywords: [
    "packers and movers patna",
    "best packers movers in patna",
    "chhotkan packers and movers",
    "packers movers in patna",
    "packers movers near me",
    "packing services patna",
    "transportation company in patna",
    "packers movers in kankarbagh",
    "packers and movers in boring road",
    "packers and movers in gola road",
    "best packers and movers",
    "packers in patna",
    "warehousing bihar",
    "movers in patna",
    "transportation company patna"
  ].join(", "),
  authors: [{ name: siteConstants.author }],
  creator: siteConstants.author,
  openGraph: {
    title: `${siteConstants.name} | Packers And Movers In Patna`,
    description: "Professional packers and movers in Patna offering complete moving solutions, office relocation, home shifting, vehicle transport, and packing services. Get free quotes and reliable moving services across all 38 districts of Bihar.",
    url: siteConstants.url,
    siteName: siteConstants.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: `${siteConstants.name} - Professional Packers and Movers in Bihar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConstants.name} | Professional Packers and Movers in Bihar | Reliable Moving Services`,
    description: "Professional packers and movers in Bihar offering complete moving solutions, office relocation, home shifting, vehicle transport, and packing services. Get free quotes and reliable moving services across all 38 districts of Bihar.",
    creator: siteConstants.author,
    images: ["/logo.png"],
  },
  metadataBase: new URL(siteConstants.url),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
