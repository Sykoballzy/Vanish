import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The ground rules for using the Vanish Apparel site and store.",
};

export default function TermsPage() {
  return (
    <PolicyLayout eyebrow="The Fine Print" title="Terms of Service">
      <section>
        <h2>The deal</h2>
        <p>
          By using this site or placing an order, you&apos;re agreeing to
          these terms. They&apos;re short and written in plain English —
          worth the two-minute read.
        </p>
      </section>

      <section>
        <h2>Orders & pricing</h2>
        <ul>
          <li>
            Prices are in U.S. dollars and can change — the price at checkout
            is the price you pay.
          </li>
          <li>
            If a listing has an obvious error (a $3 hoodie), we may cancel
            and refund the order rather than honor the mistake.
          </li>
          <li>
            An order confirmation email means we received your order; it
            ships after production per our{" "}
            <a href="/policies/shipping-returns" className="text-ember underline underline-offset-4">
              Shipping &amp; Returns
            </a>{" "}
            policy.
          </li>
        </ul>
      </section>

      <section>
        <h2>Our brand is ours</h2>
        <p>
          The VANISH name, the chevron-V mark, the wordmark, the artwork on
          this site, and the DEADFALL™ pattern are the property of Vanish
          Apparel. Wear them proudly; don&apos;t print them on your own
          stuff, use them commercially, or pass them off as yours without
          written permission.
        </p>
      </section>

      <section>
        <h2>Your photos (#wevanish)</h2>
        <p>
          When you tag your photos with #wevanish or submit them to us, you
          keep ownership — and you give us permission to feature them on this
          site and our social channels, with credit to you. If you ever want
          one taken down, email us and it&apos;s gone.
        </p>
      </section>

      <section>
        <h2>Hunt at your own risk</h2>
        <p>
          Our gear is apparel, not safety equipment. Hunting is inherently
          risky — know your local regulations, handle weapons safely, and
          make your own judgment calls in the field. To the fullest extent
          the law allows, Vanish Apparel isn&apos;t liable for indirect or
          consequential damages arising from use of the site or products; our
          total liability is capped at what you paid for the product in
          question.
        </p>
      </section>

      <section>
        <h2>Housekeeping</h2>
        <p>
          These terms are governed by the laws of the State of South
          Carolina. If we update them, the new version lives at this page.
          Questions? Email{" "}
          <a href="mailto:support@vanishapparelco.com" className="text-ember underline underline-offset-4">
            support@vanishapparelco.com
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
}
