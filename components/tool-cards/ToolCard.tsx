import type { CSSProperties } from "react";
import Link from "next/link";

import { categoryMeta, type Tool } from "@/lib/tools";
import { isImplementedTool } from "@/lib/tool-capabilities";
import { getToolAccent, getToolIcon } from "@/components/tool-cards/toolIcon";

interface ToolCardProps {
  tool: Tool;
  usageCount?: number;
}

export function ToolCard({ tool, usageCount }: ToolCardProps) {
  const accent = getToolAccent(tool);
  const Icon = getToolIcon(tool);
  const implemented = isImplementedTool(tool.id);

  return (
    <Link
      href={`/tools/${tool.id}`}
      className="tool-card group scroll-reveal"
      style={{ "--cat-accent": accent } as CSSProperties}
    >
      <div className="tool-card-top">
        <span
          className="tool-card-icon"
          style={{ backgroundColor: accent, color: "white" }}
        >
          <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
        </span>
        {!implemented && (
          <span className="rounded-full bg-[var(--surface-sunk)] px-2 py-1 text-xs text-[var(--ink-soft)]">
            Coming soon
          </span>
        )}
      </div>
      <h3>{tool.name}</h3>
      <p className="tool-card-description">{tool.blurb}</p>
      <div className="tool-card-foot">
        <span className="tool-card-cat">
          {categoryMeta[tool.category].name} tools
        </span>
        {implemented && <span className="tool-card-open">Open →</span>}
      </div>
      {typeof usageCount === "number" && usageCount > 0 && (
        <p className="mt-4 text-xs text-[var(--ink-faint)]">
          {usageCount.toLocaleString()} uses
        </p>
      )}
    </Link>
  );
}
