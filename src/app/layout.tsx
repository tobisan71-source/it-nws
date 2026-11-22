import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://it-nws.ch"),
  title: {
    default: "IT NWS – Lokale IT in Therwil & der Nordwestschweiz",
    template: "%s | IT NWS",
  },
  description:
    "Persönliche IT aus Therwil: Datensicherung, Cyber Security, PC-Service, Webseiten und KMU-Betreuung in Basel und der Nordwestschweiz. Mehr Sicherheit, mehr Kontrolle, weniger Abhängigkeit.",
  keywords: [
    "IT Nordwestschweiz",
    "IT NWS",
    "IT Therwil",
    "IT Basel",
    "Basel-Landschaft",
    "Backup",
    "Cyber Security",
    "KMU IT",
    "PC-Service",
    "Datensicherung Schweiz",
  ],
  openGraph: {
    title: "IT NWS – Lokale IT in Therwil & der Nordwestschweiz",
    description:
      "Lokaler IT-Partner in Therwil für Privatkunden, Vereine und KMU in Basel und der Nordwestschweiz.",
    locale: "de_CH",
    type: "website",
    url: "https://it-nws.ch",
    siteName: "IT NWS",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className={`${inter.variable} ${poppins.variable} min-h-screen bg-navy-800 font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
