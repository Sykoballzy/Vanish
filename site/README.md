# VANISH APPAREL — Storefront

Next.js 16 + Tailwind v4 storefront for Vanish Apparel. Built from the brief in
`../B_Vanish_Fable_Master_Prompt.md`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## What's real vs. stubbed

| Piece | Status |
|---|---|
| All 7 pages, brand system, product catalog | Done |
| Cart (variants, quantities, localStorage persistence) | Done |
| Checkout | **Stubbed** — `/checkout` shows a "opens at launch" notice + email capture |
| Email signup / Notify Me / Contact form | **Stubbed** — fake success state, no backend |
| Product photos | Brand-art placeholders until Printful mockups exist |

## Wiring checklist (launch)

1. **Commerce backend** — recommended: Shopify + Printful (see `../C_Vanish_PrintOnDemand_Setup.md`).
   Replace the stub in `app/checkout/page.tsx` with a redirect to Shopify checkout
   (Storefront API cart) or swap Add to Cart for Buy Buttons.
2. **Email lists** — point `components/EmailSignup.tsx` and `components/NotifyMe.tsx`
   at the real list provider (Shopify customer tags, Mailchimp, etc.). NotifyMe already
   passes `productSlug` so gear interest can be tracked per item.
3. **Contact form** — point `components/ContactForm.tsx` at Formspree/Basin or the
   platform's contact app; update `support@vanishapparel.com` if the address differs.
4. **Product images** — swap `image` fields in `lib/products.ts` for Printful mockups
   once samples are approved.
5. **Social URLs** — placeholders (`instagram.com/vanishapparel` etc.) live in
   `components/Footer.tsx` and `app/contact/page.tsx`; update to the real handles.
6. **Deploy** — push to GitHub, import to Vercel (free tier is fine). Zero config needed.

## Where things live

- `lib/products.ts` — the entire catalog (merch + coming-soon gear). Edit prices/copy here.
- `lib/cart.tsx` — cart state (React context + localStorage).
- `app/globals.css` — brand tokens: charcoal `#141414`, bone `#F2EFE9`, ember `#C8702D`.
- `public/images/` — renamed site assets per `../A_Vanish_Asset_Master_Sheet.md`.
