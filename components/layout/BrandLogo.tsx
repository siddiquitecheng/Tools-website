/**
 * ALETOOL brand lockup: a geometric "A" inside an ink square with a
 * vermilion crossbar, next to the lowercase "aletool." wordmark and the
 * "Free online tools" tagline. Inline SVG so header and footer share one
 * crisp, theme-aware mark with no image request.
 */
export function BrandLogo() {
  return (
    <span className="brand-logo">
      <svg
        className="brand-mark"
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="48" height="48" rx="11" fill="var(--ink)" />
        <path
          d="M14.5 34.5 24 13.5 33.5 34.5"
          stroke="var(--bg)"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4 27.2h11.2"
          stroke="var(--accent)"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-text">
        <span className="brand-wordmark">
          aletool<span className="brand-dot">.</span>
        </span>
        <span className="brand-tagline">Free online tools</span>
      </span>
    </span>
  );
}
