import type { Metadata } from "next";
import { ServiceDetail, type ServiceDetailContent } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Microsoft 365 für KMU Basel & Region",
  description:
    "Microsoft 365 verständlich und sicher für KMU in Basel und der Region: E-Mail, Teams, Zugänge und Backup — persönliche Betreuung aus Therwil.",
};

const content: ServiceDetailContent = {
  eyebrow: "Leistungen · Microsoft 365",
  title: "Microsoft 365, das Ihren Alltag erleichtert — und Ihre Daten schützt",
  lead: "E-Mail & Teams zuverlässig nutzen, Zugänge und Rechte im Griff, weniger Chaos bei Dateien — Sicherheit ohne Überforderung.",
  intro: [
    "Outlook, Teams und OneDrive laufen oft «irgendwie». Genau dann entstehen Doppelablagen, unsichere Freigaben und Abhängigkeit vom Zufall — bis etwas Wichtiges fehlt oder in falsche Hände gerät.",
    "IT NWS macht Microsoft 365 für KMU in der Nordwestschweiz verständlich und betreubar: klare Abläufe, Schutz mit Mass und ein persönlicher Ansprechpartner, der nachfragt, bevor es brennt.",
  ],
  problems: [
    "Unklare Freigaben und Ordner, die niemand mehr durchblickt",
    "Verlorene oder unauffindbare Mails und Dateien",
    "Niemand pflegt Lizenzen, Benutzer und Austritte",
    "Unsicherheit bei Phishing und verdächtigen Teams-/Mail-Nachrichten",
  ],
  risks: [
    "Datenlecks durch zu offene Freigaben",
    "Ausfall der Kommunikation, wenn Postfächer oder Zugänge haken",
    "Compliance- und Datenschutz-Probleme bei Kundendaten",
    "Lizenzchaos und Kosten ohne Überblick",
  ],
  solution:
    "Saubere Nutzung von Microsoft 365 mit klaren Abläufen, nachvollziehbaren Rechten und jemandem, der den Überblick behält. Ihr Team arbeitet störungsfreier — Firmendaten bleiben besser geschützt.",
  solutionPoints: [
    "E-Mail und Teams, auf die Sie sich verlassen können",
    "Zugänge und Rechte, die zum Betrieb passen",
    "Weniger Sucherei bei Dateien und Ablagen",
    "Schutz vor typischen Risiken — ohne Technik-Überforderung",
  ],
  benefits: [
    {
      title: "Störungsfreieres Arbeiten",
      text: "Kommunikation und Zusammenarbeit laufen, ohne dass die Geschäftsleitung jede Freigabe klären muss.",
    },
    {
      title: "Geschützte Firmendaten",
      text: "Rechte und Ablagen sind nachvollziehbar — weniger Risiko durch Zufall und Eilig-Freigaben.",
    },
    {
      title: "Weniger Sucherei",
      text: "Klare Strukturen sparen Zeit und Nerven im Alltag.",
    },
    {
      title: "Persönliche Betreuung",
      text: "Fragen landen bei jemandem, der Ihre Umgebung kennt — nicht bei einer anonymen Hotline.",
    },
  ],
  topics: [
    {
      title: "E-Mail & Teams zuverlässig nutzen",
      text: "Wenn Postfach oder Teams streiken, steht der Betrieb. Ziel ist stabile Kommunikation — mit jemandem, den Sie erreichen.",
    },
    {
      title: "Zugänge und Rechte im Griff",
      text: "Neue Mitarbeitende, Austritte, externe Partner: Wer darf was sehen? Klarheit schützt Daten und Nerven.",
    },
    {
      title: "Weniger Chaos bei Dateien",
      text: "Doppelablagen und «Version final_final» kosten Zeit. Eine nachvollziehbare Ablage macht den Unterschied.",
    },
    {
      title: "Sicherheit ohne Überforderung",
      text: "Phishing-Risiken und Grundschutz verständlich — Massnahmen, die im Alltag greifen, nicht nur auf dem Papier.",
    },
  ],
  faq: [
    {
      q: "Brauchen wir alle Apps?",
      a: "Nein. Sinnvoll ist, was Ihr Team wirklich braucht — nicht die maximale Lizenzliste.",
    },
    {
      q: "Was ist mit bestehenden Postfächern?",
      a: "Bestehende Postfächer und Dateien lassen sich in der Regel ordentlich weiterführen — wir klären den Ist-Zustand im Gespräch.",
    },
    {
      q: "Wie schützen wir uns vor Phishing?",
      a: "Durch klare Zugänge, sinnvollen Grundschutz und kurze Sensibilisierung — plus jemanden, den Sie bei Verdacht erreichen.",
    },
  ],
  ctaLabel: "M365-Check anfragen",
  ctaHref: "/kontakt",
};

export default function Microsoft365Page() {
  return <ServiceDetail content={content} />;
}
