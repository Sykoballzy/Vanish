"use client";

// Stub checkout. At launch this page is replaced by the real handoff:
// redirect to Shopify checkout (headless) or embed the payment provider.
import Link from "next/link";
import { useCart, lineKey } from "@/lib/cart";
import EmailSignup from "@/components/EmailSignup";

export default function CheckoutPage() {
  const { lines, subtotal } = useCart();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="display text-5xl">Checkout</h1>

      {lines.length > 0 && (
        <div className="mt-8 border border-bone/10 bg-smoke p-6">
          <p className="eyebrow mb-4 text-xs">Order Summary</p>
          <ul className="space-y-2">
            {lines.map((line) => (
              <li
                key={lineKey(line)}
                className="flex justify-between gap-4 text-bone/80"
              >
                <span>
                  {line.qty}× {line.name}
                  {line.size ? ` (${line.size}` : ""}
                  {line.size && line.color
                    ? `, ${line.color})`
                    : line.size
                      ? ")"
                      : line.color
                        ? ` (${line.color})`
                        : ""}
                </span>
                <span className="shrink-0 font-display font-bold">
                  ${line.price * line.qty}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-bone/15 pt-4">
            <span className="font-display font-semibold uppercase tracking-[0.16em] text-bone/70">
              Subtotal
            </span>
            <span className="font-display text-2xl font-bold">${subtotal}</span>
          </div>
        </div>
      )}

      <div className="mt-8 border border-ember/40 bg-coal p-8 text-center">
        <p className="display text-3xl text-ember">
          Secure checkout opens at launch
        </p>
        <p className="mx-auto mt-4 max-w-md text-bone/70">
          The store is in preview — payments aren&apos;t wired up yet. Drop
          your email and we&apos;ll tell you the moment ordering goes live.
          Your cart will be waiting.
        </p>
        <div className="mt-6">
          <EmailSignup cta="Notify Me" />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/cart"
          className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-bone/60 hover:text-ember"
        >
          ← Back to cart
        </Link>
      </div>
    </div>
  );
}
