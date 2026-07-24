import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "How Vanish Apparel orders are made, shipped, and made right.",
};

export default function ShippingReturnsPage() {
  return (
    <PolicyLayout eyebrow="The Fine Print" title="Shipping & Returns">
      <section>
        <h2>Made to order</h2>
        <p>
          Every piece of Vanish merch is printed when you order it — nothing
          sits in a warehouse going stale. Production takes 2–5 business days
          before your order ships. It&apos;s a little slower than the big-box
          machine, and it&apos;s why your gear is fresh off the press.
        </p>
      </section>

      <section>
        <h2>Shipping</h2>
        <ul>
          <li>
            U.S. orders typically arrive 5–10 business days after you order
            (production + transit).
          </li>
          <li>You&apos;ll get a tracking link by email the moment it ships.</li>
          <li>
            Apparel and drinkware print at different facilities, so mixed
            orders may show up as two packages a few days apart. Both are
            coming — no need to email us about the first box.
          </li>
        </ul>
      </section>

      <section>
        <h2>Damaged, defective, or wrong item</h2>
        <p>
          If your order shows up misprinted, damaged, or just plain wrong,
          that&apos;s on us. Email{" "}
          <a href="mailto:support@vanishapparelco.com" className="text-ember underline underline-offset-4">
            support@vanishapparelco.com
          </a>{" "}
          within 30 days of delivery with your order number and a photo, and
          we&apos;ll ship a replacement free. No return-to-sender hoops.
        </p>
      </section>

      <section>
        <h2>Sizing and exchanges</h2>
        <p>
          Because everything is made to order, we can&apos;t take returns for
          a change of heart. Check the size guide on each product page before
          you buy — and if you&apos;re between sizes, size up for the field
          fit. Ordered the wrong size anyway? Email us. We&apos;re hunters,
          not a faceless returns department — we&apos;ll work something out.
        </p>
      </section>
    </PolicyLayout>
  );
}
