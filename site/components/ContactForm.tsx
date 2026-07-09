"use client";

import { useState } from "react";

// Stub contact form — swap the fake submit for a Formspree/Basin endpoint or
// the commerce platform's contact app at launch.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-ember/40 bg-coal p-8 text-center">
        <p className="display text-3xl text-ember">Message received.</p>
        <p className="mt-3 text-bone/70">
          We&apos;ll get back to you within a couple days — unless it&apos;s
          season. Then give us till dark.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-bone/25 bg-coal px-4 py-3 text-bone placeholder:text-bone/35 focus:border-ember focus:outline-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input id="name" name="name" required placeholder="Name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="Email" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input id="subject" name="subject" required placeholder="Subject" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What's on your mind?"
          rows={6}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright sm:w-auto"
      >
        Send It
      </button>
    </form>
  );
}
