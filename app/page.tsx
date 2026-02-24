import Link from "next/link";
import Image from "next/image";
import { GlowButton } from "@/components/GlowButton";
import { ChromeLogo } from "@/components/ChromeLogo";
import { SafariLogo } from "@/components/SafariLogo";
import { SvgFilters } from "@/components/SvgFilters";
import { Showcase } from "@/components/Showcase";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { EmailSignup } from "@/components/EmailSignup";
import { NavCtaLink } from "@/components/NavCtaLink";
import styles from "./page.module.css";

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zcomments — Comments on Zillow Listings",
  description:
    "Zcomments adds a comment section to every Zillow listing. Discuss home prices, neighborhoods, and what people really think about properties.",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome, Safari, macOS, Windows",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://humblr.house",
  downloadUrl: [
    "https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb",
    "https://apps.apple.com/us/app/zcomments/id6759467564",
  ],
  browserRequirements: "Requires Chrome 116+ or Safari 17+",
  softwareVersion: "4.3",
  author: {
    "@type": "Organization",
    name: "Zcomments",
    url: "https://humblr.house",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zcomments",
  url: "https://humblr.house",
  logo: "https://humblr.house/icon-512.png",
  sameAs: [
    "https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb",
    "https://apps.apple.com/us/app/zcomments/id6759467564",
  ],
};

const faqData = [
  {
    q: "What is Zcomments?",
    a: "Zcomments is a free browser extension that adds a comment section to every Zillow real estate listing. It lets you discuss home prices, neighborhoods, and what people really think about properties on the market.",
  },
  {
    q: "Is Zcomments free?",
    a: "Yes, Zcomments is completely free. You can download it for Chrome from the Chrome Web Store or for Safari from the App Store at no cost.",
  },
  {
    q: "What browsers does Zcomments support?",
    a: "Zcomments is available for Google Chrome and Apple Safari. It works on macOS, Windows, and any platform that supports these browsers.",
  },
  {
    q: "How does Zcomments work?",
    a: "Once installed, Zcomments automatically adds a comment section to every Zillow listing page you visit. You can read what others are saying, leave your own comments, reply to others, and vote on the most helpful insights — all directly on the Zillow page.",
  },
  {
    q: "Is my data safe with Zcomments?",
    a: "Zcomments only activates on Zillow listing pages. It does not track your browsing activity, collect personal data, or modify any other websites. Your comments are tied to your Zcomments account and are visible to other Zcomments users on the same listing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ================================================================
   FEATURE DATA
   ================================================================ */

const features = [
  {
    icon: "💬",
    title: "Comment on any listing",
    text: "Share your take on any home. From prices and conditions to neighborhood vibes, you can now leave comments directly on Zillow listings.",
  },
  {
    icon: "👍",
    title: "Reply and vote",
    text: "Respond to other buyers, agents, and neighbors. Upvote the most helpful comments so the best insights rise to the top.",
  },
  {
    icon: "🌐",
    title: "Chrome and Safari",
    text: "Install once and every Zillow listing automatically gets a comment section. No extra setup required.",
  },
  {
    icon: "📎",
    title: "Attach photos",
    text: "Drag and drop images into your comments. Share screenshots of comparable properties or neighborhood photos.",
  },
  {
    icon: "🔒",
    title: "Privacy first",
    text: "Zcomments only activates on Zillow pages. It never tracks your browsing, collects personal data, or modifies other websites.",
  },
  {
    icon: "✨",
    title: "100% free",
    text: "No subscription, no paywall, no premium tier. Zcomments is free to use for everyone.",
  },
];

const steps = [
  {
    title: "Install the extension",
    text: "Download Zcomments from the Chrome Web Store or the App Store for Safari. It takes less than 10 seconds.",
  },
  {
    title: "Browse Zillow normally",
    text: "Visit any Zillow listing. Zcomments automatically injects a comment section into the page — you don't have to do anything extra.",
  },
  {
    title: "Join the conversation",
    text: "Read what other buyers, sellers, and locals are saying. Leave your own comments, reply to others, and vote on the best takes.",
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SvgFilters />
      <ScrollAnimations />

      {/* Dot grid background */}
      <div className={styles.dotGrid} aria-hidden="true" />

      {/* ---- NAV ---- */}
      <nav className={styles.nav}>
        <Image
          src="/text-logo.png"
          alt="Zcomments"
          width={140}
          height={32}
          className={styles.navLogo}
          priority
        />
        <div className={styles.navLinks}>
          <a href="#features" data-mp-event="nav_features_clicked">
            Features
          </a>
          <a href="#how-it-works" data-mp-event="nav_how_it_works_clicked">
            How it works
          </a>
          <a href="#faq" data-mp-event="nav_faq_clicked">
            FAQ
          </a>
        </div>
        <a
          href="https://buymeacoffee.com/mkotik"
          className={styles.navCoffee}
          target="_blank"
          rel="noopener noreferrer"
          data-mp-event="nav_coffee_clicked"
        >
          ☕
        </a>
        <NavCtaLink className={styles.navCta}>
          <Image
            src="/text-logo-2.png"
            alt="Zcomments"
            width={100}
            height={22}
            className={styles.navCtaLogo}
          />{" "}
          →
        </NavCtaLink>
      </nav>

      <main>
        {/* ---- HERO (scroll-lock cinematic) ---- */}
        <section
          className={styles.hero}
          aria-label="Download Zcomments"
          data-scroll="hero-section"
        >
          <div className={styles.heroSticky}>
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.pill} data-scroll="hero-pill">
                  Free on Chrome &amp; Safari — <span>Install now</span>
                </div>

                <h1 className={styles.heroTitle} data-scroll="hero-title">
                  The{" "}
                  <span className={styles.heroTitleAccent}>
                    comment section
                  </span>
                  <br />
                  <Image
                    src="/zillow-text-logo.png"
                    alt="Zillow"
                    width={200}
                    height={48}
                    className={styles.heroZillow}
                  />{" "}
                  is missing.
                </h1>

                <p className={styles.heroSub} data-scroll="hero-sub">
                  Discuss home prices, neighborhoods, and what people really
                  think about properties on the market. Zcomments adds a{" "}
                  <strong>free comment section</strong> to every Zillow listing.
                </p>

                <div className={styles.heroCtas} data-scroll="hero-ctas">
                  <GlowButton
                    href="https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb"
                    icon={<ChromeLogo />}
                    label="Download for Chrome"
                    trackingEvent="chrome_download_clicked"
                    section="hero"
                  />
                  <GlowButton
                    href="https://apps.apple.com/us/app/zcomments/id6759467564"
                    icon={<SafariLogo />}
                    label="Download for Safari"
                    trackingEvent="safari_download_clicked"
                    section="hero"
                  />
                </div>
              </div>

              {/* ---- PRODUCT SHOWCASE — interactive 3D browser mockup ---- */}
              <div className={styles.heroShowcase} data-scroll="hero-showcase">
                <Showcase />
              </div>
            </div>
          </div>
        </section>

        <div className={styles.divider} data-reveal />

        {/* ---- FEATURES ---- */}
        <section
          id="features"
          className={styles.features}
          aria-label="Features"
        >
          <span className={styles.sectionTag} data-reveal>
            Features
          </span>
          <h2
            className={styles.sectionTitle}
            data-reveal
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Everything you need to
            <br />
            <span className={styles.sectionTitleAccent}>discuss</span> real
            estate
          </h2>
          <p
            className={styles.sectionSub}
            data-reveal
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            Zcomments turns every Zillow listing into a conversation.
          </p>

          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <article
                key={i}
                className={styles.featureCard}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties
                }
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.divider} data-reveal />

        {/* ---- HOW IT WORKS ---- */}
        <section
          id="how-it-works"
          className={styles.howItWorks}
          aria-label="How it works"
        >
          <span className={styles.sectionTag} data-reveal>
            How it works
          </span>
          <h2
            className={styles.sectionTitle}
            data-reveal
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Up and running{" "}
            <span className={styles.sectionTitleAccent}>in seconds</span>
          </h2>

          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li
                key={i}
                className={styles.step}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties
                }
              >
                <div className={styles.stepNumber}>{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.divider} data-reveal />

        {/* ---- FAQ ---- */}
        <section
          id="faq"
          className={styles.faq}
          aria-label="Frequently asked questions"
        >
          <span className={styles.sectionTag} data-reveal>
            FAQ
          </span>
          <h2
            className={styles.sectionTitle}
            data-reveal
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            Frequently asked{" "}
            <span className={styles.sectionTitleAccent}>questions</span>
          </h2>

          <dl className={styles.faqList}>
            {faqData.map((f, i) => (
              <div
                key={i}
                className={styles.faqItem}
                data-reveal
                style={
                  { "--reveal-delay": `${i * 0.06}s` } as React.CSSProperties
                }
              >
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---- BOTTOM CTA ---- */}
        <section className={styles.bottomCta} aria-label="Download">
          <h2 className={styles.bottomCtaTitle} data-reveal>
            Ready to join the{" "}
            <span className={styles.bottomCtaTitleAccent}>conversation?</span>
          </h2>
          <p
            className={styles.bottomCtaSub}
            data-reveal
            style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          >
            Install Zcomments in seconds. Free forever.
          </p>
          <div
            className={styles.bottomCtaButtons}
            data-reveal
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          >
            <GlowButton
              href="https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb"
              icon={<ChromeLogo />}
              label="Download for Chrome"
              trackingEvent="chrome_download_clicked"
              section="bottom_cta"
            />
            <GlowButton
              href="https://apps.apple.com/us/app/zcomments/id6759467564"
              icon={<SafariLogo />}
              label="Download for Safari"
              trackingEvent="safari_download_clicked"
              section="bottom_cta"
            />
          </div>
          <div
            data-reveal
            style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
          >
            <EmailSignup />
          </div>
        </section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className={styles.footer}>
        <nav className={styles.footerNav} aria-label="Footer">
          <a
            href="https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            data-mp-event="footer_chrome_store_clicked"
          >
            Chrome Web Store
          </a>
          <a
            href="https://apps.apple.com/us/app/zcomments/id6759467564"
            target="_blank"
            rel="noopener noreferrer"
            data-mp-event="footer_app_store_clicked"
          >
            App Store
          </a>
          <Link href="/privacy" data-mp-event="footer_privacy_clicked">
            Privacy Policy
          </Link>
          <Link href="/terms" data-mp-event="footer_terms_clicked">
            Terms of Service
          </Link>
          <Link href="/contact" data-mp-event="footer_contact_clicked">
            Contact
          </Link>
        </nav>
        <p>&copy; {new Date().getFullYear()} Zcomments. All rights reserved.</p>
      </footer>
    </>
  );
}
