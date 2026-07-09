"use client";

import { useState } from "react";

// Gear launch-list capture. Stubbed — at launch, POST { email, productSlug }
// to the list provider so notify interest is tracked per product.
export default function NotifyMe({
  productSlug,
  productName,
}: {
  productSlug: string;
  productName: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ember">
        On the list — you&apos;ll know first.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full border border-ember px-4 py-2.5 font-display text-sm font-bold uppercase tracking-[0.16em] text-ember transition-colors hover:bg-ember hover:text-coal"
      >
        Notify Me
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
      className="flex gap-0"
    >
      <label htmlFor={`notify-${productSlug}`} className="sr-only">
        Email for {productName} launch alert
      </label>
      <input
        id={`notify-${productSlug}`}
        type="email"
        required
        autoFocus
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 border border-bone/25 bg-coal px-3 py-2.5 text-sm text-bone placeholder:text-bone/35 focus:border-ember focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-ember px-4 py-2.5 font-display text-sm font-bold uppercase tracking-[0.1em] text-coal hover:bg-ember-bright"
      >
        Join
      </button>
    </form>
  );
}
