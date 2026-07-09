"use client";

import { useState } from "react";
import {
  merch,
  gear,
  merchCategories,
  gearCategories,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";

// Two-tier shop: merch (buy now) and DEADFALL gear (Coming Soon / Notify Me),
// with independent category filters per tier.
export default function ShopGrid() {
  const [merchFilter, setMerchFilter] = useState<string>("All");
  const [gearFilter, setGearFilter] = useState<string>("All");

  const merchVisible =
    merchFilter === "All"
      ? merch
      : merch.filter((p) => p.category === merchFilter);
  const gearVisible =
    gearFilter === "All" ? gear : gear.filter((p) => p.category === gearFilter);

  return (
    <>
      {/* MERCH TIER */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6" id="merch">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Available Now</p>
            <h2 className="display text-4xl sm:text-5xl">Merch</h2>
          </div>
          <FilterRow
            options={["All", ...merchCategories]}
            value={merchFilter}
            onChange={setMerchFilter}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {merchVisible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* GEAR TIER */}
      <section
        className="mx-auto max-w-7xl scroll-mt-20 border-t border-bone/10 px-4 py-14 sm:px-6"
        id="gear"
      >
        <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Coming Soon</p>
            <h2 className="display text-4xl sm:text-5xl">
              DEADFALL<span className="text-ember">™</span> Gear
            </h2>
          </div>
          <FilterRow
            options={["All", ...gearCategories]}
            value={gearFilter}
            onChange={setGearFilter}
          />
        </div>
        <p className="mb-8 max-w-2xl text-bone/65">
          The technical line is in final development — real fabrics, real field
          testing, no shortcuts. Join the notify list on any piece and
          you&apos;ll get first access when it drops.
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gearVisible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}

function FilterRow({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          aria-pressed={value === opt}
          className={`border px-3.5 py-1.5 font-display text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
            value === opt
              ? "border-ember bg-ember text-coal"
              : "border-bone/25 text-bone/70 hover:border-bone/60 hover:text-bone"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
