/**
 * Slugs of tools that have a per-tool SVG illustration at
 * `public/images/tools/<slug>.svg` (Phase 1 — top 24 tools).
 *
 * This manifest is maintained alongside the artwork itself: add a slug
 * here only when its SVG file actually ships, and the card/header fall
 * back to the icon chip/tile for every tool not listed. Never guess
 * from the filesystem at runtime.
 */
export const TOOL_IMAGE_SLUGS: ReadonlySet<string> = new Set([
  // PDF
  "merge-pdf",
  "compress-pdf",
  "split-pdf",
  "pdf-to-word",
  "word-to-pdf",
  "jpg-to-pdf",
  "pdf-to-jpg",
  "edit-pdf",
  "ocr-pdf",
  // Image
  "image-compressor",
  "image-resizer",
  "heic-to-jpg",
  "background-remover",
  // AI & text
  "ai-detector",
  "grammar-checker",
  "word-counter",
  // Developer
  "json-formatter",
  // Security
  "password-generator",
  // Converters
  "currency-converter",
  // Calculators
  "emi-calculator",
  "loan-calculator",
  "mortgage-calculator",
  "bmi-calculator",
  // Utilities
  "qr-code-generator",
]);
