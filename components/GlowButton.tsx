'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { trackEvent } from '@/lib/mixpanel';
import styles from './GlowButton.module.css';

interface GlowButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  trackingEvent?: string;
  section?: string;
}

/**
 * Context-aware glowing card button.
 *
 * Pointer tracking math:
 *   1. Get the card's bounding rect.
 *   2. Compute card center: centerX = rect.left + rect.width / 2
 *   3. Cursor offset from center: relX = clientX - centerX
 *   4. Normalise to [-1, 1]: x = relX / (rect.width / 2)
 *      At x = -1 the cursor is at the left edge; x = 1 at right.
 *   5. Written to CSS custom properties --pointer-x, --pointer-y.
 *
 * In CSS these drive:
 *   translate: calc(var(--pointer-x) * 50cqi)
 *              calc(var(--pointer-y) * 50cqh);
 * So the glow icon shifts up to ±50% of the card's own dimension.
 */
export function GlowButton({ href, icon, label, trackingEvent, section }: GlowButtonProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let raf: number | null = null;

    const onPointerMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        card.style.setProperty('--pointer-x', x.toFixed(3));
        card.style.setProperty('--pointer-y', y.toFixed(3));
        raf = null;
      });
    };

    /* Listen on document so glow follows even when cursor
       is outside the card (creating the "ambient" feel). */
    document.addEventListener('pointermove', onPointerMove);
    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      onClick={() => {
        if (trackingEvent) trackEvent(trackingEvent, { section: section || 'unknown' });
      }}
    >
      <div className={styles.inner}>
        {/* Blurred, saturated duplicate — the glow layer */}
        <div className={styles.glowIcon}>{icon}</div>
        {/* Sharp visible icon */}
        <div className={styles.realIcon}>{icon}</div>
        {/* Label */}
        <span className={styles.label}>{label}</span>
      </div>
    </a>
  );
}
