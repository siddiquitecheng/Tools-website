"use client";

import { useEffect, useRef } from "react";

/**
 * Homepage motion layer, kept deliberately small:
 * - a top scroll-progress bar (rendered by this component),
 * - blur-fade reveals for elements carrying the `.reveal` class,
 * - cursor spotlight on `.tool-card` / `.category-card` (delegated, so it
 *   keeps working when the tool explorer re-renders its grid),
 * - magnetic pull on elements carrying `data-magnetic`.
 *
 * Everything is skipped when the visitor prefers reduced motion; in that
 * case the `motion-ready` class is never added, so `.reveal` content is
 * simply visible and the progress bar stays at zero.
 */
export function HomeMotion() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const root = document.documentElement;
    root.classList.add("motion-ready");

    // Scroll progress
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress})`;
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Blur-fade reveals
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));

    // Cursor spotlight (delegated pointer tracking)
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest?.(
        ".tool-card, .category-card",
      ) as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    if (finePointer) {
      document.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
    }

    // Magnetic primary buttons
    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    );
    const cleanups = magnets.map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.16}px, ${y * 0.3}px)`;
      };
      const leave = () => {
        element.style.transform = "";
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      };
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (finePointer) {
        document.removeEventListener("pointermove", onPointerMove);
      }
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
