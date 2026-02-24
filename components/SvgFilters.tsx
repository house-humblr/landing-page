/**
 * Hidden SVG filter definitions used by the glow effect.
 *
 * SVG <feGaussianBlur> vs CSS blur():
 *   SVG blur extends beyond the element's bounding box — no edge clipping.
 *   CSS blur() clips at the element boundary, cutting off the glow at edges.
 *   SVG is preferred for this effect since the glow icon is heavily scaled
 *   and the blur needs to bleed freely in all directions.
 */
export function SvgFilters() {
  return (
    <svg
      style={{ display: 'none' }}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="glow-blur">
        <feGaussianBlur stdDeviation="28" />
      </filter>
    </svg>
  );
}
