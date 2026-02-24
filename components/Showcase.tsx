"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/mixpanel";
import styles from "./Showcase.module.css";

/**
 * Interactive 3D showcase — each element tilts independently
 * based on mouse position relative to its own center.
 *
 * The hover tilt is gated behind the scroll-lock cinematic animation.
 * ScrollAnimations.tsx dispatches a `hero-animation-state` CustomEvent
 * when the entry animation completes (scrollProgress >= 0.98).
 * Until that fires, pointer events are ignored so the scroll-driven
 * transforms on the parent (.heroShowcase) aren't fought by hover transforms.
 */

const MAX_ROTATE_MAIN = 6;
const MAX_ROTATE_OVERLAY = 10;
const TRANSLATE_Z_OVERLAY = 40;

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const frame = frameRef.current;
    const overlay = overlayRef.current;
    if (!container || !frame || !overlay) return;

    const mql = window.matchMedia("(max-width: 768px)");
    if (mql.matches) return;

    let raf: number | null = null;
    let currentEvent: PointerEvent | null = null;
    let hoverEnabled = true; // hero is visible on load
    let hoverTracked = false;

    const update = () => {
      raf = null;
      if (!currentEvent || !hoverEnabled) return;
      const { clientX, clientY } = currentEvent;

      const fRect = frame.getBoundingClientRect();
      const fx = (clientX - (fRect.left + fRect.width / 2)) / (fRect.width / 2);
      const fy =
        (clientY - (fRect.top + fRect.height / 2)) / (fRect.height / 2);
      frame.style.setProperty("--ry", (fx * MAX_ROTATE_MAIN).toFixed(2));
      frame.style.setProperty("--rx", (-fy * MAX_ROTATE_MAIN).toFixed(2));

      const oRect = overlay.getBoundingClientRect();
      const ox = (clientX - (oRect.left + oRect.width / 2)) / (oRect.width / 2);
      const oy =
        (clientY - (oRect.top + oRect.height / 2)) / (oRect.height / 2);
      overlay.style.setProperty("--ry", (ox * MAX_ROTATE_OVERLAY).toFixed(2));
      overlay.style.setProperty("--rx", (-oy * MAX_ROTATE_OVERLAY).toFixed(2));
      overlay.style.setProperty("--tz", `${TRANSLATE_Z_OVERLAY}px`);
    };

    const onMove = (e: PointerEvent) => {
      currentEvent = e;
      if (!hoverTracked) {
        hoverTracked = true;
        trackEvent("showcase_3d_hover");
      }
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onLeave = () => {
      currentEvent = null;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      if (!hoverEnabled) return;
      frame.style.setProperty("--rx", "0");
      frame.style.setProperty("--ry", "0");
      overlay.style.setProperty("--rx", "0");
      overlay.style.setProperty("--ry", "0");
      overlay.style.setProperty("--tz", "0px");
    };

    const onAnimationState = (e: Event) => {
      const { complete } = (e as CustomEvent).detail;
      hoverEnabled = complete;
      if (!complete) {
        frame.style.setProperty("--rx", "0");
        frame.style.setProperty("--ry", "0");
        overlay.style.setProperty("--rx", "0");
        overlay.style.setProperty("--ry", "0");
        overlay.style.setProperty("--tz", "0px");
      }
    };

    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);
    window.addEventListener("hero-animation-state", onAnimationState);

    return () => {
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("hero-animation-state", onAnimationState);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.showcase} aria-label="Product preview">
      <div ref={containerRef} className={styles.container}>
        {/* Browser window frame — tilts independently */}
        <div ref={frameRef} className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
            <span className={styles.url}>
              zillow.com/homedetails/372-Matchaponix-Rd
            </span>
          </div>
          <div className={styles.browserContent}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.mainImg}
              src="/zillow-listing.png"
              alt="Zillow listing page with Zcomments comment section injected below the property details"
              width={880}
              height={600}
            />
          </div>
        </div>

        {/* Floating comment section — tilts independently, more dramatically */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={overlayRef}
          className={styles.overlay}
          src="/comment-section.png"
          alt="Close-up of the Zcomments comment section showing user discussions about a property"
          width={420}
          height={380}
        />
      </div>
    </section>
  );
}
