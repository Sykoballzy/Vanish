import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, getProduct, merch } from "@/lib/products";
import PurchasePanel from "@/components/PurchasePanel";
import SpecsAccordion from "@/components/SpecsAccordion";
import NotifyMe from "@/components/NotifyMe";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = merch
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <nav className="mb-8 font-display text-sm uppercase tracking-[0.14em] text-bone/50">
        <Link href="/shop" className="hover:text-ember">
          Shop
        </Link>{" "}
        / <span className="text-bone/80">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div className="relative aspect-square overflow-hidden border border-bone/10 bg-coal">
          <Image
            src={product.image}
            alt={product.name}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={
              "imagePosition" in product && product.imagePosition === "center"
                ? "object-contain p-12"
                : "object-cover"
            }
          />
          {product.tier === "gear" && (
            <span className="absolute left-4 top-4 bg-ember px-3 py-1.5 font-display text-sm font-bold uppercase tracking-[0.14em] text-coal">
              Coming Soon
            </span>
          )}
        </div>

        {/* Details */}
        <div>
          <p className="eyebrow mb-2">{product.category}</p>
          <h1 className="display text-4xl sm:text-5xl">{product.name}</h1>

          {product.tier === "merch" ? (
            <>
              <p className="mt-4 font-display text-3xl font-bold text-ember">
                ${product.price}
              </p>
              <p className="mt-5 text-lg text-bone/80">{product.description}</p>
              <p className="mt-3 font-display text-sm uppercase tracking-[0.14em] text-bone/50">
                {product.detail}
              </p>
              <div className="mt-8">
                <PurchasePanel product={product} />
              </div>
              <div className="mt-10">
                <SpecsAccordion specs={product.specs} />
              </div>
            </>
          ) : (
            <>
              <p className="mt-5 text-lg text-bone/80">
                {product.shortDesc} Part of the DEADFALL™ technical line —
                real fabrics, real field testing, launching soon.
              </p>
              <p className="mt-4 text-bone/65">
                Join the notify list and you&apos;ll get first access the day
                it drops. No spam, no daily emails — just the launch.
              </p>
              <div className="mt-8 max-w-sm">
                <NotifyMe
                  productSlug={product.slug}
                  productName={product.name}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="display mb-6 text-3xl">More {product.category}</h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
