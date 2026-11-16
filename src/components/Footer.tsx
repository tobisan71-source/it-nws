import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="container-narrow section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="IT NWS – Startseite" className="inline-flex">
              <BrandLogo size="footer" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              IT Nordwestschweiz — persönlicher IT-Partner für Privatkunden, Vereine und KMU.
            </p>
            <p className="mt-4 text-sm font-medium text-teal-400">Cloud mit Sicherheitsnetz.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Seiten</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/leistungen" className="hover:text-teal-400">Leistungen</Link></li>
              <li><Link href="/leistungen/it-support" className="hover:text-teal-400">IT-Support</Link></li>
              <li><Link href="/leistungen/remote-support" className="hover:text-teal-400">Remote-Support</Link></li>
              <li><Link href="/leistungen/backup-wiederherstellung" className="hover:text-teal-400">Backup</Link></li>
              <li><Link href="/leistungen/cyber-security" className="hover:text-teal-400">Cyber Security</Link></li>
              <li><Link href="/leistungen/microsoft-365" className="hover:text-teal-400">Microsoft 365</Link></li>
              <li><Link href="/leistungen/hardware" className="hover:text-teal-400">Hardware & Arbeitsplätze</Link></li>
              <li><Link href="/kmu" className="hover:text-teal-400">KMU</Link></li>
              <li><Link href="/privatkunden" className="hover:text-teal-400">Privatkunden</Link></li>
              <li><Link href="/kontakt" className="hover:text-teal-400">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Rechtliches</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/impressum" className="hover:text-teal-400">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-teal-400">Datenschutz</Link></li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              Region Nordwestschweiz ·{" "}
              <a href={CONTACT_MAILTO} className="text-slate-400 hover:text-teal-400">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            IT NWS – Mehr Sicherheit. Mehr Kontrolle. Weniger Abhängigkeit.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            © {new Date().getFullYear()} IT NWS. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
