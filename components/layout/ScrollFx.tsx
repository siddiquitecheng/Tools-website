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
 * - Scroll reveals: `.scroll-reveal` is this component's own system,
 *   independent of HomeMotion — tool cards, category tiles, FAQ items
 *   and info cards carry it across the whole site. Elements are
 *   staggered by their index among `.scroll-reveal` siblings (60ms per
 *   step, capped at 8) via an inline transition-delay, and once the
 *   reveal has played the classes and the delay are removed again, so
 *   the reveal styles can never interfere with the elements' own hover
 *   transitions or transforms afterwards.
 *
 * Everything is skipped for reduced-motion visitors (no `js-fx`, no
 * listeners). A MutationObserver also wires up `.reveal` /
 * `.scroll-reveal` / [data-parallax] nodes inserted by client-side
 * navigations after the first mount, so routed-to pages get the same
 * treatment.
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
      // THEME FIX: was "0px 0px -40px 0px" — reveals only started once
      // the element was already in view, so with the 650ms fade it
      // arrived late and blurry. +80px starts the reveal just before
      // the element scrolls in, so it is sharp on arrival.
      { threshold: 0.12, rootMargin: "0px 0px 80px 0px" },
    );

    const scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          scrollRevealObserver.unobserve(element);
          element.classList.add("in");
          const delay = Number.parseFloat(element.style.transitionDelay) || 0;
          // Once the fade has played, hand the element fully back to its
          // own styles: drop the reveal classes and the stagger delay so
          // hover transforms/transitions behave exactly as designed.
          window.setTimeout(() => {
            element.classList.remove("scroll-reveal", "in");
            element.style.transitionDelay = "";
          }, delay + 450);
        }
      },
      // THEME FIX: +80px — see the reveal observer above.
      { threshold: 0.12, rootMargin: "0px 0px 80px 0px" },
    );

    const staggerDelay = (element: Element) => {
      const parent = element.parentElement;
      if (!parent) return;
      const siblings = Array.from(parent.children).filter((node) =>
        node.classList.contains("scroll-reveal"),
      );
      const index = siblings.indexOf(element);
      const step = Math.min(Math.max(index, 0), 8);
      (element as HTMLElement).style.transitionDelay = `${step * 60}ms`;
    };

    const parallaxLayers = new Set<HTMLElement>();
    const watchElement = (element: Element) => {
      if (element.matches(".reveal:not(.in)")) {
        revealObserver.observe(element);
      }
      if (element.matches(".scroll-reveal:not(.in)")) {
        staggerDelay(element);
        scrollRevealObserver.observe(element);
      }
      if (element instanceof HTMLElement && element.hasAttribute("data-parallax")) {
        parallaxLayers.add(element);
      }
    };
    const watchTree = (scope: ParentNode) => {
      scope
        .querySelectorAll(".reveal:not(.in), .scroll-reveal:not(.in)")
        .forEach(watchElement);
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
      scrollRevealObserver.disconnect();
      domObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("js-fx");
    };
  }, []);

  return null;
}
