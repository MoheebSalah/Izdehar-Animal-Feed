"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type StickyTitleProps = {
  children: ReactNode;
  /** Absolute placement utilities for the title box. */
  className?: string;
  /** The effect only runs while this media query matches. */
  media: string;
};

/**
 * A title that scrolls up with the page until it reaches the middle of the
 * screen, then holds there while the rest of the section keeps rising behind
 * it, and finally carries on upwards once the section has passed.
 *
 * The hold is a real `position: fixed`, not a scroll-driven transform — the
 * browser keeps a fixed element still on its own, so nothing shimmers. Once the
 * hold is over the title returns to the flow, offset down by exactly the
 * distance it was held for, which is where the fixed copy left it. Both swaps
 * happen at the point where the two positions coincide, so neither one jumps.
 *
 * No scroll length is added: the section's own height is what the images travel
 * through while the title waits.
 */
export default function StickyTitle({
  children,
  className,
  media,
}: StickyTitleProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const box = boxRef.current;
      const title = titleRef.current;
      const section = box?.closest("section");
      if (!box || !title || !section) return;

      const mm = gsap.matchMedia();

      mm.add(media, () => {
        // How far the page scrolls while the title stays put.
        let heldFor = 0;

        function apply(self: ScrollTrigger) {
          if (self.isActive) {
            gsap.set(title, {
              position: "fixed",
              top: "50%",
              left: 0,
              right: 0,
              y: 0,
              yPercent: -50,
            });
            return;
          }
          gsap.set(title, { clearProps: "position,top,left,right" });
          gsap.set(title, {
            yPercent: 0,
            y: self.progress >= 1 ? heldFor : 0,
          });
        }

        // Starts the moment the title's centre meets the viewport centre, ends
        // once the section's bottom has risen far enough that its last image
        // sits above the title.
        const held = ScrollTrigger.create({
          trigger: box,
          start: "center center",
          endTrigger: section,
          end: () => `bottom center+=${box!.offsetHeight / 2}`,
          onRefresh: (self) => {
            heldFor = self.end - self.start;
            apply(self);
          },
          onToggle: apply,
        });

        return () => {
          held.kill();
          gsap.set(title, { clearProps: "position,top,left,right,transform" });
        };
      });

      return () => mm.revert();
    },
    { scope: boxRef }
  );

  return (
    <div ref={boxRef} className={className}>
      <div ref={titleRef}>{children}</div>
    </div>
  );
}
