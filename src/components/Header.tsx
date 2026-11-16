"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/kmu", label: "KMU" },
  { href: "/privatkunden", label: "Privatkunden" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/85 backdrop-blur-md">
      <div className="container-narrow flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="IT NWS – Startseite"
        >
          <BrandLogo size="header" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-teal-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/kontakt#termin" className="btn-primary ml-2 !py-2.5 !text-xs">
            Termin anfragen
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-900 px-5 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 text-sm font-medium ${
                      active ? "bg-white/10 text-teal-400" : "text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/kontakt#termin"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Termin anfragen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
