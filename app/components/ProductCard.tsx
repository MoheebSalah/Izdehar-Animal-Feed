"use client";

import Image from "next/image";
import { useState } from "react";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  varieties: { code: string; name: string }[];
};

export default function ProductCard({
  image,
  title,
  description,
  varieties,
}: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      dir="rtl"
      className={`group relative h-[44rem] shrink-0 overflow-hidden rounded-4xl bg-white transition-all duration-500 ${
        expanded ? "w-[70rem]" : "w-[28rem]"
      }`}
    >
      {/* Background — fades in on hover, stays visible while expanded */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          expanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <Image
          src="/assets/Products/Background.webp"
          alt=""
          fill
          sizes="70rem"
          className="object-cover"
        />
      </div>

      {/* ---------- Collapsed + hover layer — pinned to the left edge so it never
          shifts; fades out as the card expands ---------- */}
      <div
        className={`absolute inset-y-0 left-0 z-10 w-[28rem] transition-opacity duration-500 ${
          expanded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Content — slides up a bit on hover, as if pushed by the box */}
        <div className="relative z-10 flex h-full flex-col transition-transform duration-500 group-hover:-translate-y-[4rem]">
          <div className="relative flex-1">
            <Image
              src={image}
              alt={title}
              fill
              sizes="28rem"
              className="object-contain p-10"
            />
          </div>
          <div className="flex items-end justify-between gap-6 px-6 pb-4">
            <h3 className="font-neo text-[1.5rem] font-bold text-text">
              {title}
            </h3>
            <p className="max-w-36 text-left font-neo text-[1rem] leading-[1.5] text-text">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Expanded (varieties) layer — pinned to the same left edge and
          fixed at the full width, so the list is already in place and is simply
          revealed by the growing card while it fades in ---------- */}
      <div
        className={`absolute inset-y-0 left-0 z-10 flex w-[70rem] flex-col transition-opacity duration-500 ${
          expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close */}
        <button
          type="button"
          onClick={() => setExpanded(false)}
          aria-label="إغلاق"
          className="absolute right-6 top-6 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[1.75rem] text-text"
        >
          ✕
        </button>

        <div className="flex min-h-0 flex-1">
          {/* Varieties list (right) — pulled toward the middle so the ✕ clears it */}
          <div className="flex min-h-0 flex-1 items-start pb-8 pl-0 pr-[4rem] pt-[4rem]">
            <div className="w-full rounded-[2rem] bg-[#000f07]/10 p-5 backdrop-blur-[30px]">
              {/* One column of fixed-height rows; scrolls with ~9.5 rows visible.
                  data-lenis-prevent lets this scroll natively instead of Lenis
                  hijacking the wheel to scroll the whole page. */}
              <div
                data-lenis-prevent
                className="no-scrollbar flex max-h-[29.2rem] flex-col gap-2 overflow-y-auto"
              >
                {varieties.map((v, i) => (
                  <div
                    key={i}
                    dir="rtl"
                    className="group/row relative flex h-[2.6rem] w-full shrink-0 cursor-pointer items-center gap-3 rounded-xl bg-white px-4 font-neo text-[1.05rem] text-text"
                  >
                    {/* Product number (rightmost) — fixed width so numbers align */}
                    <span
                      dir="ltr"
                      className="w-[3rem] shrink-0 text-right text-muted transition-colors group-hover/row:text-text"
                    >
                      {v.code}
                    </span>
                    {/* Product name — right-aligned */}
                    <span className="flex-1 text-right">{v.name}</span>
                    {/* Hover arrow — fades in at the left end and rotates 45° clockwise */}
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 rotate-0 text-text opacity-0 transition-all duration-300 group-hover/row:rotate-45 group-hover/row:opacity-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[1.4rem] w-[1.4rem]"
                      >
                        <path d="M22 12H2" />
                        <path d="M8 6l-6 6 6 6" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feed image (left) — sits over the animal image so it crossfades in place */}
          <div className="relative w-[22rem] shrink-0">
            <Image
              src="/assets/Products/3alaf.png"
              alt={title}
              fill
              sizes="22rem"
              className="object-contain p-8"
            />
          </div>
        </div>

        {/* Title + description */}
        <div className="flex items-end justify-between gap-6 px-6 pb-6">
          <h3 className="font-neo text-[2.5rem] font-bold text-text">{title}</h3>
          <p className="max-w-[22rem] text-left font-neo text-[1.5rem] leading-[1.4] text-text">
            {description}
          </p>
        </div>
      </div>

      {/* "عرض الأصناف" box — spans the card's width; slides up on hover, and drops
          down out of view as the card expands */}
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className={`absolute inset-x-0 bottom-0 z-30 flex h-[4rem] cursor-pointer items-center justify-center gap-3 rounded-b-4xl bg-text text-white transition-transform duration-500 ${
          expanded
            ? "pointer-events-none translate-y-full"
            : "translate-y-full group-hover:translate-y-0"
        }`}
      >
        <span className="font-neo text-[1.25rem]">عرض الأصناف</span>
        <img src="/svgs/اصناف.svg" alt="" className="h-[1.5rem] w-auto" />
      </button>
    </article>
  );
}
