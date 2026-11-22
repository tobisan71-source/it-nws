import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Remote-Support für KMU | IT NWS Nordwestschweiz",
  description:
    "Schnelle IT-Hilfe aus der Ferne für KMU — persönlicher Ansprechpartner statt Hotline. Damit Störungen den Betrieb nicht unnötig lange stoppen.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · Remote-Support",
  title: "Schnelle Hilfe aus der Ferne — mit jemandem, den Sie kennen",
  lead: "Viele Störungen lassen sich remote lösen: weniger Wartezeit, weniger Stillstand, persönlicher Ansprechpartner statt anonymer Hotline.",
  intro: [
    "Wenn E-Mail, Arbeitsplatz oder Drucker streikt, zählt jede Stunde. Remote-Support bringt Hilfe dorthin, wo Ihr Team arbeitet — ohne dass jemand auf eine Anfahrt warten muss, wenn sie nicht nötig ist.",
    "IT NWS verbindet Fernhilfe mit persönlicher Betreuung in der Nordwestschweiz: Sie sprechen mit jemandem, der Ihre Umgebung kennt — und der vor Ort nachzieht, wenn Remote nicht reicht.",
  ],
  problems: [
    "Kleine Störungen blockieren den ganzen Arbeitstag",
    "Hotlines kennen Ihre Systeme nicht und starten jedes Mal bei null",
    "Anfahrt für jedes Problem kostet Zeit, die der Betrieb nicht hat",
    "Niemand ist erreichbar, wenn es morgens oder vor Kundenterminen brennt",
  ],
  risks: [
    "Unnötig lange Ausfälle und verlorene Produktivität",
    "Frust im Team und Druck auf die Geschäftsleitung",
    "Verzögerte Kundenkommunikation, wenn Postfach oder Tools haken",
    "Teure Vor-Ort-Einsätze für Probleme, die remote lösbar wären",
  ],
  solution:
    "Erreichbarer Remote-Support mit Kontext zu Ihren Systemen: schnelle Fernhilfe, klare Sprache und ein Gesicht statt Ticket-Chaos — ergänzt um Vor-Ort-Hilfe in der Region, wenn es sinnvoller ist.",
  solutionPoints: [
    "Schnellere Wiederaufnahme der Arbeit",
    "Persönlicher Ansprechpartner statt Callcenter",
    "Weniger Anfahrt, wenn Fernhilfe reicht",
    "Nahtloser Wechsel zu Vor-Ort, wenn nötig",
  ],
  benefits: [
    {
      title: "Weniger Stillstand",
      text: "Störungen werden oft schneller behoben, weil die Hilfe ohne Wartezeit auf Anfahrt starten kann.",
    },
    {
      title: "Ein Gesicht, das Ihre IT kennt",
      text: "Keine anonyme Hotline: jemand, der Ihre Umgebung versteht und gezielt hilft.",
    },
    {
      title: "Flexibel für den Alltag",
      text: "Remote, wenn es schneller geht — vor Ort in Therwil, Basel und Umgebung, wenn es nötig ist.",
    },
    {
      title: "Entlastung der Geschäftsleitung",
      text: "IT-Probleme landen beim richtigen Ansprechpartner — nicht dauerhaft auf Ihrem Schreibtisch.",
    },
  ],
  topics: [
    {
      title: "Schnelle Fernhilfe",
      text: "Viele Themen — Zugänge, E-Mail, Arbeitsplatz, Einstellungen — lassen sich remote klären, ohne den Betrieb unnötig zu unterbrechen.",
    },
    {
      title: "Persönlicher Ansprechpartner",
      text: "Sie wissen, wen Sie erreichen. Antwort in der Regel innerhalb eines Werktags — klar und ohne Ticket-Labyrinth.",
    },
    {
      title: "Sicher und nachvollziehbar",
      text: "Fernzugriff nur, wenn Sie einverstanden sind — mit dem Ziel, dass Arbeit wieder möglich ist und Sie den Überblick behalten.",
    },
    {
      title: "Wenn Remote nicht reicht",
      text: "Dann kommt Hilfe vor Ort in der Nordwestschweiz. Entscheidend ist, was Ihren Betrieb zuerst wieder handlungsfähig macht.",
    },
  ],
  faq: [
    {
      q: "Muss ich Software installieren?",
      a: "Nur was für die Fernhilfe nötig ist — und nur mit Ihrem Einverständnis. Wir erklären kurz, was passiert.",
    },
    {
      q: "Ersetzen Sie Vor-Ort-Support?",
      a: "Nein. Remote ist oft der schnellste Weg. Wenn Hardware, Netz oder Situation vor Ort besser gelöst wird, kommen wir in die Region.",
    },
    {
      q: "Für wen ist Remote-Support geeignet?",
      a: "Besonders für KMU, Selbständige und Vereine ohne eigene IT-Abteilung — überall dort, wo schnelle Erreichbarkeit zählt.",
    },
  ],
  ctaLabel: "Remote-Hilfe anfragen",
  ctaHref: "/kontakt",
};

export default function RemoteSupportPage() {
  return <ServiceDetail content={content} />;
}
