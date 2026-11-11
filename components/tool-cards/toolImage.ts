import { type Tool } from "@/lib/tools";
import { TOOL_IMAGE_SLUGS } from "@/lib/tool-images";

/**
 * Returns the public path of a tool's SVG illustration, or `null` when
 * the tool has none yet. Callers must treat `null` as "render the
 * existing icon chip/tile exactly as before" — the fallback is part of
 * the design, so images can ship tool-by-tool without ever breaking a
 * card or a page header.
 */
export function getToolImage(tool: Tool): string | null {
  if (!TOOL_IMAGE_SLUGS.has(tool.id)) {
    return null;
  }
  return `/images/tools/${tool.id}.svg`;
}

export function hasToolImage(tool: Tool): boolean {
  return TOOL_IMAGE_SLUGS.has(tool.id);
}
