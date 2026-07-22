"use client";

import Image from "next/image";
import { useState } from "react";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
};

// Mock varieties — real data will be provided later.
const varieties = Array.from({ length: 16 }, () => ({
  name: "علف تسمين المحلول 18%",
  code: "5010",
}));

export default function ProductCard({
  image,
  title,
  description,
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

      {expanded ? (
        /* ---------- Expanded (varieties) view — fixed width so it's revealed,
            not reflowed, as the card animates open ---------- */
        <div className="relative z-10 flex h-full w-[70rem] flex-col">
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
            <div className="flex min-h-0 flex-1 items-start pb-8 pl-8 pr-[4rem] pt-[4rem]">
              <div className="w-full rounded-[2rem] bg-[#000f07]/10 p-5 backdrop-blur-[30px]">
                <div
                  dir="ltr"
                  className="grid grid-flow-col auto-cols-fr grid-rows-9 gap-2"
                >
                  {varieties.map((v, i) => (
                    <div
                      key={i}
                      dir="rtl"
                      className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 font-neo text-[0.95rem] text-text"
                    >
                      <span>{v.name}</span>
                      <span dir="ltr" className="text-muted">
                        {v.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feed image (left) */}
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
            <h3 className="font-neo text-[2.5rem] font-bold text-text">
              {title}
            </h3>
            <p className="max-w-[22rem] text-left font-neo text-[1.5rem] leading-[1.4] text-text">
              {description}
            </p>
          </div>
        </div>
      ) : (
        /* ---------- Normal + hover view ---------- */
        <>
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

          {/* "عرض الأصناف" box — slides up from the bottom on hover */}
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="absolute inset-x-0 bottom-0 z-20 flex h-[4rem] translate-y-full cursor-pointer items-center justify-center gap-3 bg-text text-white transition-transform duration-500 group-hover:translate-y-0"
          >
            <span className="font-neo text-[1.25rem]">عرض الأصناف</span>
            <img src="/svgs/اصناف.svg" alt="" className="h-[1.5rem] w-auto" />
          </button>
        </>
      )}
    </article>
  );
}
