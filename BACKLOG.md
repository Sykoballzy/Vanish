# VANISH — Launch Backlog

Prioritized list of improvements for vanish-henna.vercel.app.
**Owner key:** 🧔 = brand owner must do it · 💻 = code work (Claude can do it) · 🤝 = both

---

## P0 — Launch blockers (site can't take money or capture demand without these)

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 1 | **Real email capture** | 💻 + 🧔 picks provider | Every signup today is lost — the forms are stubs. This is the most urgent item because the pre-launch list IS the launch. Wire EmailSignup + NotifyMe to Mailchimp/Klaviyo/Formspree now, before Shopify exists. NotifyMe already sends per-product slugs, so gear interest is measurable from day one. |
| 2 | **Commerce backend** (Shopify + Printful) | 🧔 accounts, 💻 integration | Per the POD plan: Shopify ($39/mo) → connect Printful → replace stub checkout with Shopify checkout. Owner enters his own banking into Shopify Payments. |
| 3 | **Sample orders of every product** | 🧔 | Non-negotiable per the POD doc — verify print quality before charging $32/tee. |
| 4 | **Real product mockups** | 🤝 | Printful generates product mockups (shirt-on-model with the art). Swap the brand-art placeholder images in `site/lib/products.ts`. Cards currently show artwork, not products — fine for preview, not for purchase confidence. |
| 5 | **Policy pages: Shipping & Returns, Privacy, Terms** | 💻 draft, 🧔 review | ✅ Drafted and live at /policies/* (footer links added), marked "Draft — takes effect at store launch." Owner must review before taking orders; cross-check refund terms against Printful's actual policy. |
| 6 | **Custom domain** | 🧔 buys, 💻 connects | Checked the registry 2026-07-24: `vanishapparelco.com` and `vanishapparelcompany.com` are AVAILABLE (~$12/yr); `vanishapparel.com`, `wevanish.com`, `builtforthehunt.com` are taken. Recommend grabbing `vanishapparelco.com` now — matches the social handle plan. Two clicks to attach in Vercel. |
| 7 | **Real social account URLs** | 🧔 | Site now points at `@vanishapparelco` everywhere (the old `vanishapparel` handles belong to other companies). Owner: register `@vanishapparelco` on IG/FB/YouTube/TikTok before someone else does, or tell us the final handle and it's a one-line change. Email references `support@vanishapparelco.com` — set up once the domain is bought. |

## P1 — High-impact, pre-launch (do these while waiting on Shopify)

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 8 | **Social share cards (OG images)** | 💻 | Confirmed missing: texting the link shows no preview image. Add `og:image`/`twitter:card` using the skull poster or hero shot. Biggest bang-for-buck for a brand spread by word of mouth. |
| 9 | **Image optimization** | 💻 | 37.7 MB of PNG photo sources; hero serves ~900 KB to some browsers. Convert photos to high-quality JPEG (~200–400 KB each) — faster on the phones hunters actually browse on, and stays inside Vercel's free image-transformation quota. |
| 10 | **Analytics** | 💻 | Zero visibility into traffic today. Vercel Analytics (free tier) is one click + one package. Know if buddy's IG post drove 40 or 400 visitors. |
| 11 | **robots.txt + sitemap.xml** | 💻 | Confirmed missing. Trivial with Next's metadata routes; needed for Google to index by launch. |
| 12 | **Announcement bar** | 💻 | Slim top bar: "DEADFALL gear line coming — get first access →" driving to email signup. Turns every page into list-building. |
| 13 | **Add-to-cart feedback: cart drawer or toast** | 💻 | Currently a small inline confirmation. A slide-out mini-cart is the e-commerce standard and lifts multi-item orders. |
| 14 | **Size guide** | 🤝 | Printful publishes exact garment measurements per blank. Add a "Size Guide" link/modal next to the size picker — cuts returns, builds confidence. |
| 15 | **Custom 404 page** | 💻 | On-brand one-liner ("This page vanished.") + link back to Shop. Quick win. |

## P2 — Launch week / shortly after

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 16 | **Launch discount for the email list** | 🤝 | "First 100 orders: 15% off with code FIRSTLIGHT." Rewards the list, creates urgency, seeds Field Wins photos. |
| 17 | **Field Wins submission flow** | 💻 | "Submit Your Hunt" currently links to Instagram. Add a proper photo-upload form (or keep IG but add email option). Populate the wall with real customers ASAP — swap out the placeholder brand photography as wins come in. |
| 18 | **Product Schema.org markup** | 💻 | Structured data so Google shows price/availability in results. |
| 19 | **Free-shipping threshold** | 🧔 sets number, 💻 UI | "Free shipping over $X" bar + progress indicator in cart — the single most reliable AOV lifter. Pick X ≈ 1.5× average order. |
| 20 | **Instagram content strip on Home** | 💻 | Curated grid linked to the real IG (manually curated, not a live feed — same principle as Field Wins). |
| 21 | **Founder photo + signature on About** | 🧔 photo, 💻 layout | The story is first-person and strong; a real face makes it land. Photo of him in the field, gaiter down. |

## P3 — Growth ideas (post-launch, when there's traffic and revenue)

- **Gear launch countdown + waitlist tiers** — when DEADFALL manufacturing has a date, add a countdown page; early-list members get 48-hr early access. Scarcity done honestly.
- **"Field Journal" blog** — 1 post/month (scouting tips, gear philosophy, hunt recaps). The realistic SEO play for a brand this size; also feeds the email list.
- **Reviews** (Judge.me or Shopify reviews) once there are ~20 orders — social proof on product pages.
- **Ambassador / pro-staff program** — hunters get a code, earn merch credit. Cheap distribution in this niche.
- **Seasonal drops** — limited tee colorways per season (turkey spring, whitetail fall) to give the list a reason to open emails year-round.
- **Bundle pricing** — "Camp Kit" (mug + tee + hat) at a small discount; moves cups, which rarely sell alone.
- **Gift cards** at first holiday season.
- **Wholesale one-pager** — local pro shops in SC; the About story is the pitch.

## Technical debt / housekeeping

- Contact form is a stub → wire alongside item 1 (same provider trip).
- `favicon-broadhead.png` is 3.9 KB and slightly soft — consider a crisp SVG/regenerated icon.
- Lighthouse audit after image optimization (item 9) — target 90+ mobile performance.
- The `Resources/` originals are committed to the repo (fine, it's private history) — don't add more large binaries casually; consider a shared drive for raw brand assets going forward.
