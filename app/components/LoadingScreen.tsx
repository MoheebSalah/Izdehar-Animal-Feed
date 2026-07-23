"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
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
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl
      // Background shows alone for a moment, then the logo fades in.
      .fromTo(
        logoRef.current,
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
      // Logo + bar fade away while the background shrinks to the hero
      // video height — both at the same time.
      .to(
        groupRef.current,
        { autoAlpha: 0, duration: 0.4, ease: "power1.out" },
        "+=0.2"
      )
      .to(
        overlayRef.current,
        { height: "70vh", duration: 0.7, ease: "power3.inOut" },
        "<"
      )
      // Background fades away, revealing the hero.
      .to(
        overlayRef.current,
        { autoAlpha: 0, duration: 0.5, ease: "power1.out" },
        "-=0.1"
      );
  });

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      dir="ltr"
      className="fixed left-0 top-0 z-[100] flex h-screen w-full flex-col items-center justify-center bg-text"
    >
      <div ref={groupRef} className="flex w-full flex-col items-center">
        <Image
          ref={logoRef}
          src="/assets/logo.png"
          alt="ازدهار للأعلاف"
          width={347}
          height={485}
          priority
          className="h-auto w-[8rem] opacity-0"
        />

        {/* Progress bar — grows from the left edge to the right edge */}
        <div className="mt-[4rem] h-[0.15rem] w-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full w-full origin-left scale-x-0 bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}
