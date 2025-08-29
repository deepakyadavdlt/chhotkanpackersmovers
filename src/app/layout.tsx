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
  title: `${siteConstants.name} | Professional Packers and Movers in Bihar | Reliable Moving Services`,
  description: "Professional packers and movers in Bihar offering complete moving solutions, office relocation, home shifting, vehicle transport, and packing services. Get free quotes and reliable moving services across all 38 districts of Bihar.",
  keywords: [
    "packers and movers bihar",
    "moving services patna",
    "office relocation bihar",
    "home shifting services",
    "vehicle transport bihar",
    "packing services patna",
    "reliable movers bihar",
    "affordable moving company",
    "professional packers bihar",
    "moving company patna",
    "relocation services bihar",
    "storage services patna",
    "warehousing bihar",
    "logistics services bihar",
    "transportation company patna"
  ].join(", "),
  authors: [{ name: siteConstants.author }],
  creator: siteConstants.author,
  openGraph: {
    title: `${siteConstants.name} | Professional Packers and Movers in Bihar | Reliable Moving Services`,
    description: "Professional packers and movers in Bihar offering complete moving solutions, office relocation, home shifting, vehicle transport, and packing services. Get free quotes and reliable moving services across all 38 districts of Bihar.",
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
