import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import FloatingActions from "@/components/floating-actions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chhotkan Packers and Movers - Professional Moving Services",
  description: "Complete packing and moving solutions for any conceivable kind of goods with cutting-edge methods focused on quality.",
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
