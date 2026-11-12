"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type FocusEvent,
} from "react";
import Link from "next/link";

import { categoryMeta, tools, type Tool } from "@/lib/tools";
import { getCategoryColor } from "@/lib/category-colors";
import { getToolIcon } from "@/components/tool-cards/toolIcon";

/**
 * Hero "Tool spotlight" card (Cool Design Concept, approved 2026-11-11).
 * Auto-rotates every 5 seconds through six real tools, each themed by its
 * category colour (card top edge, icon tile, chip, active dot). Pauses on
 * hover/focus and while the tab is hidden; under prefers-reduced-motion it
 * never auto-rotates (the dots still switch manually, without animation).
 * Rotation state is visual only — no live region, so screen readers are
 * not spammed every 5 seconds; the dots are real buttons with labels.
 * (THEME FIX: was 3s — the card visibly changed about every ~2s and
 * read as flicker/distraction.)
 */
const SPOTLIGHT_IDS = [
  "merge-pdf",
  "image-compressor",
  "ai-summarizer",
  "emi-calculator",
  "qr-code-generator",
  "compress-pdf",
] as const;

const spotlightTools: Tool[] = SPOTLIGHT_IDS.map((id) =>
  tools.find((tool) => tool.id === id),
).filter((tool): tool is Tool => Boolean(tool));

export function ToolSpotlight() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      query.removeEventListener("change", onChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Depending on `index` restarts the 5s timer after every change,
  // including dot clicks — matching the concept's restart-on-jump.
  useEffect(() => {
    if (paused || pageHidden || reducedMotion || spotlightTools.length < 2)
      return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % spotlightTools.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [index, paused, pageHidden, reducedMotion]);

  if (spotlightTools.length === 0) return null;

  const tool = spotlightTools[index];
  const next = spotlightTools[(index + 1) % spotlightTools.length];
  const Icon = getToolIcon(tool);
  const color = getCategoryColor(tool.category);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  };

  return (
    <div
      className="spotlight"
      style={{ "--c": color } as CSSProperties}
      aria-label="Tool spotlight"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
    >
      <div className="spot-head">
        <span className="spot-live">
          <span className="spot-pulse" aria-hidden="true" />
          Tool spotlight
        </span>
        <span className="spot-count" aria-hidden="true">
          {index + 1} / {spotlightTools.length}
        </span>
      </div>
      <div className="spot-swap" key={tool.id}>
        <span className="spot-icon">
          <Icon size={28} aria-hidden="true" />
        </span>
        <h3 className="spot-title">{tool.name}</h3>
        <p className="spot-desc">{tool.blurb}</p>
        <div className="spot-foot">
          <span className="spot-chip">
            <span className="spot-chip-dot" aria-hidden="true" />
            {categoryMeta[tool.category].name} tools
          </span>
          <Link href={`/tools/${tool.id}`} className="spot-open">
            Open →
          </Link>
        </div>
      </div>
      <div className="spot-dots">
        {spotlightTools.map((spotTool, spotIndex) => (
          <button
            key={spotTool.id}
            type="button"
            className={`spot-dot${spotIndex === index ? " on" : ""}`}
            aria-label={`Show ${spotTool.name}`}
            aria-current={spotIndex === index || undefined}
            onClick={() => setIndex(spotIndex)}
          />
        ))}
      </div>
      <p className="spot-next" aria-hidden="true">
        Up next: <b>{next.name}</b>
      </p>
    </div>
  );
}
