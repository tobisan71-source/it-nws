import Link from "next/link";
import {
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  CONTACT_REGION,
} from "@/lib/site";
import { SEO_PAGES } from "@/lib/seo-pages";

const seoLinks = SEO_PAGES.slice(0, 4);

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="container-narrow section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold text-white">IT NWS</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              IT Nordwestschweiz — persönlicher IT-Partner für Privatkunden, Vereine und KMU.
            </p>
            <p className="mt-4 text-sm font-medium text-teal-400">Cloud mit Sicherheitsnetz.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Seiten</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/leistungen" className="hover:text-teal-400">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kmu" className="hover:text-teal-400">
                  KMU
                </Link>
              </li>
              <li>
                <Link href="/privatkunden" className="hover:text-teal-400">
                  Privatkunden
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-teal-400">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Region & Themen</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {seoLinks.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="hover:text-teal-400">
                    {page.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/it-support-kmu-nordwestschweiz" className="hover:text-teal-400">
                  IT-Support KMU NWS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Kontakt & Rechtliches</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>
                <a href={CONTACT_MAILTO} className="hover:text-teal-400">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={CONTACT_PHONE_TEL} className="hover:text-teal-400">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>{CONTACT_ADDRESS_LINE}</li>
              <li className="text-slate-500">{CONTACT_REGION}</li>
              <li className="pt-2">
                <Link href="/impressum" className="hover:text-teal-400">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-teal-400">
                  Datenschutz
                </Link>
              </li>
            </ul>
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
