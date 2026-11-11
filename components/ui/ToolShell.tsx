import React from "react";
import Link from "next/link";
import { Tool, getRelatedTools } from "@/lib/tools";
import { getToolAccent, getToolIcon } from "@/components/tool-cards/toolIcon";
import { getToolImage } from "@/components/tool-cards/toolImage";
import { Breadcrumbs } from "./Breadcrumbs";
import { ToolUsageBadge } from "@/components/tools/ToolUsageBadge";
import { Card } from "./Card";
import { ToolCard } from "@/components/tool-cards/ToolCard";
import { ShieldCheck, Cpu, Zap, Lock } from "lucide-react";

export interface ToolStep {
  title: string;
  description: string;
}

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolShellProps {
  tool: Tool;
  children: React.ReactNode;
  aboutText?: string;
  steps?: ToolStep[];
  faqs?: ToolFAQ[];
  usageCount?: number;
  relatedTools?: Array<Tool & { usageCount?: number }>;
}

export const ToolShell: React.FC<ToolShellProps> = ({
  tool,
  children,
  aboutText,
  steps,
  faqs,
  usageCount = 0,
  relatedTools,
}) => {
  const related = relatedTools ?? getRelatedTools(tool);
  const Icon = getToolIcon(tool);
  const accent = getToolAccent(tool);
  const toolImage = getToolImage(tool);

  const trustNotice = [
    "word-to-pdf",
    "excel-to-pdf",
    "powerpoint-to-pdf",
  ].includes(tool.id)
    ? "Browser conversion stays on this device. Choosing the server option uploads your document."
    : tool.runtime === "client"
      ? "Your input stays on this device for this operation."
      : "Your input is sent to complete this request. Avoid submitting sensitive information.";

  const defaultSteps: ToolStep[] = steps || [
    {
      title: "Select or input data",
      description:
        "Upload your files or paste your text into the workspace above.",
    },
    {
      title: "Adjust settings (optional)",
      description: "Choose your options or preview parameters in real time.",
    },
    {
      title: "Get instant result",
      description:
        "Download the generated output file or copy the result to your clipboard.",
    },
  ];

  const defaultFaqs: ToolFAQ[] = faqs || [
    {
      question: `Is ${tool.name} free to use?`,
      answer: `${tool.name} is currently free to use. File, request and availability limits may apply.`,
    },
    {
      question: "Are my files or inputs stored on your server?",
      answer: trustNotice,
    },
    {
      question: "Does this work on mobile devices?",
      answer:
        "Yes, every tool in our workshop is optimized for smartphones, tablets, and desktop computers.",
    },
  ];

  return (
    <div
      className="tool-page mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
      style={{ "--tool-accent": accent } as React.CSSProperties}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: tool.category, href: `/category/${tool.category}` },
          { label: tool.name },
        ]}
      />

      {/* Tool Header V3 — compact two-column band: identity + trust on
          the left (44px icon tile, category eyebrow + Free pill, H1,
          blurb, one row of trust pills and the guide link), the tool
          illustration as a framed card on the right (desktop ≥1024px,
          hidden on mobile). The "N uses" chip is gone — see MANIFEST.
          The workspace follows directly beneath, so the uploader stays
          in the first screen. */}
      <header
        className={`tool-page-heading tool-head-v3 mx-auto mt-4 max-w-5xl${
          toolImage ? " tool-head-v3--split" : ""
        }`}
      >
        <div className="tool-head-main">
          <div className="tool-head-toprow">
            <span
              className="tool-page-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg shadow-sm"
              style={{ backgroundColor: accent, color: "white" }}
            >
              <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.7} />
            </span>
            <div className="tool-head-eyebrow">
              <span className="tool-head-category">{tool.category}</span>
              <span className="tool-head-free">Free</span>
            </div>
          </div>

          <h1 className="tool-title mt-4 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-[42px]">
            {tool.name}
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {tool.blurb}
          </p>

          <div className="tool-head-pills mt-5">
            <span className="tool-pill">
              <Zap className="tool-pill-icon" aria-hidden="true" />
              Free — no signup
            </span>
            <span className="tool-pill">
              <ShieldCheck
                className="tool-pill-icon tool-pill-icon--ok"
                aria-hidden="true"
              />
              {trustNotice}
            </span>
            <Link href={`/blog/${tool.id}`} className="tool-head-guide">
              Learn how to use {tool.name} →
            </Link>
          </div>

          {/* Usage recording kept alive headlessly: the visible "N uses"
              chip was removed in V3, but ToolUsageBadge's hook is what
              records the use (POST /api/tools/<id>/use) — mounting it
              hidden keeps the site's usage data flowing. */}
          <span className="hidden" aria-hidden="true">
            <ToolUsageBadge
              key={tool.id}
              toolId={tool.id}
              initialCount={usageCount}
            />
          </span>
        </div>

        {toolImage && (
          <figure className="tool-page-media tool-head-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={toolImage} alt={`${tool.name} illustration`} />
          </figure>
        )}
      </header>

      {/* Main Workspace Surface */}
      <section
        aria-label={`${tool.name} workspace`}
        className="tool-workspace tool-stage mx-auto mt-5 max-w-5xl rounded-2xl border border-[var(--line)] bg-white p-4 shadow-[0_8px_40px_-20px_rgba(15,32,64,0.18)] sm:p-6 lg:p-8"
      >
        {children}
      </section>

      {/* Below-stage layout: on desktop (≥1024px) the Overview /
          Workflow / FAQ sections run in a main column and the Related
          tools sit in a sticky right rail — the concept's two-column
          arrangement under the stage. On mobile everything stacks in
          the original order. Layout only: every section, heading,
          number and line of copy below is unchanged. */}
      <div
        className={`tool-below${related.length > 0 ? " tool-below--rail" : ""}`}
      >
        <div className="tool-below-main">
      {/* Info & FAQ Grid */}
      <section className="tool-info-grid mt-14 grid gap-8 lg:grid-cols-2">
        {/* About & Trust Bullets */}
        <Card variant="surface" className="tool-info-card scroll-reveal p-6">
          <p className="section-eyebrow">
            <span className="section-index">01</span> Overview
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--ink)]">
            About {tool.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            {aboutText ||
              `${tool.name} is a fast, privacy-focused utility designed to handle your workflow cleanly with zero account creation or registration.`}
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 text-xs text-[var(--ink-soft)]">
              <Zap className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
              <span>
                Adjust the options and review your result before downloading.
              </span>
            </div>
            <div className="flex items-start gap-3 text-xs text-[var(--ink-soft)]">
              <Lock className="w-4 h-4 text-[var(--success)] shrink-0 mt-0.5" />
              <span>
                See our privacy policy for input handling and usage information.
              </span>
            </div>
            <div className="flex items-start gap-3 text-xs text-[var(--ink-soft)]">
              <Cpu className="w-4 h-4 text-[var(--focus)] shrink-0 mt-0.5" />
              <span>
                Use a modern browser. Availability and performance depend on
                your device and the selected tool.
              </span>
            </div>
          </div>
        </Card>

        {/* How to use */}
        <Card variant="surface" className="tool-info-card scroll-reveal p-6">
          <p className="section-eyebrow">
            <span className="section-index">02</span> Workflow
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--ink)]">
            How to use {tool.name}
          </h2>
          <ol className="tool-steps mt-4 space-y-4">
            {defaultSteps.map((step, idx) => (
              <li key={idx} className="tool-step flex gap-3">
                <span className="tool-step-num flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] font-mono text-xs font-bold text-[var(--accent)]">
                  {idx + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--ink)]">
                    {step.title}
                  </span>
                  <span className="text-xs text-[var(--ink-soft)] mt-0.5">
                    {step.description}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <p className="section-eyebrow scroll-reveal">
          <span className="section-index">03</span> Good to know
        </p>
        <h2 className="scroll-reveal font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--ink)]">
          Frequently Asked Questions
        </h2>
        <div className="tool-faq-grid mt-4 grid gap-4 md:grid-cols-3">
          {defaultFaqs.map((faq, idx) => (
            <Card key={idx} variant="sunk" className="tool-faq-card scroll-reveal p-5">
              <h3 className="text-sm font-bold text-[var(--ink)]">
                {faq.question}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </section>
        </div>

      {/* Related Tools — sticky right rail on desktop */}
      {related.length > 0 && (
        <aside className="tool-below-rail">
        <section className="mt-14">
          <p className="section-eyebrow">
            <span className="section-index">04</span> Keep going
          </p>
          <div className="tool-related-head scroll-reveal flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--ink)]">
              Related {tool.category} tools
            </h2>
            <Link
              href={`/category/${tool.category}`}
              className="text-xs font-medium text-[var(--accent)] hover:underline"
            >
              View all {tool.category} tools →
            </Link>
          </div>

          <div className="tool-related-grid mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((relTool) => (
              <ToolCard
                key={relTool.id}
                tool={relTool}
                usageCount={
                  "usageCount" in relTool &&
                  typeof relTool.usageCount === "number"
                    ? relTool.usageCount
                    : undefined
                }
              />
            ))}
          </div>
        </section>
        </aside>
      )}
      </div>
    </div>
  );
};
