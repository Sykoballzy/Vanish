import Image from "next/image";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/vanishapparelco",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/vanishapparelco",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-7h2.5l.5-3h-3V9.2c0-.9.3-1.5 1.6-1.5H16.6V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2.5v7h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@vanishapparelco",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@vanishapparelco",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.5 3c.4 2.1 1.7 3.6 3.9 3.9v3c-1.5 0-2.9-.5-3.9-1.3v6.2c0 3.9-2.7 6.2-6 6.2-3 0-5.5-2.2-5.5-5.4 0-3.6 3.2-5.9 6.6-5.3v3.1c-1.7-.5-3.5.6-3.5 2.2 0 1.4 1.1 2.4 2.5 2.4 1.6 0 2.9-1.2 2.9-3.4V3h3z" />
      </svg>
    ),
  },
];

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/field-wins", label: "Field Wins" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-full-lockup.png"
            alt="VANISH APPAREL — Built for the Hunt"
            width={200}
            height={200}
            className="h-40 w-auto"
          />
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone/70 hover:text-ember transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/60 hover:text-ember transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </nav>

        <div>
          <p className="eyebrow mb-4">Join the Hunt</p>
          <p className="mb-4 text-sm text-bone/70">
            First looks at DEADFALL gear drops, field reports, and nothing you
            don&apos;t need.
          </p>
          <EmailSignup compact />
        </div>
      </div>

      <div className="border-t border-bone/10 px-4 py-5 text-center">
        <nav
          aria-label="Policies"
          className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-1"
        >
          {[
            { href: "/policies/shipping-returns", label: "Shipping & Returns" },
            { href: "/policies/privacy", label: "Privacy" },
            { href: "/policies/terms", label: "Terms" },
          ].map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="font-display text-xs uppercase tracking-[0.18em] text-bone/50 hover:text-ember transition-colors"
            >
              {p.label}
            </Link>
          ))}
        </nav>
        <p className="font-display text-sm uppercase tracking-[0.24em] text-bone/40">
          © {new Date().getFullYear()} Vanish Apparel · Built for the Hunt
        </p>
      </div>
    </footer>
  );
}
