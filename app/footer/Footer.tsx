"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Slide the footer content up into place as the page scrolls to its end.
  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        { y: () => -(maskRef.current?.offsetHeight ?? 0) },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="flex flex-1 flex-col bg-text text-white">
      {/* Mask: clips the content while it slides up into place */}
      <div ref={maskRef} className="flex-1 overflow-hidden">
        {/* Main content: logo (right) + lists & paragraph (left) */}
        <div
          ref={contentRef}
          className="flex h-full justify-between px-10 pt-[3rem]"
        >
          {/* Logo — takes the full height of the footer, with a small gap below */}
          <div className="relative mb-[2rem] w-[22rem] shrink-0">
            <Image
              src="/assets/logo.png"
              alt="ازدهار للأعلاف"
              fill
              sizes="22rem"
              className="object-contain"
            />
          </div>

          {/* Left part — width places the right edge (الشركة) under the CTA button's
              right edge (button is 16rem wide and centered → 50% + 8rem). */}
          <div className="flex w-[calc(50%_+_8rem)] flex-col justify-between pb-[3rem]">
            {/* 3 lists with equal spacing between them */}
            <div className="flex justify-between">
              {/* الشركة (right) */}
              <div className="flex flex-col gap-3 text-right">
                <h3 className="mb-2 font-neo text-[1.5rem] font-bold text-white">
                  الشركة
                </h3>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  من نحن
                </a>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  منتجاتنا
                </a>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  تواصل معنا
                </a>
              </div>

              {/* منتجاتنا */}
              <div className="flex flex-col gap-3 text-right">
                <h3 className="mb-2 font-neo text-[1.5rem] font-bold text-white">
                  منتجاتنا
                </h3>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  أعلاف مواشي
                </a>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  دجاج لاحم
                </a>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  دجاج بيّاض
                </a>
                <a href="#" className="font-neo text-[1.5rem] text-white/70">
                  المزيد
                </a>
              </div>

              {/* Contact info (left) — fixed-width icon column keeps all icons and
                  text starts aligned. */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-white">
                  <span className="flex w-[1.5rem] shrink-0 items-center justify-center">
                    <img src="/svgs/phone.svg" alt="" className="h-[1.5rem] w-auto" />
                  </span>
                  <span dir="ltr">+972 2 22233222</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-white">
                  <span className="flex w-[1.5rem] shrink-0 items-center justify-center">
                    <img
                      src="/svgs/location.svg"
                      alt=""
                      className="h-[1.5rem] w-auto"
                    />
                  </span>
                  <span>ترقوميا، الخليل، فلسطين</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-white">
                  <span className="flex w-[1.5rem] shrink-0 items-center justify-center">
                    <img
                      src="/svgs/mobile.svg"
                      alt=""
                      className="h-[1.5rem] w-auto"
                    />
                  </span>
                  <span dir="ltr">+972 562242003</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-white">
                  <span className="flex w-[1.5rem] shrink-0 items-center justify-center">
                    <img src="/svgs/mail.svg" alt="" className="h-[1.5rem] w-auto" />
                  </span>
                  <span dir="ltr">info@izdeharanimal.ps</span>
                </div>
              </div>
            </div>

            {/* Company description — below the lists, aligned with them */}
            <p className="font-neo text-[1rem] leading-[1.7] text-white">
              ازدهار فلسطين للأعلاف، مصنع فلسطيني في ترقوميا، الخليل، بنصنع أعلاف
              متوازنة لكل أنواع الثروة الحيوانية. هدفنا نخفّض كلفة الإنتاج على
              المزارع الفلسطيني ونحلّ العلف المحلي مكان المستورد.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright — excluded from the reveal animation */}
      <div className="bg-white py-5 text-center">
        <p className="font-neo text-[0.875rem] text-text">
          © 2026 جميع الحقوق محفوظة لشركة ازدهار فلسطين للأعلاف
        </p>
      </div>
    </footer>
  );
}
