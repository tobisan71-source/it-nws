import type { SeoSection } from "@/components/SeoLocalLayout";

export type SeoPageDef = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: SeoSection[];
  related?: { href: string; label: string }[];
};

export const SEO_PAGES: SeoPageDef[] = [
  {
    slug: "pc-reparatur-therwil",
    title: "PC-Reparatur Therwil & Umgebung",
    description:
      "PC- und Laptop-Reparatur in Therwil (BL): Diagnose, SSD-Upgrade, Datenübertragung und persönliche Betreuung — ohne Shop-Druck.",
    eyebrow: "Therwil · Basel-Landschaft",
    h1: "PC-Reparatur in Therwil",
    lead: "Langsamer Rechner, defekte Festplatte oder Neu-Einrichtung? IT NWS hilft persönlich vor Ort in Therwil und der Region Basel-Landschaft.",
    sections: [
      {
        heading: "Was wir für Sie klären",
        body: "Diagnose, Datenübertragung auf ein neues Gerät, SSD-Upgrade und sinnvolle Datensicherung — verständlich erklärt, ohne Verkaufsdruck. Ziel ist ein stabiler Alltag, nicht maximale Spezifikationen.",
      },
      {
        heading: "Lokal und erreichbar",
        body: "Sie sprechen direkt mit der Person, die Ihre IT betreut. Für Privatkunden und kleine Betriebe in Therwil, Binningen, Bottmingen und der näheren Nordwestschweiz.",
      },
    ],
    related: [
      { href: "/privatkunden", label: "Privatkunden" },
      { href: "/pc-reparatur-basel", label: "PC-Reparatur Basel" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    slug: "pc-reparatur-basel",
    title: "PC-Reparatur Basel & Umgebung",
    description:
      "PC-Service und Reparatur in Basel und Umgebung: Diagnose, Einrichtung und Backup — persönlich, klar und mit Fokus auf Ihre Daten.",
    eyebrow: "Basel · Nordwestschweiz",
    h1: "PC-Reparatur in Basel",
    lead: "IT-Hilfe für Privatkunden und Selbständige in Basel: Diagnose, Einrichtung, Backup und Sicherheit — ohne Hotline und ohne PC-Shop-Druck.",
    sections: [
      {
        heading: "Typische Anliegen",
        body: "Rechner läuft langsam, Windows-Probleme, Datenrettung nach Defekt, Wechsel auf SSD oder sichere Einrichtung eines neuen Laptops. Wir priorisieren Ihre Daten und den nächsten sinnvollen Schritt.",
      },
      {
        heading: "Persönlich statt Ticket",
        body: "Basis ist Therwil / Basel-Landschaft — kurze Wege in die Stadt Basel und die Region. Ein Ansprechpartner, der Ihre Situation kennt.",
      },
    ],
    related: [
      { href: "/privatkunden", label: "Privatkunden" },
      { href: "/pc-reparatur-therwil", label: "PC-Reparatur Therwil" },
      { href: "/datensicherung-basel", label: "Datensicherung Basel" },
    ],
  },
  {
    slug: "gaming-pcs-nordwestschweiz",
    title: "Gaming-PCs Nordwestschweiz nach Mass",
    description:
      "Gaming-PCs nach Mass in der Nordwestschweiz: Beratung, Zusammenstellung und Support aus Therwil — kein anonymer Online-Shop.",
    eyebrow: "Gaming · Nordwestschweiz",
    h1: "Gaming-PCs nach Mass",
    lead: "Kein Katalog-Druck: Wir stellen Gaming-PCs passend zu Budget, Spielen und Raumklima zusammen — mit persönlichem Support aus der Nordwestschweiz.",
    sections: [
      {
        heading: "Beratung statt Produktregal",
        body: "Leistung, Lautstärke, Kühlung und Upgrade-Pfad werden gemeinsam geklärt. Sie bekommen eine nachvollziehbare Empfehlung — nicht das teuerste Bundle.",
      },
      {
        heading: "Auch danach erreichbar",
        body: "Treiber, Updates, Temperaturen oder Erweiterungen: Sie sprechen weiter mit derselben Person. Ideal für Spielerinnen und Spieler in Therwil, Basel und der Region.",
      },
    ],
    related: [
      { href: "/#gaming-pcs", label: "Gaming auf der Startseite" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/kontakt", label: "Beratung anfragen" },
    ],
  },
  {
    slug: "datensicherung-basel",
    title: "Datensicherung & Backup Basel",
    description:
      "Datensicherung und Backup-Konzepte in Basel und der Nordwestschweiz — geprüft, verständlich und persönlich betreut für Privat und KMU.",
    eyebrow: "Backup · Basel",
    h1: "Datensicherung in Basel",
    lead: "Fotos, Kundenakten, Buchhaltung: Wir sorgen dafür, dass Backups im Ernstfall greifen — lokal abgestimmt und nachvollziehbar erklärt.",
    sections: [
      {
        heading: "Mehr als «irgendwo in der Cloud»",
        body: "Wir prüfen, was gesichert wird, wie oft und wie die Wiederherstellung funktioniert. Cloud-Dienste ergänzen wir oft mit einem zweiten, unabhängigen Sicherheitsnetz.",
      },
      {
        heading: "Für Privat und KMU",
        body: "Von Familien-PCs bis zu kleinen Teams in Basel und Basel-Landschaft: klare Abläufe, ohne Enterprise-Overhead.",
      },
    ],
    related: [
      { href: "/synology-nas-basel", label: "Synology NAS Basel" },
      { href: "/kmu", label: "KMU" },
      { href: "/privatkunden", label: "Privatkunden" },
    ],
  },
  {
    slug: "synology-nas-basel",
    title: "Synology NAS Basel & Region",
    description:
      "Synology NAS Planung, Einrichtung und Backup in Basel und der Nordwestschweiz — lokale Datensicherung unter Ihrer Kontrolle.",
    eyebrow: "NAS · Basel-Landschaft",
    h1: "Synology NAS in Basel und Umgebung",
    lead: "Lokale Datensicherung mit Synology: Planung, Einrichtung, Freigaben und Backup-Jobs — so, dass Sie den Überblick behalten.",
    sections: [
      {
        heading: "Wofür ein NAS sinnvoll ist",
        body: "Zentrale Ablage, Versionierung, Offsite-Kopien und Schutz vor Ransomware-Szenarien. Wir richten nur ein, was Sie wirklich nutzen — und dokumentieren die wichtigsten Schritte.",
      },
      {
        heading: "Persönliche Betreuung",
        body: "Aus Therwil betreuen wir Kunden in Basel und der Nordwestschweiz: Updates, Speichererweiterung und Wiederherstellungstests inklusive.",
      },
    ],
    related: [
      { href: "/datensicherung-basel", label: "Datensicherung Basel" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    slug: "microsoft-365-support-basel",
    title: "Microsoft 365 Support Basel",
    description:
      "Microsoft 365 Support und Absicherung für KMU in Basel und der Nordwestschweiz: MFA, Zugänge, Backup — persönlich, ohne Hotline.",
    eyebrow: "Microsoft 365 · Basel",
    h1: "Microsoft 365 Support in Basel",
    lead: "Einrichtung, Zugänge, Backup und Security für Microsoft 365 — damit die Cloud zuverlässig bleibt und jemand erreichbar ist.",
    sections: [
      {
        heading: "Cloud mit Sicherheitsnetz",
        body: "Wir ersetzen Microsoft 365 nicht. Wir machen sie sicherer: MFA, saubere Benutzerkonten, sinnvolle Freigaben und ergänzende Datensicherung, wo nötig.",
      },
      {
        heading: "Für kleine Teams",
        body: "Selbständige, Vereine und KMU in Basel und Basel-Landschaft ohne eigene IT-Abteilung — klarer Ansprechpartner statt Ticket-Warteschlange.",
      },
    ],
    related: [
      { href: "/kmu", label: "KMU" },
      { href: "/it-support-kmu-nordwestschweiz", label: "IT-Support KMU NWS" },
      { href: "/kontakt", label: "KMU-Beratung" },
    ],
  },
  {
    slug: "it-support-kmu-nordwestschweiz",
    title: "IT-Support KMU Nordwestschweiz",
    description:
      "Persönlicher IT-Support für KMU in der Nordwestschweiz aus Therwil: Backup, Security, Microsoft 365 und laufende Betreuung ohne Ticket-Warteschlange.",
    eyebrow: "KMU · Nordwestschweiz",
    h1: "IT-Support für KMU in der Nordwestschweiz",
    lead: "Wenn Systeme ausfallen, stehen Aufträge still. IT NWS ist der lokale Ansprechpartner für Backup, Security und alltagsnahe IT-Hilfe.",
    sections: [
      {
        heading: "Was wir abdecken",
        body: "Laufende Betreuung, Microsoft 365, Datensicherung, Grundschutz und Webseite/Hosting — schlank dimensioniert für kleine Betriebe und Vereine.",
      },
      {
        heading: "Regional verankert",
        body: "Standort Therwil (Basel-Landschaft), aktiv in Basel und der Nordwestschweiz. Kurze Wege, klare Sprache, Verantwortung vor Ort.",
      },
    ],
    related: [
      { href: "/kmu", label: "KMU-Seite" },
      { href: "/microsoft-365-support-basel", label: "M365 Support Basel" },
      { href: "/webseiten-kmu-basel", label: "Webseiten KMU Basel" },
    ],
  },
  {
    slug: "webseiten-kmu-basel",
    title: "Webseiten & Hosting KMU Basel",
    description:
      "Webseiten, Hosting und SSL für KMU und Vereine in Basel und der Nordwestschweiz — schlank, gepflegt und mit lokalem Ansprechpartner.",
    eyebrow: "Web · Basel",
    h1: "Webseiten für KMU in Basel",
    lead: "Seriöse Firmen- und Vereinsseiten mit Hosting, Domain und SSL — plus jemanden, der bei Updates und Problemen erreichbar ist.",
    sections: [
      {
        heading: "Kein Baukasten-Chaos",
        body: "Wir halten Seiten schlank, sicher und wartbar. Fokus auf Klarheit und Erreichbarkeit — nicht auf unnötige Features.",
      },
      {
        heading: "Hosting mit Betreuung",
        body: "Domain, SSL, Backups der Website und Ansprechpartner in der Region Basel / Basel-Landschaft.",
      },
    ],
    related: [
      { href: "/leistungen", label: "Leistungen" },
      { href: "/kmu", label: "KMU" },
      { href: "/kontakt", label: "Projekt besprechen" },
    ],
  },
];

export function getSeoPage(slug: string) {
  return SEO_PAGES.find((page) => page.slug === slug);
}
