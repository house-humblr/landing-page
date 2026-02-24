"use client";

import { useEffect, useState, type ReactNode } from "react";

const CHROME_URL =
  "https://chromewebstore.google.com/detail/mpejgchaaggebeloaalflmihboncnalh?utm_source=item-share-cb";
const SAFARI_URL =
  "https://apps.apple.com/us/app/zcomments/id6759467564";

export function NavCtaLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [href, setHref] = useState(CHROME_URL);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isSafari =
      /Safari/.test(ua) && !/Chrome/.test(ua) && !/Chromium/.test(ua);
    if (isSafari) setHref(SAFARI_URL);
  }, []);

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      data-mp-event="nav_get_zcomments_clicked"
    >
      {children}
    </a>
  );
}
