import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "KMU",
  description:
    "IT-Betreuung für KMU, Selbständige und Vereine in Therwil, Basel und der Nordwestschweiz — Backup, Security, Microsoft 365.",
};

const points = [
  {
    title: "Weiterarbeiten bei Ausfällen",
    text: "Backup und klare Abläufe, damit ein Cloud-Problem nicht den ganzen Betrieb stoppt.",
  },
  {
    title: "Weniger Abhängigkeit",
    text: "Sie behalten Überblick und Kontrolle — ohne an einen anonymen Anbieter gebunden zu sein.",
  },
  {
    title: "Persönlicher Ansprechpartner",
    text: "Ein Gesicht, das Ihre Systeme kennt. Ideal für kleine Teams ohne eigene IT-Abteilung.",
  },
  {
    title: "Passend für Vereine & Selbständige",
    text: "Schlanke Lösungen, klare Kosten-Logik, ohne Enterprise-Overhead — in Basel und der Nordwestschweiz.",
  },
];

export default function KmuPage() {
  return (
    <>
      <PageHero
        eyebrow="KMU · Vereine · Selbständige"
        title="IT, die den Betrieb schützt — nicht nur die Technik"
        lead="Wenn Systeme ausfallen, stehen Aufträge und Kommunikation still. IT NWS aus Therwil sorgt für Backup, Security und jemanden, den Sie erreichen."
      />

      <section className="border-b border-white/10 bg-navy-800">
        <div className="container-narrow section-pad">
          <div className="grid gap-8 md:grid-cols-2">
            {points.map((item) => (
              <div key={item.title} className="border-t border-teal-500/40 pt-5">
                <h2 className="font-display text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Cloud mit Sicherheitsnetz</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-white">
                Wir ersetzen die Cloud nicht. Wir machen sie sicherer.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Typische Themen: Microsoft 365 absichern, lokale Backups, Zugänge aufräumen,
                Webseite & Hosting, laufende Betreuung ohne Hotline.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <li>
                  <Link href="/microsoft-365-support-basel" className="text-teal-400 hover:underline">
                    M365 Support Basel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/it-support-kmu-nordwestschweiz"
                    className="text-teal-400 hover:underline"
                  >
                    IT-Support KMU NWS
                  </Link>
                </li>
                <li>
                  <Link href="/webseiten-kmu-basel" className="text-teal-400 hover:underline">
                    Webseiten KMU Basel
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href="/kontakt" className="btn-primary">
                KMU-Beratung anfragen
              </Link>
              <Link href="/leistungen" className="btn-secondary">
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bereit für verlässliche IT-Betreuung?"
        lead="Kurzes Erstgespräch aus Therwil — für KMU, Vereine und Selbständige in der Nordwestschweiz."
        primaryLabel="Erstgespräch anfragen"
      />
    </>
  );
}
