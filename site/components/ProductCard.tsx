import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import NotifyMe from "@/components/NotifyMe";

export default function ProductCard({ product }: { product: Product }) {
  const isGear = product.tier === "gear";

  return (
    <div className="group flex flex-col border border-bone/10 bg-smoke transition-colors hover:border-bone/25">
      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-coal"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            "imagePosition" in product && product.imagePosition === "center"
              ? "object-contain p-8"
              : "object-cover"
          }`}
        />
        {isGear && (
          <span className="absolute left-3 top-3 bg-ember px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-coal">
            Coming Soon
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-bone/45">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-bone group-hover:text-ember transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-bone/60">{product.shortDesc}</p>

        <div className="mt-auto pt-3">
          {isGear ? (
            <NotifyMe productSlug={product.slug} productName={product.name} />
          ) : (
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-bone">
                ${product.price}
              </span>
              <Link
                href={`/shop/${product.slug}`}
                className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ember hover:text-ember-bright"
              >
                View →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
