import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vanish Apparel — questions, orders, or field reports.",
};

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/vanishapparel" },
  { label: "Facebook", href: "https://facebook.com/vanishapparel" },
  { label: "YouTube", href: "https://youtube.com/@vanishapparel" },
  { label: "TikTok", href: "https://tiktok.com/@vanishapparel" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="display text-5xl sm:text-6xl">
            Talk to us
          </h1>
          <p className="mt-5 max-w-md text-lg text-bone/70">
            Order questions, sizing help, wholesale, or just a story from the
            stand — we read everything.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="eyebrow mb-1 text-xs">Support</p>
              <a
                href="mailto:support@vanishapparel.com"
                className="text-lg text-bone hover:text-ember transition-colors"
              >
                support@vanishapparel.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-1 text-xs">Follow the hunt</p>
              <ul className="space-y-1">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bone/70 hover:text-ember transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
