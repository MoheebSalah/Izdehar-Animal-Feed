"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLImageElement>(null);
  const barWrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  // Lock scroll and pin to the top while the intro plays, then release it
  // once the intro is done. Driven reactively so it works no matter when the
  // Lenis instance becomes available.
  useEffect(() => {
    if (!lenis) return;
    if (done) {
      lenis.start();
    } else {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, done]);

  useGSAP(() => {
    // On mobile the hero video is the bottom half, so the overlay is anchored
    // to the bottom (see className) and shrinks from the top down to it.
    // We use half of the *visible* viewport (window.innerHeight) rather than
    // 50vh, because on mobile browsers `vh` ignores the URL bar and would make
    // the overlay taller than the actual video. On desktop the video is the
    // top 70vh and the overlay stays pinned to the top, shrinking from below.
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;
    const targetHeight = isMobile ? window.innerHeight / 2 : "70vh";

    // Manual FLIP: send a centered loading piece to the exact on-screen rect of
    // its navbar counterpart. Measured at run time (via functions) so the tween
    // targets the real, laid-out navbar position. transformOrigin is the
    // top-left corner, so translating by (target − start) and scaling by the
    // width ratio maps the piece precisely onto its target.
    const flyTo = (el: HTMLImageElement | null, targetSel: string) => {
      const rects = () => ({
        target: document.querySelector(targetSel)?.getBoundingClientRect(),
        start: el?.getBoundingClientRect(),
      });
      return {
        x: () => {
          const { target, start } = rects();
          return target && start ? target.left - start.left : 0;
        },
        y: () => {
          const { target, start } = rects();
          return target && start ? target.top - start.top : 0;
        },
        scale: () => {
          const { target, start } = rects();
          return target && start ? target.width / start.width : 1;
        },
      };
    };

    gsap.set([iconRef.current, textRef.current], { transformOrigin: "0 0" });
    // Hide the real navbar logo for the whole intro — otherwise on mobile (where
    // the background reveals the top of the page as it shrinks) it would show
    // through before the flying logo has landed on it. It fades in at the
    // handoff below.
    gsap.set("#nav-logo", { autoAlpha: 0 });

    const tl = gsap.timeline({ onComplete: () => setDone(true) });

    tl
      // Background shows alone for a moment, then the logo + text fade in.
      .fromTo(
        [iconRef.current, textRef.current],
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6, ease: "power1.out", delay: 0.05 }
      )
      // Progress bar fills from the left edge to the right edge.
      .fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power1.inOut" },
        "-=0.1"
      )
      // The bar fades out, then the logo + text slide to their navbar spots
      // while the background shrinks — all at once.
      .to(
        barWrapRef.current,
        { autoAlpha: 0, duration: 0.3, ease: "power1.out" },
        "+=0.15"
      )
      .to(
        iconRef.current,
        { ...flyTo(iconRef.current, "#nav-logo-icon"), duration: 0.8, ease: "power3.inOut" },
        "<"
      )
      .to(
        textRef.current,
        { ...flyTo(textRef.current, "#nav-logo-text"), duration: 0.8, ease: "power3.inOut" },
        "<"
      )
      .to(
        overlayRef.current,
        { height: targetHeight, duration: 0.8, ease: "power3.inOut" },
        "<"
      )
      // Reveal: fade the dark background AND the white flying logo together,
      // exposing the real (dark) navbar logo that now sits exactly underneath —
      // so the color swap reads as one continuous logo landing in place.
      .to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(
        [iconRef.current, textRef.current],
        { autoAlpha: 0, duration: 0.35, ease: "power1.out" },
        "<"
      )
      // Bring the real navbar logo in exactly as the flying one fades — same
      // green, same spot, so the swap is invisible.
      .to(
        "#nav-logo",
        { autoAlpha: 1, duration: 0.35, ease: "power1.out" },
        "<"
      );
  });

  if (done) return null;

  return (
    <>
      {/* Dark background — shrinks to the hero video height, then fades. */}
      <div
        ref={overlayRef}
        dir="ltr"
        className="fixed left-0 top-0 z-[100] h-screen w-full bg-text max-md:bottom-0 max-md:top-auto"
      />

      {/* Stage — viewport-centered so the background's shrink never nudges it;
          the pieces travel purely via transforms. Sits above the background. */}
      <div
        dir="ltr"
        className="pointer-events-none fixed inset-0 z-[101] flex flex-col items-center justify-center"
      >
        {/* Logo icon over the wordmark (they split apart and fly side-by-side
            into the navbar). Shown in the logo's natural (green) color — it
            reads on the dark background and matches the navbar logo it lands on,
            so the handoff needs no colour change. */}
        <div className="flex flex-col items-center gap-[1.3rem]">
          <img
            ref={iconRef}
            src="/svgs/logo.svg"
            alt=""
            className="h-auto w-[4.5rem] opacity-0"
          />
          <img
            ref={textRef}
            src="/svgs/logoText.svg"
            alt="ازدهار للأعلاف"
            className="h-auto w-[11rem] opacity-0"
          />
        </div>

        {/* Progress bar — grows from the left edge to the right edge */}
        <div
          ref={barWrapRef}
          className="mt-[4rem] h-[0.15rem] w-full overflow-hidden"
        >
          <div
            ref={barRef}
            className="h-full w-full origin-left scale-x-0 bg-secondary"
          />
        </div>
      </div>
    </>
  );
}
