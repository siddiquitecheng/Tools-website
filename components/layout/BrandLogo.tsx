/**
 * ALETOOL brand lockup: a geometric "A" inside an ink square with a
 * vermilion crossbar, next to the lowercase "aletool." wordmark and the
 * "Free online tools" tagline. Inline SVG so header and footer share one
 * crisp, theme-aware mark with no image request. The mark sits in a
 * .brand-mark-wrap span so globals.css can give it a soft layered
 * shadow, a gentle 3D tilt on hover and a vermilion-paper shine sweep
 * (the wrap's overflow clips the sweep to the mark's rounded corners).
 */
export function BrandLogo() {
  return (
    <span className="brand-logo">
      <span className="brand-mark-wrap">
        <svg
          className="brand-mark"
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="48" height="48" rx="12" fill="var(--ink)" />
          <path
            d="M15 35 24 13 33 35"
            stroke="var(--bg)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7 27.4h10.6"
            stroke="var(--accent)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-text">
        <span className="brand-wordmark">
          aletool<span className="brand-dot">.</span>
        </span>
        <span className="brand-tagline">Free online tools</span>
      </span>
    </span>
  );
}
