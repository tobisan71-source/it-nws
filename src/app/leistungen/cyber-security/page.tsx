import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Cyber Security für KMU Therwil & Basel",
  description:
    "Praxisnahe IT-Sicherheit für KMU in Therwil und Basel: Zugänge absichern, Angriffsfläche reduzieren und klare Abläufe — damit Kundendaten und Betrieb geschützt bleiben.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · Cyber Security",
  title: "Schutz, der Ihren Betrieb und Ihre Kundendaten ernst nimmt",
  lead: "Weniger Angriffsfläche, sichere Zugänge, Sensibilisierung ohne Angstmache — und schnelle Reaktion bei Verdacht.",
  intro: [
    "Angriffe und Fehlklicks treffen kleine Betriebe genauso wie grosse. Sie brauchen keinen Konzern-Security-Stack — sondern Massnahmen, die im Alltag greifen und verständlich bleiben.",
    "IT NWS begleitet KMU in Therwil, Basel und der Nordwestschweiz mit praxisnahem Grundschutz: Prioritäten statt Panik, persönlicher Ansprechpartner statt anonymem Alarm.",
  ],
  problems: [
    "Schwache oder geteilte Passwörter und unklare Zugänge",
    "Unsichere Fernzugriffe und Geräte ohne Überblick",
    "Unsicherheit bei Phishing und verdächtigen Mails",
    "Viele Tools, aber keine klare Reihenfolge, was zuerst zählt",
  ],
  risks: [
    "Erpressung und Betriebsstillstand",
    "Datenverlust und Reputationsschaden bei Kundinnen und Kunden",
    "Gesetzliche Folgen rund um Datenschutz",
    "Falsches Gefühl von Sicherheit durch «ein Antivirus»",
  ],
  solution:
    "Grundschutz mit Prioritäten: was zuerst, was danach — verständlich erklärt und betreut. Ihr Team bleibt handlungsfähig, Kundendaten bleiben besser geschützt.",
  solutionPoints: [
    "Weniger Angriffsfläche im Alltag",
    "Sichere Zugänge statt geteilter Logins",
    "Sensibilisierung ohne Angstmache",
    "Klarer Weg, wenn etwas verdächtig wirkt",
  ],
  benefits: [
    {
      title: "Ruhigeres Gewissen",
      text: "Sie wissen, welche Massnahmen greifen — und was der nächste sinnvolle Schritt ist.",
    },
    {
      title: "Geschützte Kundendaten",
      text: "Zugang, Ablage und Kommunikation werden so organisiert, dass Risiken sinken.",
    },
    {
      title: "Handlungsfähiges Team",
      text: "Mitarbeitende erkennen typische Fallen und wissen, wen sie bei Verdacht erreichen.",
    },
    {
      title: "Massnahmen mit Mass",
      text: "Kein Overkill: Prioritäten, die zu Ihrem Betrieb passen — nicht zu einer Konzern-Checkliste.",
    },
  ],
  topics: [
    {
      title: "Weniger Angriffsfläche",
      text: "Offene Zugänge, alte Geräte und unklare Freigaben sind oft das grösste Risiko — nicht fehlende High-End-Tools.",
    },
    {
      title: "Sichere Zugänge",
      text: "Wer darf worauf? Geteilte Konten und schwache Passwörter machen aus kleinen Fehlern grosse Schäden.",
    },
    {
      title: "Sensibilisierung ohne Angstmache",
      text: "Kurze, verständliche Hinweise statt Panik. Ziel: richtige Reflexe bei Phishing und unklaren Anfragen.",
    },
    {
      title: "Schnelle Reaktion bei Verdacht",
      text: "Wenn etwas komisch wirkt, zählt Erreichbarkeit. Ein Ansprechpartner in der Region verkürzt die kritische Zeit.",
    },
  ],
  faq: [
    {
      q: "Reicht ein Antivirus?",
      a: "Als Baustein ja — allein selten. Zugänge, Backup und klare Abläufe zählen oft mehr.",
    },
    {
      q: "Brauchen wir Schulungen?",
      a: "Oft reicht gezielte Sensibilisierung: typische Fallen, was tun bei Verdacht, wen anrufen.",
    },
    {
      q: "Was kostet ein sinnvoller Einstieg?",
      a: "Das hängt vom Ist-Zustand ab. Im Gespräch klären wir Quick Wins und Prioritäten — ohne Verkaufsdruck.",
    },
  ],
  ctaLabel: "Security-Check anfragen",
  ctaHref: "/kontakt",
};

export default function CyberSecurityPage() {
  return <ServiceDetail content={content} />;
}
