"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, lineKey } from "@/lib/cart";

export default function CartPage() {
  const { lines, subtotal, setQty, remove } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="display text-5xl">Your cart is empty</h1>
        <p className="mt-4 text-bone/70">
          Nothing in the bag yet. That&apos;s fixable.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-block bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
        >
          Shop the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="display mb-10 text-5xl">Cart</h1>

      <div className="space-y-4">
        {lines.map((line) => {
          const key = lineKey(line);
          return (
            <div
              key={key}
              className="flex gap-4 border border-bone/10 bg-smoke p-4"
            >
              <Link
                href={`/shop/${line.slug}`}
                className="relative block h-24 w-24 shrink-0 overflow-hidden bg-coal"
              >
                <Image
                  src={line.image}
                  alt={line.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <Link href={`/shop/${line.slug}`}>
                    <h2 className="font-display text-lg font-bold uppercase leading-tight tracking-wide hover:text-ember transition-colors">
                      {line.name}
                    </h2>
                  </Link>
                  <span className="font-display text-lg font-bold">
                    ${line.price * line.qty}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-bone/55">
                  {[line.size, line.color].filter(Boolean).join(" · ")}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-2">
                  <div className="flex items-center border border-bone/25">
                    <button
                      type="button"
                      onClick={() => setQty(key, line.qty - 1)}
                      className="px-3 py-1.5 text-bone/70 hover:text-ember"
                      aria-label={`Decrease quantity of ${line.name}`}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center font-display font-bold">
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(key, line.qty + 1)}
                      className="px-3 py-1.5 text-bone/70 hover:text-ember"
                      aria-label={`Increase quantity of ${line.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(key)}
                    className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-bone/45 hover:text-ember transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-end gap-4">
        <div className="flex w-full max-w-sm items-center justify-between border-t border-bone/15 pt-4">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.16em] text-bone/70">
            Subtotal
          </span>
          <span className="font-display text-3xl font-bold">${subtotal}</span>
        </div>
        <p className="text-sm text-bone/50">
          Shipping and tax calculated at checkout.
        </p>
        <Link
          href="/checkout"
          className="w-full max-w-sm bg-ember px-8 py-4 text-center font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
        >
          Checkout
        </Link>
        <Link
          href="/shop"
          className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone/60 hover:text-ember"
        >
          ← Keep shopping
        </Link>
      </div>
    </div>
  );
}
