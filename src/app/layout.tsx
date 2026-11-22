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
  title: {
    default: "IT NWS – IT mit Sicherheitsnetz.",
    template: "%s | IT NWS",
  },
  description:
    "Persönliche IT-Lösungen aus der Nordwestschweiz: Datensicherung, Cyber Security, PC-Service, Webseiten und KMU-Betreuung. Mehr Sicherheit. Mehr Kontrolle. Weniger Abhängigkeit.",
  keywords: [
    "IT Nordwestschweiz",
    "IT NWS",
    "Backup",
    "Cyber Security",
    "KMU IT",
    "PC-Service",
    "Datensicherung Schweiz",
  ],
  openGraph: {
    title: "IT NWS – IT mit Sicherheitsnetz.",
    description:
      "Lokaler IT-Partner für Privatkunden, Vereine und KMU in der Nordwestschweiz.",
    locale: "de_CH",
    type: "website",
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
