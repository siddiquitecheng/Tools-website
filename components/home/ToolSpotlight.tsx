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
 * (THEME FIX 2: the swap now crossfades — the outgoing tool stays
 * mounted as a fading layer while the incoming one fades in, so the
 * card never reads empty mid-swap.)
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
  // Crossfade: the tool being replaced stays mounted as the fading-out
  // layer for 500ms; cleared by the timer below.
  const [leaving, setLeaving] = useState<Tool | null>(null);
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

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setLeaving(null), 500);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  // Depending on `index` restarts the 5s timer after every change,
  // including dot clicks — matching the concept's restart-on-jump.
  useEffect(() => {
    if (paused || pageHidden || reducedMotion || spotlightTools.length < 2)
      return;
    const timer = window.setInterval(() => {
      goTo((index + 1) % spotlightTools.length);
    }, 5000);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused, pageHidden, reducedMotion]);

  if (spotlightTools.length === 0) return null;

  const tool = spotlightTools[index];
  const next = spotlightTools[(index + 1) % spotlightTools.length];
  const color = getCategoryColor(tool.category);

  const goTo = (nextIndex: number) => {
    if (nextIndex === index) return;
    setLeaving(tool);
    setIndex(nextIndex);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
  };

  // The swap content for one tool. The leaving layer renders it
  // non-interactive (plain span instead of the link) and hidden from
  // assistive tech, so focus can never land on a tool that is fading
  // away. Each layer carries its own --c so the outgoing tool keeps
  // its own category colour while it fades out.
  const renderSwap = (spotTool: Tool, interactive: boolean) => {
    const SpotIcon = getToolIcon(spotTool);
    return (
      <>
        <span className="spot-icon">
          <SpotIcon size={28} aria-hidden="true" />
        </span>
        <h3 className="spot-title">{spotTool.name}</h3>
        <p className="spot-desc">{spotTool.blurb}</p>
        <div className="spot-foot">
          <span className="spot-chip">
            <span className="spot-chip-dot" aria-hidden="true" />
            {categoryMeta[spotTool.category].name} tools
          </span>
          {interactive ? (
            <Link href={`/tools/${spotTool.id}`} className="spot-open">
              Open →
            </Link>
          ) : (
            <span className="spot-open" aria-hidden="true">
              Open →
            </span>
          )}
        </div>
      </>
    );
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
      <div className="spot-swap-stack">
        {leaving ? (
          <div
            key={`${leaving.id}-out`}
            className="spot-swap spot-swap-leaving"
            aria-hidden="true"
            style={
              { "--c": getCategoryColor(leaving.category) } as CSSProperties
            }
          >
            {renderSwap(leaving, false)}
          </div>
        ) : null}
        <div
          key={tool.id}
          className="spot-swap"
          style={{ "--c": color } as CSSProperties}
        >
          {renderSwap(tool, true)}
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
            onClick={() => goTo(spotIndex)}
          />
        ))}
      </div>
      <p className="spot-next" aria-hidden="true">
        Up next: <b>{next.name}</b>
      </p>
    </div>
  );
}
