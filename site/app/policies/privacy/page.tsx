import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What Vanish Apparel collects, what we do with it, and what we never do.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout eyebrow="The Fine Print" title="Privacy Policy">
      <section>
        <h2>The short version</h2>
        <p>
          We collect the minimum we need to ship you gear and tell you when
          new gear drops. We never sell your information. Ever.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Email address</strong> — when you join the list or ask to
            be notified about a product launch.
          </li>
          <li>
            <strong>Order details</strong> — name, shipping address, email,
            and what you bought, when the store is live. Payment card details
            go directly to our payment processor; we never see or store them.
          </li>
          <li>
            <strong>Basic site analytics</strong> — aggregate page views and
            device types, so we know what&apos;s working. Nothing that
            follows you around the internet.
          </li>
          <li>
            <strong>Your cart</strong> — stored in your own browser, not on
            our servers.
          </li>
        </ul>
      </section>

      <section>
        <h2>What we do with it</h2>
        <ul>
          <li>Print and ship your order.</li>
          <li>Email you tracking, receipts, and answers.</li>
          <li>
            Send launch news and field reports if you signed up — unsubscribe
            with one click, no hard feelings.
          </li>
        </ul>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>
          Only the services that make the store run: our print-and-fulfillment
          partner (to ship your order), our payment processor (to take
          payment), and our email service (to send the emails you asked for).
          Each gets only what it needs. Nobody gets your data for marketing,
          and nobody pays us for it.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <ul>
          <li>Unsubscribe from emails anytime via the link in any email.</li>
          <li>
            Want your data deleted? Email{" "}
            <a href="mailto:support@vanishapparelco.com" className="text-ember underline underline-offset-4">
              support@vanishapparelco.com
            </a>{" "}
            and we&apos;ll remove it.
          </li>
        </ul>
      </section>

      <section>
        <h2>The boring-but-important stuff</h2>
        <p>
          This site isn&apos;t directed at children under 13 and we
          don&apos;t knowingly collect their information. If we update this
          policy, the changes appear on this page with a new effective date.
        </p>
      </section>
    </PolicyLayout>
  );
}
