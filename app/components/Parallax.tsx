"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ParallaxProps = {
  children: ReactNode;
  /** Movement amount in px across the scroll pass — higher means a stronger effect. */
  speed?: number;
  /** Optional smaller movement used on mobile (< 768px). Falls back to `speed`. */
  mobileSpeed?: number;
  className?: string;
};

export default function Parallax({
  children,
  speed = 60,
  mobileSpeed,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const amount =
        mobileSpeed != null && window.matchMedia("(max-width: 767px)").matches
          ? mobileSpeed
          : speed;
      gsap.fromTo(
        ref.current,
        { y: amount },
        {
          y: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
