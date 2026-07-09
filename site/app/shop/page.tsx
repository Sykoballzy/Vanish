import type { Metadata } from "next";
import Image from "next/image";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Vanish Apparel merch — tees, hoodies, hats, and drinkware — plus the DEADFALL technical gear line, coming soon.",
};

export default function ShopPage() {
  return (
    <>
      <section className="relative flex min-h-[40svh] items-end overflow-hidden">
        <Image
          src="/images/deadfall-loadout-full.png"
          alt="The full DEADFALL loadout laid out as a system, with camo swatches"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
          <p className="eyebrow mb-2">Engineered as a system</p>
          <h1 className="display text-5xl sm:text-6xl">Shop Vanish</h1>
        </div>
      </section>
      <ShopGrid />
    </>
  );
}
