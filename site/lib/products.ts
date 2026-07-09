// Product catalog — prices/copy from D_Vanish_Merch_Descriptions.md.
// Images are brand-art placeholders until Printful product mockups exist;
// swap `image` per product once samples are approved.

export type MerchProduct = {
  slug: string;
  name: string;
  price: number;
  category: "T-Shirts" | "Hoodies" | "Hats" | "Cups";
  tier: "merch";
  shortDesc: string;
  description: string;
  detail: string;
  image: string;
  imagePosition?: string;
  sizes: string[] | null;
  colors: string[] | null;
  specs: { materials: string; care: string; sizing: string };
};

export type GearProduct = {
  slug: string;
  name: string;
  category: "Outerwear" | "Base Layers" | "Pants & Bibs" | "Headwear & Neck" | "Accessories";
  tier: "gear";
  shortDesc: string;
  image: string;
  imagePosition?: string;
};

export type Product = MerchProduct | GearProduct;

const APPAREL_SIZES = ["S", "M", "L", "XL", "XXL"];

const TEE_SPECS = {
  materials: "Soft ring-spun cotton blend. Pre-shrunk, side-seamed for a clean fit.",
  care: "Machine wash cold, inside out. Tumble dry low. No bleach, no ironing the print.",
  sizing: "True to size with a modern cut. Between sizes? Size up for the relaxed field fit.",
};

const HOODIE_SPECS = {
  materials: "Heavyweight fleece blend with a brushed interior. Reinforced pouch and cuffs.",
  care: "Machine wash cold, inside out. Tumble dry low.",
  sizing: "True to size, roomy through the shoulders for layering.",
};

const HAT_SPECS = {
  materials: "Structured crown, embroidered artwork. Adjustable snapback closure.",
  care: "Spot clean only. Don't run it through the wash — it earned better.",
  sizing: "One size fits most.",
};

const CUP_SPECS = {
  materials: "See product description — enamel steel, vacuum-insulated stainless, or etched glass.",
  care: "Hand wash recommended to protect the artwork.",
  sizing: "One size. It holds what it holds.",
};

export const merch: MerchProduct[] = [
  {
    slug: "vanish-logo-tee",
    name: "Vanish Logo Tee",
    price: 28,
    category: "T-Shirts",
    tier: "merch",
    shortDesc: "The one that started it.",
    description:
      "The one that started it. Clean chevron-V across the chest, soft enough for everyday, tough enough to earn its keep. Wear it to the range, the woods, or the truck stop at 4 a.m.",
    detail: "Sizes S–XXL · Soft cotton blend · Screen-printed logo",
    image: "/images/logo-primary-horizontal.png",
    imagePosition: "center",
    sizes: APPAREL_SIZES,
    colors: ["Black", "Charcoal", "Military Green"],
    specs: TEE_SPECS,
  },
  {
    slug: "deadfall-buck-tee",
    name: "DEADFALL Buck Tee",
    price: 32,
    category: "T-Shirts",
    tier: "merch",
    shortDesc: "Signature camo art, premium blank.",
    description:
      "Our signature DEADFALL art on a premium blank. A whitetail standing his ground where the timber meets the light. For the ones who hunt because they have to.",
    detail: "Sizes S–XXL · Heavyweight cotton · Full-front print",
    image: "/images/apparel/apparel-graphic-buck-orange.png",
    sizes: APPAREL_SIZES,
    colors: ["Black", "Charcoal"],
    specs: TEE_SPECS,
  },
  {
    slug: "elk-country-tee",
    name: "Elk Country Tee",
    price: 32,
    category: "T-Shirts",
    tier: "merch",
    shortDesc: "For the backcountry crowd.",
    description:
      "High country. Thin air. A bull screaming across the canyon. This one's for the backcountry crowd who measure a season in miles walked.",
    detail: "Sizes S–XXL · Heavyweight cotton · Full-front print",
    image: "/images/art-elk-v.png",
    sizes: APPAREL_SIZES,
    colors: ["Black", "Charcoal"],
    specs: TEE_SPECS,
  },
  {
    slug: "wevanish-pocket-tee",
    name: "Wevanish Pocket Tee",
    price: 30,
    category: "T-Shirts",
    tier: "merch",
    shortDesc: "Subtle front, statement back.",
    description:
      "Subtle up front, statement on the back. Small chevron on the pocket, full brand on the shoulders. Tag us #wevanish and you might end up on the wall.",
    detail: "Sizes S–XXL · Soft cotton blend · Front + back print",
    image: "/images/apparel/apparel-graphic-pronghorn.png",
    sizes: APPAREL_SIZES,
    colors: ["Black", "Military Green", "Sand"],
    specs: TEE_SPECS,
  },
  {
    slug: "vanish-pullover-hoodie",
    name: "Vanish Pullover Hoodie",
    price: 58,
    category: "Hoodies",
    tier: "merch",
    shortDesc: "Live in it, October to March.",
    description:
      "The one you'll live in from October to March. Heavyweight fleece, roomy hood, chevron on the chest. Warm truck, cold stand, back porch — it doesn't care where.",
    detail: "Sizes S–XXL · Heavyweight fleece · Front-pouch pocket",
    image: "/images/logo-full-lockup.png",
    imagePosition: "center",
    sizes: APPAREL_SIZES,
    colors: ["Black", "Charcoal", "Military Green"],
    specs: HOODIE_SPECS,
  },
  {
    slug: "deadfall-zip-hoodie",
    name: "DEADFALL Zip Hoodie",
    price: 68,
    category: "Hoodies",
    tier: "merch",
    shortDesc: "Built for the in-between weather.",
    description:
      "Full-zip, full DEADFALL. The layer you throw on before the walk in and don't think about again. Built for the in-between weather that ruins everyone else's day.",
    detail: "Sizes S–XXL · Heavyweight fleece · Full-zip",
    image: "/images/deadfall-kit-studio.png",
    sizes: APPAREL_SIZES,
    colors: ["DEADFALL"],
    specs: HOODIE_SPECS,
  },
  {
    slug: "vanish-chevron-cap",
    name: "Vanish Chevron Cap",
    price: 28,
    category: "Hats",
    tier: "merch",
    shortDesc: "The everyday lid.",
    description:
      "Structured front, curved brim, embroidered chevron. The everyday lid that goes with everything you own because everything you own is already Vanish.",
    detail: "One size · Adjustable snapback · Embroidered logo",
    image: "/images/art-brand-scene-dark.png",
    sizes: null,
    colors: ["Black", "Olive", "Camo"],
    specs: HAT_SPECS,
  },
  {
    slug: "deadfall-trucker",
    name: "DEADFALL Trucker",
    price: 30,
    category: "Hats",
    tier: "merch",
    shortDesc: "Summer scouting's official headwear.",
    description:
      "Mesh back, foam front, DEADFALL pattern up top. Breathes on the hot walk in, keeps the sun out of your glass. Summer scouting's official headwear.",
    detail: "One size · Adjustable snapback · Mesh back",
    image: "/images/deadfall-loadout-full.png",
    sizes: null,
    colors: ["DEADFALL/Black"],
    specs: HAT_SPECS,
  },
  {
    slug: "skull-patch-beanie",
    name: "Skull Patch Beanie",
    price: 26,
    category: "Hats",
    tier: "merch",
    shortDesc: "Fits under a hood, warm all season.",
    description:
      "Cuffed knit with the skull mark stitched on front. Low-profile enough to fit under a hood, warm enough to earn a spot in the pack all season.",
    detail: "One size · Ribbed knit · Embroidered patch",
    image: "/images/logo-skull-alt.png",
    imagePosition: "center",
    sizes: null,
    colors: ["Black", "Charcoal"],
    specs: HAT_SPECS,
  },
  {
    slug: "vanish-camp-mug",
    name: "Vanish Camp Mug",
    price: 18,
    category: "Cups",
    tier: "merch",
    shortDesc: "Black coffee before first light.",
    description:
      "Enamel camp mug, chevron on the side. Black coffee before first light hits different when it's steaming out of this. Campfire-proof, drop-proof, excuse-proof.",
    detail: "12 oz · Enamel steel",
    image: "/images/art-deer-v.png",
    sizes: null,
    colors: ["Black", "Bone"],
    specs: CUP_SPECS,
  },
  {
    slug: "deadfall-tumbler",
    name: "DEADFALL Tumbler 20oz",
    price: 32,
    category: "Cups",
    tier: "merch",
    shortDesc: "Never gets left behind.",
    description:
      "Double-wall insulated, DEADFALL wrap. Keeps coffee hot on the stand and water cold in the truck. The one piece of gear that never gets left behind.",
    detail: "20 oz · Stainless, vacuum-insulated · Fits most cup holders",
    image: "/images/art-muledeer-v.png",
    sizes: null,
    colors: ["DEADFALL"],
    specs: CUP_SPECS,
  },
  {
    slug: "built-for-the-hunt-pint",
    name: "Built for the Hunt Pint Glass",
    price: 14,
    category: "Cups",
    tier: "merch",
    shortDesc: "For after.",
    description:
      "For after. Tagline etched on the side, cold beer on the inside. The season's over, the stories aren't. Raise one.",
    detail: "16 oz · Etched glass",
    image: "/images/art-moose-v.png",
    sizes: null,
    colors: null,
    specs: CUP_SPECS,
  },
];

// DEADFALL gear line — real manufactured apparel, launching later.
// Shown as "Coming Soon" with Notify Me email capture, never Add to Cart.
export const gear: GearProduct[] = [
  { slug: "apex-softshell-jacket", name: "Apex Softshell Jacket", category: "Outerwear", tier: "gear", shortDesc: "Silent face fabric, wind-shedding shell.", image: "/images/collection-mannequin-branded.png" },
  { slug: "timber-insulated-jacket", name: "Timber Insulated Jacket", category: "Outerwear", tier: "gear", shortDesc: "Late-season warmth without the bulk.", image: "/images/collection-mannequin-branded.png" },
  { slug: "backcountry-rain-shell", name: "Backcountry Rain Shell", category: "Outerwear", tier: "gear", shortDesc: "Packable, quiet, actually waterproof.", image: "/images/collection-mannequin-branded.png" },
  { slug: "merino-base-crew", name: "Merino Base Layer Crew", category: "Base Layers", tier: "gear", shortDesc: "Warm when wet, scent-fighting merino.", image: "/images/deadfall-kit-studio.png" },
  { slug: "merino-base-bottoms", name: "Merino Base Layer Bottoms", category: "Base Layers", tier: "gear", shortDesc: "The foundation of every cold sit.", image: "/images/deadfall-kit-studio.png" },
  { slug: "silent-stalk-hoodie", name: "Silent Stalk Hoodie", category: "Base Layers", tier: "gear", shortDesc: "Mid-layer built for the final hundred yards.", image: "/images/deadfall-kit-studio.png" },
  { slug: "silent-stalk-pants", name: "Silent Stalk Pants", category: "Pants & Bibs", tier: "gear", shortDesc: "Quiet fabric, articulated fit.", image: "/images/deadfall-loadout-full.png" },
  { slug: "timber-insulated-bibs", name: "Timber Insulated Bibs", category: "Pants & Bibs", tier: "gear", shortDesc: "All-day warmth for the all-day sit.", image: "/images/deadfall-loadout-full.png" },
  { slug: "scentlock-beanie", name: "Scentlock Beanie", category: "Headwear & Neck", tier: "gear", shortDesc: "Warmth up top, scent control built in.", image: "/images/art-skull-fog.png" },
  { slug: "field-ball-cap", name: "Field Ball Cap", category: "Headwear & Neck", tier: "gear", shortDesc: "DEADFALL pattern, low profile.", image: "/images/art-skull-fog.png" },
  { slug: "neck-gaiter", name: "Neck Gaiter", category: "Headwear & Neck", tier: "gear", shortDesc: "Conceal the shine, cut the wind.", image: "/images/art-skull-fog.png" },
  { slug: "cooling-snap-towel", name: "Cooling Snap Towel", category: "Headwear & Neck", tier: "gear", shortDesc: "Early-season heat management.", image: "/images/art-skull-fog.png" },
  { slug: "field-gloves", name: "Field Gloves", category: "Accessories", tier: "gear", shortDesc: "Dexterity for the draw.", image: "/images/art-brand-scene-dark.png" },
  { slug: "insulated-gloves", name: "Insulated Gloves", category: "Accessories", tier: "gear", shortDesc: "For the mornings that bite back.", image: "/images/art-brand-scene-dark.png" },
  { slug: "merino-boot-socks", name: "Merino Boot Socks", category: "Accessories", tier: "gear", shortDesc: "Miles-deep comfort.", image: "/images/art-brand-scene-dark.png" },
  { slug: "deadfall-day-pack", name: "DEADFALL Day Pack", category: "Accessories", tier: "gear", shortDesc: "Everything for a day in, packed quiet.", image: "/images/art-brand-scene-dark.png" },
];

export const allProducts: Product[] = [...merch, ...gear];

export function getProduct(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export const merchCategories = ["T-Shirts", "Hoodies", "Hats", "Cups"] as const;
export const gearCategories = ["Outerwear", "Base Layers", "Pants & Bibs", "Headwear & Neck", "Accessories"] as const;

// Home page featured grid: 5 merch + 1 gear teaser
export const featured: Product[] = [
  merch[1], // DEADFALL Buck Tee
  merch[0], // Vanish Logo Tee
  merch[4], // Pullover Hoodie
  merch[6], // Chevron Cap
  merch[10], // DEADFALL Tumbler
  gear[0], // Apex Softshell — Coming Soon teaser
];
