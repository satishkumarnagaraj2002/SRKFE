import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shito Ryu Karate Federation of England | SRKFE",
  description: "Preserving tradition. Developing champions. Inspiring the next generation. The official website of the Shito Ryu Karate Federation of England.",
  keywords: ["Shito Ryu", "Karate", "England", "SRKFE", "Martial Arts", "Kumite", "Kata", "National Team"],
  openGraph: {
    title: "Shito Ryu Karate Federation of England",
    description: "Preserving tradition. Developing champions. Inspiring the next generation.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
