import Image from "next/image";
import Link from "next/link";
import { featured } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    title: "Silent Fabric",
    copy: "Brushed face fabrics that don't announce you. Quiet at full draw, quiet on the last hundred yards.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 12c3-6 6 6 9 0s6 6 9 0" />
        <path d="M3 18c3-6 6 6 9 0s6 6 9 0" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Scent Control",
    copy: "Scent-fighting treatments and merino where it matters. Hunt the wind — we'll handle the rest.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3c-3 4-6 6.5-6 10a6 6 0 0 0 12 0c0-3.5-3-6-6-10z" />
        <path d="M9 14a3 3 0 0 0 3 3" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "All-Weather Built",
    copy: "Warm when you're wet. Cool when it's hot. Gear that doesn't quit when the weather turns — because you won't.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 15a4 4 0 0 1 1-7.9A5.5 5.5 0 0 1 15.7 6 4.5 4.5 0 0 1 19 14.5" />
        <path d="M8 18l-1 3M12 17l-1 3M16 18l-1 3" />
      </svg>
    ),
  },
];

const FIELD_WINS_PREVIEW = [
  { src: "/images/field-concealed-01.png", alt: "Hunter glassing from a prone position, fully concealed" },
  { src: "/images/field-concealed-02.png", alt: "Hunter standing with rifle and pack in open country" },
  { src: "/images/field-concealed-03.png", alt: "Hunter crouched beside deadfall timber" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end">
        <Image
          src="/images/hero-hunter-bow.png"
          alt="Bowhunter in DEADFALL camo moving through juniper brush"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/10" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6">
          <p className="eyebrow mb-3">Vanish Apparel</p>
          <h1 className="display max-w-3xl text-6xl text-bone sm:text-7xl lg:text-8xl">
            Built for
            <br />
            the Hunt
          </h1>
          <p className="mt-4 max-w-md text-lg text-bone/80">
            Disappear. Then dominate. Premium hunting apparel without the
            price tag that empties your account.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-ember px-8 py-4 font-display text-lg font-bold uppercase tracking-[0.14em] text-coal transition-colors hover:bg-ember-bright"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-y border-bone/10 bg-coal">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <Reveal key={f.title} className="flex items-start gap-4">
              <span className="mt-1 text-ember">{f.icon}</span>
              <div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {f.title}
                </h2>
                <p className="mt-2 text-bone/65">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEADFALL FEATURE */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/deadfall-kit-studio.png"
            alt="DEADFALL camo kit laid out in studio — jacket, pants, pack, and field-tested patches"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow mb-3">The Pattern</p>
          <h2 className="display text-5xl sm:text-6xl">
            DEADFALL<span className="text-ember">™</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-bone/75">
            Most camo is designed to look good on a rack. DEADFALL is designed
            to disappear in dead timber, sage, and shadow — a
            micro-and-macro-break pattern built from the country we actually
            hunt.
          </p>
          <p className="mt-4 max-w-lg text-lg text-bone/75">
            Engineered as a system: every DEADFALL piece runs the same pattern
            at the same scale, so your silhouette breaks up from hood to boot.
          </p>
          <Link
            href="/shop#gear"
            className="mt-7 inline-block border border-ember px-6 py-3 font-display font-bold uppercase tracking-[0.14em] text-ember transition-colors hover:bg-ember hover:text-coal"
          >
            See the DEADFALL Line
          </Link>
        </Reveal>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-2">The Goods</p>
            <h2 className="display text-4xl sm:text-5xl">Featured</h2>
          </div>
          <Link
            href="/shop"
            className="font-display font-bold uppercase tracking-[0.14em] text-ember hover:text-ember-bright"
          >
            Shop All →
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FIND THE HUNTER */}
      <section className="relative flex min-h-[70svh] items-center justify-center">
        <Image
          src="/images/field-concealed-04-wide.png"
          alt="Wide sagebrush terrain — a hunter in DEADFALL camo is nearly invisible in the landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <Reveal className="relative px-4 text-center">
          <h2 className="display text-5xl text-bone sm:text-7xl">
            Find the hunter.
          </h2>
          <p className="display mt-2 text-3xl text-ember sm:text-4xl">
            Good luck.
          </p>
          <p className="mx-auto mt-5 max-w-md text-bone/85">
            That&apos;s DEADFALL doing its job. He&apos;s in there — about
            forty yards in, wearing the full system.
          </p>
        </Reveal>
      </section>

      {/* BRAND STORY TEASER */}
      <section className="relative overflow-hidden border-y border-bone/10">
        <Image
          src="/images/art-brand-scene-dark.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <Reveal className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <p className="eyebrow mb-3">Why Vanish</p>
          <h2 className="display text-4xl sm:text-5xl">
            Built from the ground up.
            <br />
            And the mountains down.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-bone/75">
            Colorado high country to the New Hampshire timber. Gear built by a
            hunter who wore everything else first — the good, the overpriced,
            and the stuff that quit when it mattered.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-block border border-bone/40 px-6 py-3 font-display font-bold uppercase tracking-[0.14em] text-bone transition-colors hover:border-ember hover:text-ember"
          >
            Read the Story
          </Link>
        </Reveal>
      </section>

      {/* FIELD WINS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-2">The Wall</p>
            <h2 className="display text-4xl sm:text-5xl">Field Wins</h2>
          </div>
          <Link
            href="/field-wins"
            className="font-display font-bold uppercase tracking-[0.14em] text-ember hover:text-ember-bright"
          >
            See the Wall →
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FIELD_WINS_PREVIEW.map((img) => (
            <Reveal key={img.src} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <p className="font-display text-2xl font-bold uppercase tracking-wide">
            Tag <span className="text-ember">#wevanish</span> to get featured
          </p>
        </Reveal>
      </section>

      {/* EMAIL BAND */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/art-hero-skull-poster.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_20%] opacity-25"
        />
        <Reveal className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Join the Hunt</h2>
          <p className="mx-auto mt-4 max-w-md text-bone/75">
            DEADFALL gear drops, field reports, and first access. No spam —
            we&apos;re too busy hunting.
          </p>
          <div className="mt-8">
            <EmailSignup cta="Join" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
