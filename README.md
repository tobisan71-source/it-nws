# IT NWS Website

Marketing site for **IT NWS** (IT Nordwestschweiz) — Next.js App Router, TypeScript, Tailwind CSS.

## Pages (v1)

- `/` Home
- `/leistungen` (+ Detailseiten)
  - `/leistungen/it-support`
  - `/leistungen/remote-support`
  - `/leistungen/backup-wiederherstellung`
  - `/leistungen/cyber-security`
  - `/leistungen/microsoft-365`
  - `/leistungen/hardware`
- `/kmu`
- `/privatkunden`
- `/kontakt` (contact + appointment modes)
- `/impressum`, `/datenschutz` (legal stubs)

## Develop

```bash
npm install
cp .env.example .env.local   # SMTP credentials for contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (SMTP)

`POST /api/contact` sends mail via nodemailer. Required on the Plesk Node app
(Custom environment variables → save → Restart App):

| Variable | Example | Notes |
|----------|---------|--------|
| `SMTP_HOST` | `localhost` or `mail.it-nws.ch` | Required; without it the form returns an honest config error |
| `SMTP_PORT` | `587` | `465` with `SMTP_SECURE=true` also works |
| `SMTP_SECURE` | `false` | `true` only for implicit TLS (usually port 465) |
| `SMTP_USER` | `info@it-nws.ch` | Mailbox login; omit with `SMTP_PASS` only if local relay needs no auth |
| `SMTP_PASS` | *(mailbox password)* | Never commit; set only in Plesk |
| `SMTP_FROM` | `IT NWS <info@it-nws.ch>` | Optional; defaults to mailbox / public address |
| `CONTACT_TO` | `info@it-nws.ch` | Optional; defaults to `info@it-nws.ch` |

Honeypot field + basic IP rate limit (5 / 15 min) are built in.

## Brand

- Primary: `#0F172A`
- Accent: `#14B8A6`
- Tagline: Cloud mit Sicherheitsnetz.
- Claim: Mehr Sicherheit. Mehr Kontrolle. Weniger Abhängigkeit.
