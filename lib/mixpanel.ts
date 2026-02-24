import mixpanel from "mixpanel-browser";

let initialized = false;

export function initMixpanel() {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (!token || initialized) return;
  mixpanel.init(token, {
    track_pageview: true,
    persistence: "localStorage",
    debug: process.env.NODE_ENV === "development",
  });
  initialized = true;
}

export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean>,
) {
  if (!initialized) return;
  mixpanel.track(name, properties);
}
