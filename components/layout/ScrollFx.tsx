"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll effects, mounted once from the root layout.
 *
 * - Parallax: elements carrying [data-parallax="<speed>"] drift gently
 *   via translate3d on scroll (rAF-throttled, passive listener). The
 *   attribute holds a small factor (0.02–0.08); the transform is written
 *   inline, so only put it on plain elements whose CSS does not already
 *   rely on a transform (the footer wordmark is the first user).
 * - Reveals: an IntersectionObserver adds `.in` to `.reveal` elements
 *   once, when they enter the viewport. The hidden starting state in
 *   globals.css is scoped to `html.js-fx:not(.motion-ready)`, and this
 *   component only adds `js-fx` after mount — so content is never
 *   hidden without JS, and on the homepage HomeMotion keeps ownership
 *   of `.reveal` through its own `.motion-ready` system.
 *
 * Everything is skipped for reduced-motion visitors (no `js-fx`, no
 * listeners). A MutationObserver also wires up `.reveal` /
 * [data-parallax] nodes inserted by client-side navigations after the
 * first mount, so routed-to pages get the same treatment.
 */
export function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("js-fx");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const parallaxLayers = new Set<HTMLElement>();
    const watchElement = (element: Element) => {
      if (element.matches(".reveal:not(.in)")) {
        revealObserver.observe(element);
      }
      if (element instanceof HTMLElement && element.hasAttribute("data-parallax")) {
        parallaxLayers.add(element);
      }
    };
    const watchTree = (scope: ParentNode) => {
      scope.querySelectorAll(".reveal:not(.in)").forEach(watchElement);
      scope
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach(watchElement);
    };
    watchTree(document);

    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      const mid = window.innerHeight / 2;
      parallaxLayers.forEach((element) => {
        const speed = Number.parseFloat(element.dataset.parallax ?? "");
        if (!speed) return;
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -240 || rect.top > window.innerHeight + 240) return;
        const delta = (rect.top + rect.height / 2 - mid) * speed;
        element.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateParallax();

    const domObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            watchElement(node);
            watchTree(node);
          }
        });
      }
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      domObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("js-fx");
    };
  }, []);

  return null;
}
