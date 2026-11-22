import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Backup & Wiederherstellung für KMU",
  description:
    "Datensicherung mit Prüfungen und Wiederherstellung für KMU in Therwil und der Nordwestschweiz — damit Firmendaten nach Ausfall oder Angriff wieder verfügbar sind.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · Backup",
  title: "Backups, die im Ernstfall wirklich greifen",
  lead: "Verstehen, was gesichert ist — regelmässig prüfen — Wiederherstellung üben. Damit Sie nach einem Zwischenfall weiterarbeiten können.",
  intro: [
    "Ein Backup, das niemand getestet hat, ist eine Hoffnung — keine Absicherung. Entscheidend ist nicht, ob irgendwo Dateien liegen, sondern ob Sie Daten und Betrieb zurückholen können.",
    "Für KMU in der Nordwestschweiz bedeutet das: nachvollziehbare Sicherung, klare Zuständigkeit und ein Ansprechpartner, der im Ernstfall nicht erst die Umgebung kennenlernen muss.",
  ],
  problems: [
    "«Irgendwie in der Cloud» — ohne Plan, was fehlt",
    "Externe Platten ohne Konzept und ohne Prüfung",
    "Nie getestet, ob eine Wiederherstellung funktioniert",
    "Unklarheit, welche Systeme und Postfächer überhaupt gesichert sind",
  ],
  risks: [
    "Endgültiger Datenverlust nach Defekt, Ransomware oder Fehlbedienung",
    "Lange Ausfälle, weil niemand weiss, wie man zurückkommt",
    "Teure Datenrettung statt planbarer Absicherung",
    "Falsches Sicherheitsgefühl («wir haben doch OneDrive»)",
  ],
  solution:
    "Ein nachvollziehbares Sicherungskonzept inklusive Prüfung der Wiederherstellung. Sie wissen, was geschützt ist — und dass Sie im Ernstfall wieder handlungsfähig werden.",
  solutionPoints: [
    "Klarheit, was gesichert ist",
    "Regelmässige Prüfung statt Hoffnung",
    "Wiederherstellung, die geübt und nachvollziehbar ist",
    "Weiterarbeiten nach Hardware-Defekt, Angriff oder Fehlklick",
  ],
  benefits: [
    {
      title: "Ruhe bei Zwischenfällen",
      text: "Hardware-Defekt, Ransomware oder Fehlbedienung — Sie haben einen Plan statt Panik.",
    },
    {
      title: "Schnellere Rückkehr in den Betrieb",
      text: "Getestete Wiederherstellung verkürzt den Stillstand messbar.",
    },
    {
      title: "Weniger Abhängigkeit vom Zufall",
      text: "Nicht «hoffentlich in der Cloud», sondern nachvollziehbar abgesichert.",
    },
    {
      title: "Persönliche Begleitung",
      text: "Jemand aus der Region, der Ihre Sicherung kennt und im Ernstfall erreichbar ist.",
    },
  ],
  topics: [
    {
      title: "Verstehen, was gesichert ist",
      text: "Welche Systeme, Dateien und Postfächer zählen wirklich? Ohne Übersicht bleibt jede Sicherung Stückwerk.",
    },
    {
      title: "Regelmässig prüfen",
      text: "Ein Backup ohne Kontrolle gibt falsche Sicherheit. Prüfungen zeigen, ob die Sicherung noch greift.",
    },
    {
      title: "Wiederherstellung üben",
      text: "Im Ernstfall zählt Übung. Wer einmal erfolgreich zurückgeholt hat, weiss, was möglich ist — und wie lange es dauert.",
    },
    {
      title: "Weiterarbeiten nach einem Zwischenfall",
      text: "Ziel ist nicht Technik-Perfektion, sondern dass Ihr Betrieb wieder läuft und Kundendaten verfügbar sind.",
    },
  ],
  faq: [
    {
      q: "Reicht OneDrive?",
      a: "Oft nicht allein. Sync ist kein Ersatz für ein geprüftes Wiederherstellungskonzept — besonders bei Ransomware oder versehentlichem Löschen.",
    },
    {
      q: "Wie oft prüfen Sie?",
      a: "Im vereinbarten Rhythmus — so, dass Sie wissen, ob die Sicherung noch greift, bevor etwas passiert.",
    },
    {
      q: "Wie lange dauert eine Wiederherstellung?",
      a: "Das hängt von Umfang und System ab. Genau deshalb testen wir: damit Sie realistische Erwartungen haben.",
    },
  ],
  ctaLabel: "Backup prüfen lassen",
  ctaHref: "/kontakt",
};

export default function BackupPage() {
  return <ServiceDetail content={content} />;
}
