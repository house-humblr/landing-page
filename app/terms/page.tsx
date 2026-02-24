import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Zcomments terms of service — the rules and guidelines for using the Zcomments browser extension for Zillow.',
  alternates: {
    canonical: 'https://humblr.house/terms',
  },
};

export default function TermsOfService() {
  return (
    <>
      {/* ---- NAV ---- */}
      <nav className={styles.nav} aria-label="Terms page navigation">
        <Link href="/" className={styles.navLogo}>
          <Image src="/text-logo.png" alt="Zcomments" width={140} height={32} className={styles.navLogoImg} />
        </Link>
        <Link href="/" className={styles.navBack}>
          &larr; Back to home
        </Link>
      </nav>

      {/* ---- CONTENT ---- */}
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: February 22, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            By installing, accessing, or using the Zcomments browser extension
            (&ldquo;Extension&rdquo;), you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Extension.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Description of Service</h2>
          <p className={styles.text}>
            Zcomments is a free browser extension that adds a community comment section to Zillow
            property listing pages. The Extension allows users to post comments, reply to other
            users, upload images, and vote on comments. Zcomments is not affiliated with, endorsed
            by, or connected to Zillow Group, Inc.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. User Accounts</h2>
          <p className={styles.text}>
            To post comments or interact with content, you must create an account. You are
            responsible for maintaining the confidentiality of your account credentials and for all
            activity that occurs under your account. You agree to provide accurate information when
            creating your account and to update it as needed.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. User Content</h2>
          <p className={styles.text}>
            You retain ownership of the content you post through the Extension. By posting content,
            you grant Zcomments a non-exclusive, worldwide, royalty-free license to display,
            distribute, and store your content as necessary to operate the service.
          </p>
          <p className={styles.text}>You agree not to post content that:</p>
          <ul className={styles.list}>
            <li>Is unlawful, defamatory, harassing, threatening, or hateful</li>
            <li>Infringes on the intellectual property rights of others</li>
            <li>Contains spam, advertising, or unsolicited promotional material</li>
            <li>Impersonates another person or entity</li>
            <li>Contains malware, viruses, or other harmful code</li>
            <li>Violates the privacy of others or shares personal information without consent</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Content Moderation</h2>
          <p className={styles.text}>
            We reserve the right to remove any content that violates these Terms or that we
            determine, in our sole discretion, is harmful to the community. We may also suspend or
            terminate accounts that repeatedly violate these Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
          <p className={styles.text}>
            The Extension, including its code, design, logos, and branding, is the property of
            Zcomments and is protected by applicable intellectual property laws. You may not copy,
            modify, distribute, or reverse-engineer any part of the Extension without our prior
            written consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Disclaimer of Warranties</h2>
          <p className={styles.text}>
            The Extension is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express or implied. We do not guarantee that the
            Extension will be uninterrupted, error-free, or compatible with all browser versions or
            operating systems.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
          <p className={styles.text}>
            To the fullest extent permitted by law, Zcomments shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out of or related to
            your use of the Extension. Our total liability for any claim shall not exceed the amount
            you paid to use the Extension (which is zero, as the Extension is free).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Third-Party Services</h2>
          <p className={styles.text}>
            The Extension operates on Zillow.com and may integrate with third-party services such
            as Google for authentication and cloud storage for image uploads. Your use of these
            third-party services is subject to their respective terms and privacy policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Termination</h2>
          <p className={styles.text}>
            We may suspend or terminate your access to the Extension at any time, with or without
            cause, and with or without notice. You may stop using the Extension at any time by
            uninstalling it from your browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes to Terms</h2>
          <p className={styles.text}>
            We may update these Terms from time to time. We will notify users of material changes
            through the Extension or our website. Your continued use of the Extension after changes
            are posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Governing Law</h2>
          <p className={styles.text}>
            These Terms shall be governed by and construed in accordance with the laws of the
            United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>13. Contact Us</h2>
          <p className={styles.text}>
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:maratkotik97@gmail.com" className={styles.contactLink}>
              maratkotik97@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className={styles.footer}>
        <nav className={styles.footerNav} aria-label="Footer">
          <a
            href="https://chromewebstore.google.com/detail/humblr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome Web Store
          </a>
          <a
            href="https://apps.apple.com/app/humblr"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </a>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p>&copy; {new Date().getFullYear()} Zcomments. All rights reserved.</p>
      </footer>
    </>
  );
}
