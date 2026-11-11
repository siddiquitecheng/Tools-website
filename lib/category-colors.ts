import type { Category } from "./tools";

/**
 * Vibrant category colour system — the single source of truth for the
 * per-category palette approved in the "AleTool Vibrant Design Concept"
 * (2026-11-11). The brand core stays paper / ink / vermilion; every
 * category adds one accent hue that is carried through tool-card top
 * borders, chips and hover glows, the homepage category grid, the
 * explorer filter tabs, and the tool-page tint (header eyebrow, framed
 * illustration card, workspace stage edge).
 *
 * This supersedes `categoryMeta[category].accent` in lib/tools.ts for
 * those surfaces. The older muted values in categoryMeta are left
 * untouched (lib/tools.ts is a shared data file other surfaces still
 * read); new presentation code should take colours from here.
 */
export const CATEGORY_COLORS: Record<Category, string> = {
  pdf: "#cf3618", // vermilion — the brand accent itself
  image: "#7c3aed", // violet
  ai: "#0d9488", // teal
  text: "#e11d48", // rose
  developer: "#4f46e5", // indigo
  seo: "#0284c7", // sky
  security: "#64748b", // slate
  converters: "#16a34a", // green
  calculators: "#d97706", // amber
  utilities: "#ea580c", // orange
};

export function getCategoryColor(category: Category): string {
  return CATEGORY_COLORS[category];
}
