import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Zcomments privacy policy — how we collect, use, and protect your data when you use the Zcomments browser extension for Zillow.',
  alternates: {
    canonical: 'https://humblr.house/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* ---- NAV ---- */}
      <nav className={styles.nav} aria-label="Privacy page navigation">
        <Link href="/" className={styles.navLogo}>
          <Image src="/text-logo.png" alt="Zcomments" width={140} height={32} className={styles.navLogoImg} />
        </Link>
        <Link href="/" className={styles.navBack}>
          &larr; Back to home
        </Link>
      </nav>

      {/* ---- CONTENT ---- */}
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: February 22, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.text}>
            Zcomments (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a browser extension
            that enables users to leave and view comments on Zillow property listings. We are
            committed to protecting your privacy and being transparent about our data practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.text}>
            <strong>Account Information:</strong> When you create an account, we collect your email
            address and display name to identify you within the community.
          </p>
          <p className={styles.text}>
            <strong>Comments &amp; Content:</strong> We store comments, replies, and any images you
            upload to share with other users on property listings.
          </p>
          <p className={styles.text}>
            <strong>Usage Data:</strong> We collect basic analytics such as page views and session
            information to understand how users interact with the extension.
          </p>
          <p className={styles.text}>
            <strong>Technical Data:</strong> We may collect your browser type, extension version, and
            general interaction patterns to maintain and improve our service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p className={styles.text}>
            We use your information to provide and improve our services, display your comments to
            other users, and maintain the security of our platform. We do not sell your personal
            information to third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Sharing</h2>
          <p className={styles.text}>
            We do not sell, trade, or rent your personal information. We may share data only in the
            following limited circumstances:
          </p>
          <ul className={styles.list}>
            <li>With service providers who help us operate our platform (hosting, storage)</li>
            <li>When required by law or to respond to legal process</li>
            <li>To protect our rights, privacy, safety, or property</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Storage &amp; Security</h2>
          <p className={styles.text}>
            Your data is stored securely on our servers. We implement industry-standard security
            measures to protect your information from unauthorized access, alteration, or
            destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.text}>You have the right to:</p>
          <ul className={styles.list}>
            <li>Request to view, edit, or delete your personal data at any time</li>
            <li>Delete your comments individually through the extension</li>
            <li>Request full account deletion by contacting us</li>
            <li>Opt out of non-essential analytics</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookies &amp; Local Storage</h2>
          <p className={styles.text}>
            Zcomments uses browser local storage to maintain your login session, save your theme
            preference (light or dark mode), and store anonymous session and visitor identifiers for
            analytics. We do not use tracking cookies from third-party advertisers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p className={styles.text}>
            This extension operates on Zillow.com but is not affiliated with, endorsed by, or
            connected to Zillow Group, Inc. We use Google for optional sign-in authentication and
            third-party cloud storage for image uploads. These services have their own privacy
            policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Children&rsquo;s Privacy</h2>
          <p className={styles.text}>
            Zcomments is not directed at children under the age of 13. We do not knowingly collect
            personal information from children. If you believe a child has provided us with personal
            data, please contact us and we will delete it promptly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
          <p className={styles.text}>
            We may update this privacy policy from time to time. We will notify users of any
            material changes through the extension. Continued use of Zcomments after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have questions about this privacy policy or our data practices, please contact us
            at{' '}
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
