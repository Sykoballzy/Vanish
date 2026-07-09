import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Field Wins",
  description:
    "The Vanish Field Wins wall — real hunters, real country, real results. Tag #wevanish to get featured.",
};

// Manually curated wall — swap/add entries as customer photos come in via
// #wevanish. Keep it curated, not a live feed.
const WALL = [
  {
    src: "/images/field-concealed-01.png",
    alt: "Hunter prone behind glass, invisible in the sage",
    caption: "Glassing basin edges — somewhere in the West",
  },
  {
    src: "/images/hero-hunter-bow.png",
    alt: "Bowhunter slipping through juniper with bow in hand",
    caption: "The walk in, opening morning",
  },
  {
    src: "/images/field-concealed-02.png",
    alt: "Rifle hunter standing in open country with a full pack",
    caption: "Miles from the truck, right where he wants to be",
  },
  {
    src: "/images/field-concealed-03.png",
    alt: "Hunter crouched beside deadfall timber, pattern matching perfectly",
    caption: "DEADFALL in actual deadfall",
  },
  {
    src: "/images/field-concealed-04-wide.png",
    alt: "Wide terrain shot — find the hunter",
    caption: "Find him. We'll wait.",
    wide: true,
  },
  {
    src: "/images/art-deer-v.png",
    alt: "Whitetail buck in the V at sunset",
    caption: "Your hunt belongs here — tag #wevanish",
  },
];

export default function FieldWinsPage() {
  return (
    <>
      <section className="border-b border-bone/10 bg-coal">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <p className="eyebrow mb-3">The Wall</p>
          <h1 className="display text-5xl sm:text-7xl">Field Wins</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-bone/70">
            Real hunters. Real country. Real results. This wall is earned, not
            bought — tag{" "}
            <span className="font-semibold text-ember">#wevanish</span> and
            your hunt could be on it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WALL.map((item) => (
            <Reveal
              key={item.src}
              className={`group relative overflow-hidden border border-bone/10 ${
                item.wide ? "sm:col-span-2 aspect-[2/1]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-coal/90 to-transparent p-4 pt-12">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-bone/90">
                  {item.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-bone/10 bg-coal">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <h2 className="display text-4xl">Got one worth telling?</h2>
          <p className="mt-4 text-bone/70">
            Post your hunt, tag{" "}
            <span className="font-semibold text-ember">#wevanish</span>, and
            send it our way. Best shots make the wall.
          </p>
          <a
            href="https://instagram.com/vanishapparel"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
          >
            Submit Your Hunt
          </a>
        </div>
      </section>
    </>
  );
}
