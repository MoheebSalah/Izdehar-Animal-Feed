"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis, LenisRef } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // Always start at the top on refresh. `scrollRestoration` is already set to
    // "manual" before hydration (see layout.tsx), but we still reset explicitly
    // in case the browser restored a position first: the native scroll AND
    // Lenis's own target, otherwise Lenis would smooth-scroll back to it.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const lenis = lenisRef.current?.lenis;
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true, force: true });

    // Drive Lenis from GSAP's ticker so smooth scroll and ScrollTrigger stay in sync.
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Refresh parallax against the smoothed scroll position.
    lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
