import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Vanish exists — gear built by a hunter who wore everything else first. Built for the Hunt.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — skull poster art */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <Image
          src="/images/art-hero-skull-poster.png"
          alt="Vanish Apparel skull and antlers artwork over dark mountains"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6">
          <p className="eyebrow mb-3">The Story</p>
          <h1 className="display text-4xl sm:text-6xl">
            Built from the ground up.
            <br />
            And the mountains down.
          </h1>
        </div>
      </section>

      {/* Brand story — verbatim copy from the brief */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal className="space-y-6 text-lg leading-relaxed text-bone/85">
          <p>
            I&apos;ve hunted a lot of country. Colorado high country to the
            New Hampshire timber. The North Dakota plains to the hills back
            home in South Carolina. And along the way I&apos;ve worn just
            about every kind of gear there is — the good, the overpriced, and
            the stuff that quit on me when it mattered.
          </p>
          <p className="display text-3xl text-bone">
            That&apos;s why Vanish exists.
          </p>
          <p>
            I set out to build gear that actually holds up — quality you can
            trust deep in the mountains, without a price tag that empties your
            account. Gear that keeps you warm even when you&apos;re wet. Cool
            when it&apos;s hot. Helps control your scent. And lets you
            disappear into the country you&apos;re hunting.
          </p>
          <p>
            No gimmicks. No hype. Just gear that&apos;s{" "}
            <span className="font-semibold text-ember">
              Built for the Hunt
            </span>{" "}
            — because that&apos;s the only place it&apos;s ever been tested.
          </p>
        </Reveal>
      </section>

      {/* Wildlife art section break */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:grid-cols-3 sm:px-6">
        {[
          { src: "/images/art-deer-v.png", alt: "Whitetail buck in the Vanish V at sunset" },
          { src: "/images/art-elk-v.png", alt: "Bull elk bugling inside the Vanish V" },
          { src: "/images/art-moose-v.png", alt: "Bull moose with the Vanish V lockup" },
        ].map((img) => (
          <Reveal key={img.src} className="relative aspect-square overflow-hidden border border-bone/10">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Reveal>
        ))}
      </section>

      {/* Lockup + CTA */}
      <section className="border-t border-bone/10 bg-coal">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-16 text-center sm:px-6">
          <Image
            src="/images/logo-full-lockup.png"
            alt="VANISH APPAREL — Built for the Hunt"
            width={220}
            height={220}
            className="h-48 w-auto"
          />
          <p className="mt-6 max-w-md text-bone/70">
            The merch is live. The DEADFALL™ technical line is in the works.
            Either way — welcome to the hunt.
          </p>
          <Link
            href="/shop"
            className="mt-7 inline-block bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  );
}
