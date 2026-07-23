"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type GalleryImageProps = {
  src: string;
  alt: string;
  /** Absolute position, size and z-index utilities. */
  className?: string;
  /** Tilt in degrees — driven by GSAP so it survives the parallax transform. */
  rotation?: number;
  /** Parallax movement in px — larger for smaller images, smaller for bigger ones. */
  speed?: number;
  /** Extra tilt in degrees added/removed as the page scrolls (very subtle). */
  tilt?: number;
};

export default function GalleryImage({
  src,
  alt,
  className,
  rotation = 0,
  speed = 60,
  tilt = 2,
}: GalleryImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { y: speed, rotation: rotation - tilt },
        {
          y: -speed,
          rotation: rotation + tilt,
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
    <div
      ref={ref}
      className={`absolute overflow-hidden rounded-[1.25rem] ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" />
    </div>
  );
}
