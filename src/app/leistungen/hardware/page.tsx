import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "PCs & Arbeitsplätze für KMU | IT NWS Therwil",
  description:
    "Passende PCs, Notebooks und Peripherie für KMU — Beratung, Beschaffung und Einrichtung mit persönlicher Betreuung aus der Nordwestschweiz.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · Hardware",
  title: "Arbeitsplätze, die zum Betrieb passen — nicht zum Katalog",
  lead: "PCs, Notebooks, Arbeitsstationen und Peripherie: klare Empfehlung, saubere Einrichtung, ruhige Migration — damit Ihr Team produktiv weiterarbeiten kann.",
  intro: [
    "Neue Geräte sind kein Selbstzweck. Entscheidend ist, ob Mitarbeitende störungsfrei arbeiten, Daten sicher ankommen und niemand tagelang mit Setup und Altlasten kämpft.",
    "IT NWS begleitet KMU in Therwil, Basel und der Nordwestschweiz bei der Auswahl und Einführung: was Sie wirklich brauchen, was überflüssig ist — und wer erreichbar bleibt, wenn etwas hakt.",
  ],
  problems: [
    "Geräte wurden «günstig» gekauft und passen nicht zum Alltag",
    "Alte Rechner bremsen Aufträge, Buchhaltung oder Kundentermine",
    "Niemand hat Zeit für Einrichtung, Datenübernahme und Rechte",
    "Drucker, Monitore und Zubehör funktionieren «irgendwie» — bis es kritisch wird",
  ],
  risks: [
    "Produktivitätsverlust durch langsame oder unzuverlässige Arbeitsplätze",
    "Datenchaos oder Ausfälle bei ungeplanter Migration",
    "Fehlkäufe und Nachrüstkosten, weil der Bedarf unklar war",
    "Sicherheitslücken bei Altgeräten ohne Betreuung",
  ],
  solution:
    "Arbeitsplätze und Peripherie mit Nutzen im Fokus: passende Empfehlung, nachvollziehbare Beschaffung, Einrichtung und Migration so, dass Ihr Team schnell wieder produktiv ist — mit persönlichem Ansprechpartner statt Shop-Hotline.",
  solutionPoints: [
    "Klare Empfehlung statt Katalog-Overkill",
    "Beschaffung, die zum Budget und zur Nutzung passt",
    "Einrichtung und Migration mit weniger Stillstand",
    "Peripherie, die im Betrieb mitläuft — nicht nur «angeschlossen» ist",
  ],
  benefits: [
    {
      title: "Weniger Stillstand bei Gerätewechseln",
      text: "Daten und Arbeitsumgebung kommen geordnet an — Aufträge und Kommunikation laufen weiter.",
    },
    {
      title: "Passende Leistung statt Fehlkauf",
      text: "Sie investieren in das, was Ihr Team braucht — nicht in Specs, die niemand ausnutzt.",
    },
    {
      title: "Ruhigere Einführung",
      text: "Einrichtung, Zugänge und Peripherie sind mitgedacht — weniger Feuerwehr am ersten Tag.",
    },
    {
      title: "Persönliche Begleitung",
      text: "Fragen landen bei jemandem in der Region, der Ihren Betrieb kennt — nicht bei einem anonymen Shop.",
    },
  ],
  topics: [
    {
      title: "PCs, Notebooks & Arbeitsstationen",
      text: "Ob Büro, Werkstatt oder mobiles Arbeiten: Geräte sollen zum Alltag passen — zuverlässig, verständlich betreut und ohne unnötige Komplexität.",
    },
    {
      title: "Beratung vor dem Kauf",
      text: "Was braucht Ihr Team wirklich? Welche Altgeräte lohnen sich noch? Klare Prioritäten sparen Geld und Nerven.",
    },
    {
      title: "Einrichtung & Migration",
      text: "Daten, Programme und Zugänge so übernehmen, dass der Wechsel den Betrieb möglichst wenig bremst.",
    },
    {
      title: "Peripherie im Griff",
      text: "Drucker, Monitore, Eingabegeräte und Zubehör: damit Arbeitsplätze vollständig und störungsärmer laufen.",
    },
  ],
  faq: [
    {
      q: "Verkaufen Sie Hardware wie ein Shop?",
      a: "Nein. Im Fokus stehen passende Empfehlung, Einrichtung und Migration — damit Geräte Ihrem Betrieb dienen, nicht umgekehrt.",
    },
    {
      q: "Übernehmen Sie Daten vom alten Gerät?",
      a: "Ja, als Teil einer geordneten Migration — so, dass wichtige Dateien und Arbeitsabläufe möglichst erhalten bleiben.",
    },
    {
      q: "Für welche Betriebe?",
      a: "Besonders für KMU, Selbständige und Vereine ohne eigene IT-Abteilung — in Therwil, Basel und der Nordwestschweiz.",
    },
  ],
  ctaLabel: "Arbeitsplatz-Bedarf besprechen",
  ctaHref: "/kontakt",
};

export default function HardwarePage() {
  return <ServiceDetail content={content} />;
}
