import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Zcomments team.',
  alternates: {
    canonical: 'https://humblr.house/contact',
  },
};

export default function Contact() {
  return (
    <>
      {/* ---- NAV ---- */}
      <nav className={styles.nav} aria-label="Contact page navigation">
        <Link href="/" className={styles.navLogo}>
          <Image src="/text-logo.png" alt="Zcomments" width={140} height={32} className={styles.navLogoImg} />
        </Link>
        <Link href="/" className={styles.navBack}>
          &larr; Back to home
        </Link>
      </nav>

      {/* ---- CONTENT ---- */}
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.text}>
          Have a question, feedback, or just want to say hi? Reach out anytime.
        </p>
        <a href="mailto:maratkotik97@gmail.com" className={styles.email}>
          maratkotik97@gmail.com
        </a>
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
