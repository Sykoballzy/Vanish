# VANISH APPAREL — Print-on-Demand & Fulfillment Setup
**How the merch store actually connects to money and shipping.** Fable builds the storefront; this is the machine behind it.

---

## THE BIG PICTURE
For t-shirts, hats, hoodies, and cups, don't buy inventory. Use **print-on-demand (POD)**: when a customer orders, a partner prints that item and ships it directly. No upfront cost, no boxes in the garage, no risk on unsold stock.

The flow:
```
Customer orders on the site
      ↓
Order passes to the POD service (Printful / Printify)
      ↓
POD prints the item and ships it to the customer
      ↓
You keep the margin (retail price − POD base cost)
```

Your brother-in-law never touches a shirt. He designs, sets prices, and collects the difference.

---

## WHAT HE ACTUALLY NEEDS TO SIGN UP FOR

### 1. A store platform that handles checkout + payment
Fable builds the front-end look. But taking real money needs a commerce backend. Two realistic paths:

- **Shopify (recommended).** ~$39/mo. It's the industry standard, integrates with every POD service in one click, handles payments, taxes, and shipping rates automatically. If Fable can export to or connect with Shopify, use it.
- **Fable's built-in commerce** (if it has one). Check whether Fable natively supports checkout + a POD integration. If yes, simpler. If it only builds the visual site, you'll point it at Shopify for the actual store.

> **Action:** Confirm what Fable offers for real checkout before committing. If Fable is display-only, Shopify is the backend and Fable is the skin.

### 2. A print-on-demand partner
| Service | Best for | Notes |
|---|---|---|
| **Printful** | Quality + brand feel | Higher base cost, better prints, inside labels, pack-ins. Best for a premium brand like Vanish. |
| **Printify** | Lower cost / margin | Marketplace of print shops, cheaper, quality varies by shop. Order samples first. |

For a brand positioned as premium, **start with Printful.** The print quality and the ability to add branded inside labels and packaging matter when you're charging $32 for a tee.

### 3. A payment processor
Shopify Payments (built in) or Stripe. This is where customer money lands before it hits his bank. **He sets this up himself** — it requires his banking info and should never be entered by anyone else.

---

## PRODUCT-BY-PRODUCT REALITY CHECK

| Product | POD-friendly? | Notes |
|---|---|---|
| T-Shirts | Yes | Easiest. Printful/Printify both strong. |
| Hoodies | Yes | Same as tees. Pick a heavyweight blank for premium feel. |
| Hats / Caps | Yes | Embroidery looks better than print on hats — costs more, worth it. |
| Beanies | Yes | Embroidered patch or woven label. |
| Cups / Tumblers / Mugs | Yes | POD handles these; tumblers ship separately from apparel (different facility) so shipping shows two packages sometimes. |
| **DEADFALL gear** | **No — this is real manufactured gear** | POD can't make technical hunting jackets. This is the "Coming Soon" line, produced through an apparel manufacturer, not POD. Different supply chain entirely. |

That last row is the key reason the site is split into two tiers: **merch is POD (easy, now); gear is real manufacturing (later, harder).**

---

## MARGIN MATH (so prices aren't guesses)
Rough example on a t-shirt:
- Printful base cost (blank + print): ~$12–14
- Your retail price: $32
- Shipping: customer-paid or baked in
- **Your margin: ~$18–20 per shirt**

Set retail at roughly **2.2–2.5× the POD base cost** to stay healthy after fees. The placeholder prices in the Fable prompt already follow this.

---

## STARTUP CHECKLIST (in order)
1. Decide: Shopify backend, or Fable native commerce? (Confirm Fable's capability first.)
2. Create the Printful account. Connect it to the store platform.
3. Upload the apparel-graphic files (the shirt designs — deer, pronghorn, buck, logo tees) into Printful and place them on blanks.
4. Set retail prices (2.2–2.5× base cost).
5. Set up Shopify Payments / Stripe — **he does this himself** with his own banking info.
6. Order **samples of every product** before going live. Check print quality and color. This is non-negotiable for a premium brand.
7. Set shipping rates (or free-shipping-over-$X, which lifts average order size).
8. Do one full test order start to finish.
9. Launch merch. Keep gear on "Notify Me" until the real line is manufactured.

---

## WHAT NOT TO DO
- Don't hold inventory on merch. POD removes the risk — use it.
- Don't skip sample orders. A bad first print kills a new brand's reputation.
- Don't let anyone but the owner enter banking/payment credentials.
- Don't launch gear before it's manufacturer-ready. The "Coming Soon + Notify Me" setup builds the launch list without overpromising.

---

## ONE STRATEGIC NOTE
The merch line does double duty: it's revenue **and** it's marketing. Every hunter wearing a Vanish tee or drinking from a Vanish tumbler is a walking ad while the real gear gets built. Price merch to move, use it to grow the #wevanish community, and let the Field Wins wall turn customers into content. By the time the DEADFALL gear launches, there's an audience already wearing the brand.
