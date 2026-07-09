"use client";

import { useState } from "react";

// Stub email capture. Wire to the real list (Shopify, Mailchimp, or Formspree)
// at launch — swap the setTimeout for a POST to the provider endpoint.
export default function EmailSignup({
  compact = false,
  cta = "Sign Up",
}: {
  compact?: boolean;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-ember">
        You&apos;re on the list. Stay sharp.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={`flex ${compact ? "max-w-sm" : "mx-auto max-w-md"} gap-0`}>
      <label htmlFor={compact ? "email-footer" : "email-band"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "email-footer" : "email-band"}
        type="email"
        required
        placeholder="you@backcountry.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 border border-bone/25 bg-coal/70 px-4 py-3 text-bone placeholder:text-bone/35 focus:border-ember focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-ember px-5 py-3 font-display font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
      >
        {cta}
      </button>
    </form>
  );
}
