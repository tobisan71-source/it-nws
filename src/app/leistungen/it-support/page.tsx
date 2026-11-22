import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "IT-Support für KMU in Therwil & Basel",
  description:
    "Persönlicher IT-Support für KMU in Therwil, Basel und der Nordwestschweiz: Störungen beheben, Systeme betreuen — ein Ansprechpartner statt Hotline.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · IT-Support",
  title: "Wenn etwas hakt, hilft jemand, der Ihre IT kennt",
  lead: "Störungen ohne lange Wartezeiten — remote oder vor Ort in der Region. Damit Ihr Team weiterarbeiten kann.",
  intro: [
    "Wenn Drucker, E-Mail oder ein Arbeitsplatz streikt, stehen Aufträge still. Sie brauchen keine anonyme Hotline — sondern jemanden, der Ihre Umgebung kennt und Probleme zügig aus dem Weg räumt.",
    "IT NWS ist der persönliche Ansprechpartner für KMU, Selbständige und Vereine in Therwil, Basel und der Nordwestschweiz: erreichbar, verständlich und mit Blick auf den ganzen Betrieb.",
  ],
  problems: [
    "Wiederkehrende Störungen, die niemand nachhaltig klärt",
    "Niemand fühlt sich «zuständig» — Hilferufe landen bei der Geschäftsleitung",
    "Lange Ausfallzeiten, weil der nächste Termin weit weg ist",
    "Externe Helfer kennen Ihre Systeme nicht und starten jedes Mal bei null",
  ],
  risks: [
    "Produktivitätsverlust und Frust im Team",
    "Verlorene Kundenkontakte, wenn Kommunikation ausfällt",
    "Teure Notfälle statt planbarer Betreuung",
    "Wissen steckt in einem Kopf — oder gar nirgends",
  ],
  solution:
    "Erreichbarer Support mit Kontext zu Ihren Systemen — remote, wenn es schneller geht, oder vor Ort in der Region. Sie haben ein Gesicht statt Ticket-Chaos und wissen, wen Sie anrufen.",
  solutionPoints: [
    "Störungen ohne lange Wartezeiten",
    "Vor Ort in Therwil, Basel und Umgebung",
    "Remote, wenn es den Betrieb schneller wieder flott macht",
    "Damit Ihr Team weiterarbeiten kann",
  ],
  benefits: [
    {
      title: "Weniger IT-Stress",
      text: "Probleme landen beim richtigen Ansprechpartner — nicht auf dem Schreibtisch der Geschäftsleitung.",
    },
    {
      title: "Schnellere Wiederaufnahme",
      text: "Kürzere Ausfälle bedeuten: Aufträge, Termine und Kommunikation laufen weiter.",
    },
    {
      title: "Ein Gesicht statt Hotline",
      text: "Jemand, der Ihre IT kennt — und den Sie wirklich erreichen.",
    },
    {
      title: "Passend für kleine Teams",
      text: "Ohne Enterprise-Overhead, mit klarer Sprache und regionaler Nähe.",
    },
  ],
  topics: [
    {
      title: "Störungen ohne lange Wartezeiten",
      text: "Ziel ist nicht ein Ticket-Status, sondern dass Arbeit wieder möglich ist — mit realistischer Erwartung: Antwort in der Regel innerhalb eines Werktags.",
    },
    {
      title: "Vor Ort in der Region",
      text: "Wenn Remote nicht reicht, kommt Hilfe in die Nordwestschweiz — kurze Wege statt anonymer Fernwartung aus dem Ausland.",
    },
    {
      title: "Remote, wenn es schneller geht",
      text: "Viele Störungen lassen sich ohne Anfahrt lösen. Entscheidend ist, was Ihren Betrieb zuerst wieder handlungsfähig macht.",
    },
    {
      title: "Damit Ihr Team weiterarbeiten kann",
      text: "Support ist kein Selbstzweck: Der Nutzen ist weniger Stillstand und mehr Ruhe für Aufträge und Kunden.",
    },
  ],
  faq: [
    {
      q: "Wie schnell melden Sie sich?",
      a: "In der Regel innerhalb eines Werktags — persönlich, nicht über eine Hotline.",
    },
    {
      q: "Kommen Sie vor Ort?",
      a: "Ja, in Therwil, Basel und der Region Nordwestschweiz — wenn es sinnvoller ist als remote.",
    },
    {
      q: "Für welche Betriebsgrössen?",
      a: "Besonders für KMU, Selbständige und Vereine ohne eigene IT-Abteilung.",
    },
  ],
  ctaLabel: "Störung schildern — wir melden uns",
  ctaHref: "/kontakt",
};

export default function ItSupportPage() {
  return <ServiceDetail content={content} />;
}
