"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, LayoutGrid } from "lucide-react";
import { categories, categoryMeta } from "@/lib/tools";
import { getCategoryIcon } from "@/components/tool-cards/categoryIcon";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        menuRef.current.open = false;
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  // Scrolled state with hysteresis (on at 24px, off below 8px) behind
  // an rAF throttle. The old single threshold (scrollY > 12) flip-flopped:
  // .is-scrolled used to shrink the sticky header's height, which shifted
  // the page under the scroll position and pushed scrollY back across the
  // threshold — toggling the class on and off, seen as a blink/jitter.
  // The class now only drives paint-level changes (shadow, logo scale).
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled((previous) => {
        const y = window.scrollY;
        if (!previous && y > 24) return true;
        if (previous && y < 8) return false;
        return previous;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="ALETOOL home">
          <BrandLogo />
        </Link>
        <details
          ref={menuRef}
          className="nav-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape" && menuRef.current) {
              menuRef.current.open = false;
              menuRef.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            <LayoutGrid size={17} />
            <span>Tools</span>
            <ChevronDown size={14} className="menu-chevron" />
          </summary>
          <div
            className="mega-menu"
            onClick={(event) => {
              if ((event.target as Element).closest("a") && menuRef.current)
                menuRef.current.open = false;
            }}
          >
            <div className="mega-heading">
              <span>A tool for every task</span>
              <Link href="/tools">
                View all tools <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mega-grid">
              {categories.map((category) => {
                const Icon = getCategoryIcon(category);
                const meta = categoryMeta[category];
                return (
                  <Link key={category} href={`/category/${category}`}>
                    <span
                      className="mega-icon"
                      style={{
                        color: meta.accent,
                        background: `${meta.accent}12`,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <span>
                      <strong>{meta.name}</strong>
                      <small>{meta.description}</small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </details>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/tools/compress-pdf">Compress</Link>
          <Link href="/tools/merge-pdf">Merge</Link>
          <Link href="/tools/edit-pdf">Edit</Link>
          <Link href="/category/image">Image</Link>
          <Link href="/category/ai">AI tools</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/blog" className="header-guide">
            How-to guides
          </Link>
          <Link
            href="/tools"
            className="site-button site-button-primary header-cta"
            data-magnetic
          >
            All tools <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
