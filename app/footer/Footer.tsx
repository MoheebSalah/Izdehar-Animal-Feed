"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Slide the whole footer (copyright included) up out from behind the CTA as
  // the page scrolls to its end, so it looks like the footer emerges from the
  // CTA section. The CTA sits on top (higher z-index, opaque) and hides the part
  // that hasn't come out yet; the shared wrapper (see page.tsx) clips the rest.
  // Runs on both desktop and mobile.
  useGSAP(
    () => {
      gsap.fromTo(
        contentRef.current,
        { y: () => -(contentRef.current?.offsetHeight ?? 0) },
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
    <footer ref={footerRef} className="relative z-10 bg-text md:flex-1">
      {/* The whole footer moves as one block so it slides out from behind the
          CTA; copyright is part of it. */}
      <div ref={contentRef} className="flex h-full flex-col bg-text text-white">
        {/* Main content: logo (right) + lists & paragraph (left) on desktop;
            on mobile the lists stack on top and the logo sits at the end. */}
        <div className="flex flex-col gap-10 px-6 pt-10 md:flex-1 md:flex-row md:justify-between md:gap-0 md:px-10 md:pt-[3rem]">
          {/* Logo — full height on desktop; at the end, centered, on mobile */}
          <div className="relative order-2 w-[16rem] shrink-0 max-md:mx-auto max-md:mb-6 max-md:h-[9rem] md:order-1 md:mb-[2rem] md:w-[22rem]">
            <Image
              src="/assets/logo.webp"
              alt="ازدهار للأعلاف"
              fill
              sizes="22rem"
              className="object-contain"
            />
          </div>

          {/* Left part — full width on mobile; on desktop its width places the
              right edge (الشركة) under the CTA button's right edge. */}
          <div className="order-1 flex w-full flex-col justify-between gap-8 md:order-2 md:w-[calc(50%_+_8rem)] md:gap-0 md:pb-[3rem]">
            {/* Lists — two columns of links on mobile with the contact info
                spanning below; a single row on desktop. */}
            <div className="grid grid-cols-2 gap-6 md:flex md:justify-between">
              {/* الشركة (right) */}
              <div className="flex flex-col gap-3 text-right">
                <h3 className="mb-2 font-neo text-[1.1rem] font-bold text-white md:text-[1.5rem]">
                  الشركة
                </h3>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  من نحن
                </a>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  منتجاتنا
                </a>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  تواصل معنا
                </a>
              </div>

              {/* منتجاتنا */}
              <div className="flex flex-col gap-3 text-right">
                <h3 className="mb-2 font-neo text-[1.1rem] font-bold text-white md:text-[1.5rem]">
                  منتجاتنا
                </h3>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  أعلاف مواشي
                </a>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  دجاج لاحم
                </a>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  دجاج بيّاض
                </a>
                <a href="#" className="font-neo text-[1.1rem] text-white/70 md:text-[1.5rem]">
                  المزيد
                </a>
              </div>

              {/* Contact info (left) — fixed-width icon column keeps all icons and
                  text starts aligned. Spans both grid columns on mobile. */}
              <div className="col-span-2 flex flex-col items-start gap-4 md:col-auto">
                <div className="flex items-center gap-2 font-neo text-[1.1rem] text-white md:text-[1.5rem]">
                  <span className="flex w-[1.1rem] shrink-0 items-center justify-center md:w-[1.5rem]">
                    <img src="/svgs/phone.svg" alt="" className="h-[1.1rem] w-auto md:h-[1.5rem]" />
                  </span>
                  <span dir="ltr">+972 2 22233222</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.1rem] text-white md:text-[1.5rem]">
                  <span className="flex w-[1.1rem] shrink-0 items-center justify-center md:w-[1.5rem]">
                    <img
                      src="/svgs/location.svg"
                      alt=""
                      className="h-[1.1rem] w-auto md:h-[1.5rem]"
                    />
                  </span>
                  <span>ترقوميا، الخليل، فلسطين</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.1rem] text-white md:text-[1.5rem]">
                  <span className="flex w-[1.1rem] shrink-0 items-center justify-center md:w-[1.5rem]">
                    <img
                      src="/svgs/mobile.svg"
                      alt=""
                      className="h-[1.1rem] w-auto md:h-[1.5rem]"
                    />
                  </span>
                  <span dir="ltr">+972 562242003</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.1rem] text-white md:text-[1.5rem]">
                  <span className="flex w-[1.1rem] shrink-0 items-center justify-center md:w-[1.5rem]">
                    <img src="/svgs/mail.svg" alt="" className="h-[1.1rem] w-auto md:h-[1.5rem]" />
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

        {/* Copyright — part of the moving block so it reveals with the footer */}
        <div className="bg-white py-5 text-center">
          <p className="font-neo text-[0.875rem] text-text">
            © 2026 جميع الحقوق محفوظة لشركة ازدهار فلسطين للأعلاف
          </p>
        </div>
      </div>
    </footer>
  );
}
