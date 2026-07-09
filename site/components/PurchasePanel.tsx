"use client";

import { useState } from "react";
import Link from "next/link";
import type { MerchProduct } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function PurchasePanel({ product }: { product: MerchProduct }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(product.sizes?.[0] ?? null);
  const [color, setColor] = useState<string | null>(product.colors?.[0] ?? null);
  const [added, setAdded] = useState(false);

  function addToCart() {
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="space-y-6">
      {product.sizes && (
        <VariantRow
          label="Size"
          options={product.sizes}
          value={size}
          onChange={setSize}
        />
      )}
      {product.colors && (
        <VariantRow
          label={product.category === "Cups" ? "Style" : "Color"}
          options={product.colors}
          value={color}
          onChange={setColor}
        />
      )}

      <button
        type="button"
        onClick={addToCart}
        className="w-full bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
      >
        {added ? "Added ✓" : `Add to Cart — $${product.price}`}
      </button>

      {added && (
        <p className="text-center text-sm text-bone/70">
          In the bag.{" "}
          <Link href="/cart" className="text-ember underline underline-offset-4">
            View cart
          </Link>{" "}
          or keep shopping.
        </p>
      )}
    </div>
  );
}

function VariantRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-bone/60">
        {label}: <span className="text-bone">{value}</span>
      </p>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={value === opt}
            className={`min-w-11 border px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
              value === opt
                ? "border-ember bg-ember text-coal"
                : "border-bone/25 text-bone/75 hover:border-bone/60"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
