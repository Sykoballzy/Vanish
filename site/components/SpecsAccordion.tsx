"use client";

import { useState } from "react";
import type { MerchProduct } from "@/lib/products";

const SECTIONS = [
  { key: "materials", label: "Materials" },
  { key: "care", label: "Care" },
  { key: "sizing", label: "Sizing" },
] as const;

export default function SpecsAccordion({
  specs,
}: {
  specs: MerchProduct["specs"];
}) {
  const [open, setOpen] = useState<string | null>("materials");

  return (
    <div className="divide-y divide-bone/10 border-y border-bone/10">
      {SECTIONS.map(({ key, label }) => {
        const isOpen = open === key;
        return (
          <div key={key}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-4 text-left font-display font-bold uppercase tracking-[0.16em] text-bone hover:text-ember transition-colors"
            >
              {label}
              <span className="text-ember" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && <p className="pb-4 text-bone/70">{specs[key]}</p>}
          </div>
        );
      })}
    </div>
  );
}
