'use client';

import { useEffect } from 'react';

/**
 * Headless component — renders nothing, just attaches scroll-driven
 * animations and intersection-based reveals.
 *
 * 1. HERO CINEMATIC EXIT: The hero is fully visible on load. As the user
 *    scrolls through the 300vh runway, the showcase dramatically rotates
 *    and flies into deep space while text fades out to the left.
 *    The page "locks" via position:sticky while this plays out.
 *
 * 2. SECTION REVEALS: IntersectionObserver watches all [data-reveal]
 *    elements and adds a `.revealed` class when 15% visible (fires once).
 */

/* ── Easing ────────────────────────────────────────────────────── */

function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  return (x: number): number => {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 20; i++) {
      const mid = (lo + hi) / 2;
      const bx =
        3 * p1x * mid * (1 - mid) ** 2 +
        3 * p2x * mid ** 2 * (1 - mid) +
        mid ** 3;
      if (bx < x) lo = mid;
      else hi = mid;
    }
    const t = (lo + hi) / 2;
    return (
      3 * p1y * t * (1 - t) ** 2 +
      3 * p2y * t ** 2 * (1 - t) +
      t ** 3
    );
  };
}

// Apple-style ease-in: slow start, accelerates away
const easeInApple = cubicBezier(0.55, 0.06, 0.68, 0.19);
// Smooth ease-in-out for text
const easeInOutSmooth = cubicBezier(0.42, 0, 0.58, 1);

/** Clamp + remap [inMin, inMax] → [0,1], then apply easing */
function progress(
  value: number,
  inMin: number,
  inMax: number,
  easeFn: (t: number) => number = (t) => t,
): number {
  const t = Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
  return easeFn(t);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/* ── Component ─────────────────────────────────────────────────── */

export function ScrollAnimations() {
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');

    /* ── Element references ─────────────────────────────────── */
    const heroSection = document.querySelector(
      '[data-scroll="hero-section"]',
    ) as HTMLElement | null;
    const heroShowcase = document.querySelector(
      '[data-scroll="hero-showcase"]',
    ) as HTMLElement | null;
    const heroPill = document.querySelector(
      '[data-scroll="hero-pill"]',
    ) as HTMLElement | null;
    const heroTitle = document.querySelector(
      '[data-scroll="hero-title"]',
    ) as HTMLElement | null;
    const heroSub = document.querySelector(
      '[data-scroll="hero-sub"]',
    ) as HTMLElement | null;
    const heroCtas = document.querySelector(
      '[data-scroll="hero-ctas"]',
    ) as HTMLElement | null;

    /* ── Hero cinematic scroll-lock (desktop only) ──────────── */
    let raf: number | null = null;
    let hoverWasEnabled = true; // starts enabled (hero visible on load)

    const updateCinematic = () => {
      raf = null;
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const scrollableDistance =
        heroSection.offsetHeight - window.innerHeight;
      // t: 0 = top of page (hero visible), 1 = fully scrolled past
      const t = Math.max(0, Math.min(1, -rect.top / scrollableDistance));

      /* ── Showcase: flies away into deep space ────────────── */
      // resting → rotated, scaled down, pushed deep, offset right
      if (heroShowcase) {
        const exitT = progress(t, 0, 0.6, easeInApple);

        heroShowcase.style.setProperty(
          '--showcase-ry',
          `${lerp(0, 35, exitT).toFixed(2)}deg`,
        );
        heroShowcase.style.setProperty(
          '--showcase-rx',
          `${lerp(0, -10, exitT).toFixed(2)}deg`,
        );
        heroShowcase.style.setProperty(
          '--showcase-tz',
          `${lerp(0, -800, exitT).toFixed(1)}px`,
        );
        heroShowcase.style.setProperty(
          '--showcase-tx',
          `${lerp(0, 20, exitT).toFixed(2)}%`,
        );
        heroShowcase.style.setProperty(
          '--showcase-scale',
          lerp(1, 0.5, exitT).toFixed(4),
        );
        // Fade out a bit later than the transform starts
        const opacityT = progress(t, 0.15, 0.55, easeInOutSmooth);
        heroShowcase.style.setProperty(
          '--showcase-opacity',
          lerp(1, 0, opacityT).toFixed(4),
        );
      }

      /* ── Text: slides out to the left + fades ────────────── */
      if (heroPill) {
        const p = progress(t, 0.05, 0.35, easeInOutSmooth);
        heroPill.style.setProperty('--hero-pill-x', `${lerp(0, -50, p).toFixed(1)}px`);
        heroPill.style.setProperty('--hero-pill-opacity', lerp(1, 0, p).toFixed(4));
      }
      if (heroTitle) {
        const p = progress(t, 0.1, 0.4, easeInOutSmooth);
        heroTitle.style.setProperty('--hero-title-x', `${lerp(0, -70, p).toFixed(1)}px`);
        heroTitle.style.setProperty('--hero-title-opacity', lerp(1, 0, p).toFixed(4));
      }
      if (heroSub) {
        const p = progress(t, 0.15, 0.45, easeInOutSmooth);
        heroSub.style.setProperty('--hero-sub-x', `${lerp(0, -70, p).toFixed(1)}px`);
        heroSub.style.setProperty('--hero-sub-opacity', lerp(1, 0, p).toFixed(4));
      }
      if (heroCtas) {
        const p = progress(t, 0.2, 0.5, easeInOutSmooth);
        heroCtas.style.setProperty('--hero-ctas-scale', lerp(1, 0.85, p).toFixed(4));
        heroCtas.style.setProperty('--hero-ctas-y', `${lerp(0, 20, p).toFixed(1)}px`);
        heroCtas.style.setProperty('--hero-ctas-opacity', lerp(1, 0, p).toFixed(4));
      }

      /* ── Handoff: disable Showcase hover tilt during exit ── */
      const hoverEnabled = t < 0.02;
      if (hoverEnabled !== hoverWasEnabled) {
        hoverWasEnabled = hoverEnabled;
        window.dispatchEvent(
          new CustomEvent('hero-animation-state', {
            detail: { complete: hoverEnabled },
          }),
        );
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateCinematic);
    };

    if (!mql.matches) {
      window.addEventListener('scroll', onScroll, { passive: true });
      updateCinematic();
      // Hero is visible on load — enable hover tilt immediately
      window.dispatchEvent(
        new CustomEvent('hero-animation-state', {
          detail: { complete: true },
        }),
      );
    }

    /* ── Section reveals (all screen sizes) ───────────────────── */
    const revealElements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((el) => observer.observe(el));

    /* ── Cleanup ──────────────────────────────────────────────── */
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return null;
}
