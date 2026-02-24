"use client";

import { useEffect, type ReactNode } from "react";
import { initMixpanel, trackEvent } from "@/lib/mixpanel";

export function MixpanelProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initMixpanel();

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-mp-event]",
      );
      if (!el) return;
      const event = el.dataset.mpEvent;
      if (event) trackEvent(event);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return <>{children}</>;
}
