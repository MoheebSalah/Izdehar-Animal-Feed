"use client";

import Image from "next/image";
import { useRef } from "react";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  varieties: { code: string; name: string }[];
  /** Mobile only: the centered card in the carousel shows the hover background. */
  isActive?: boolean;
  /** Whether this card is the (single) expanded one — owned by the parent so
      opening one card closes any other. */
  expanded?: boolean;
  /** Open this card. */
  onExpand?: () => void;
  /** Close this card. */
  onCollapse?: () => void;
  /** Mobile only: a horizontal swipe over the open list moves the carousel
      (+1 = next card, -1 = previous). */
  onSwipe?: (dir: number) => void;
};

export default function ProductCard({
  image,
  title,
  description,
  varieties,
  isActive = false,
  expanded = false,
  onExpand,
  onCollapse,
  onSwipe,
}: ProductCardProps) {
  // Mobile: the list is a vertical scroller, which the browser also makes a
  // horizontal scroll container — so it swallows left/right swipes instead of
  // passing them to the carousel. We detect a horizontal swipe ourselves and
  // drive the carousel (touch-action: pan-y keeps native vertical scrolling).
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onListTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onListTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      onSwipe?.(dx < 0 ? 1 : -1);
    }
  };

  // Shared variety rows — used by both the desktop and mobile expanded lists.
  const varietyRows = varieties.map((v, i) => (
    <div
      key={i}
      dir="rtl"
      className="group/row relative flex min-h-[2.3rem] w-full shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white px-3 py-1.5 font-neo text-[0.8rem] leading-[1.4] text-text md:h-[2.6rem] md:gap-3 md:px-4 md:py-0 md:text-[1.05rem]"
    >
      {/* Product number (rightmost) — fixed width so numbers align */}
      <span
        dir="ltr"
        className="w-[2.5rem] shrink-0 text-right text-muted transition-colors group-hover/row:text-text md:w-[3rem]"
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
  ));

  return (
    <article
      dir="rtl"
      // The whole card is the click target — clicking anywhere on a collapsed
      // card opens it (the ✕ / rows handle their own clicks while open). The
      // inner "عرض الأصناف" button gives keyboard users the accessible trigger.
      onClick={() => {
        if (!expanded) onExpand?.();
      }}
      className={`group relative w-full shrink-0 snap-center overflow-hidden rounded-4xl bg-white transition-all duration-500 md:duration-300 ${
        expanded
          ? "h-[82svh] md:h-[44rem] md:w-[70rem]"
          : "h-[66svh] cursor-pointer md:h-[44rem] md:w-[28rem]"
      }`}
    >
      {/* Background — desktop: fades in on hover. Mobile: shows on the active
          (centered) card. Always visible while expanded. */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 md:duration-300 ${
          expanded
            ? "opacity-100"
            : isActive
              ? "opacity-0 group-hover:opacity-100 max-md:opacity-100"
              : "opacity-0 group-hover:opacity-100"
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

      {/* ---------- Desktop collapsed + hover layer — pinned to the right edge
          (RTL) so it never shifts; fades out as the card expands ---------- */}
      <div
        className={`absolute inset-y-0 right-0 z-10 hidden w-[28rem] transition-opacity duration-300 md:block ${
          expanded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Content — slides up a bit on hover, as if pushed by the box */}
        <div className="relative z-10 flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-[4rem]">
          <div className="relative flex-1">
            {/* Animal image — fades out on hover to reveal the shared feed image
                (declared once, below), which then moves + resizes on expand. */}
            <Image
              src={image}
              alt={title}
              fill
              sizes="28rem"
              className="object-contain p-10 transition-opacity duration-300 group-hover:opacity-0"
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

      {/* ---------- Expanded (varieties) layer — pinned to the same right edge
          (RTL) and fixed at the full width, so the list is already in place and
          is simply revealed by the card growing to the LEFT while it fades in.
          Layout: feed image on the right, varieties list on the left. ---------- */}
      <div
        className={`absolute inset-y-0 right-0 z-10 hidden w-[70rem] flex-col transition-opacity duration-300 md:flex ${
          expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close — top-left, over the list side */}
        <button
          type="button"
          onClick={onCollapse}
          aria-label="إغلاق"
          className="absolute left-6 top-6 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-[1.75rem] text-text"
        >
          ✕
        </button>

        <div className="flex min-h-0 flex-1">
          {/* Spacer for the feed image (right) — the image itself is the shared
              element declared below, which moves + resizes into this slot. */}
          <div className="w-[22rem] shrink-0" />

          {/* Varieties list (left) — pulled toward the middle so the ✕ clears it.
              items-center keeps the panel vertically centred, so a short list
              still has space above + below it. */}
          <div className="flex min-h-0 flex-1 items-center pb-8 pl-[4rem] pr-0 pt-[4rem]">
            <div className="w-full rounded-[2rem] bg-[#000f07]/10 p-5 backdrop-blur-[30px]">
              {/* One column of fixed-height rows; the panel hugs the rows and
                  scrolls once past ~9.5 rows. data-lenis-prevent lets this scroll
                  natively instead of Lenis hijacking the wheel to scroll the whole
                  page. On expand the list "drops down" — it starts at one row and
                  grows to fit. */}
              <div
                data-lenis-prevent
                className={`no-scrollbar flex flex-col gap-2 overflow-y-auto transition-[max-height] duration-600 ease-out ${
                  expanded ? "max-h-[29.2rem]" : "max-h-[2.6rem]"
                }`}
              >
                {varietyRows}
              </div>
            </div>
          </div>
        </div>

        {/* Title + description */}
        <div className="flex items-end justify-between gap-6 px-6 pb-6">
          <h3 className="font-neo text-[2.5rem] font-bold text-text">{title}</h3>
          <p className="whitespace-nowrap text-left font-neo text-[1.5rem] leading-[1.4] text-text">
            {description}
          </p>
        </div>
      </div>

      {/* ---------- Desktop shared feed image — declared once so it MOVES and
          RESIZES between the collapsed slot (centred, 28rem) and the expanded
          slot (right column, 22rem) instead of crossfading between two layers.
          Hidden until hover (crossfades in over the animal), stays visible while
          expanded. Right-anchored (RTL), so it just narrows + stays put as the
          card grows to the left. ---------- */}
      <div
        className={`pointer-events-none absolute right-0 top-0 z-[15] hidden transition-all duration-300 ease-out md:block ${
          expanded
            ? "h-[38.3rem] w-[22rem] p-8 opacity-100"
            : "h-[40rem] w-[28rem] p-10 opacity-0 group-hover:-translate-y-[4rem] group-hover:opacity-100"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/assets/Products/3alaf.webp"
            alt={title}
            fill
            sizes="28rem"
            className="object-contain"
          />
        </div>
      </div>

      {/* ---------- Mobile layer — one morphing layout. On expand the animal
          image slides up and swaps to the feed image, the varieties list grows
          in between, and the title + description stay pinned at the bottom.
          ---------- */}
      <div dir="rtl" className="absolute inset-0 z-10 flex flex-col md:hidden">
        {/* Close — appears only while expanded */}
        <button
          type="button"
          onClick={onCollapse}
          aria-label="إغلاق"
          className={`absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[1.25rem] text-text transition-opacity duration-300 ${
            expanded ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          ✕
        </button>

        {/* Image area — always fills the leftover space, so it shrinks and
            grows smoothly (both ways) as the list height and card height
            animate, instead of snapping between fixed sizes. */}
        <div className="relative min-h-0 flex-1">
          {/* Animal image — slides up and fades out as the card expands */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className={`object-contain p-8 transition-all duration-500 ${
              expanded ? "-translate-y-6 opacity-0" : "opacity-100"
            }`}
          />
          {/* Feed image — fades in at the top once the animal has moved up */}
          <Image
            src="/assets/Products/3alaf.webp"
            alt={title}
            fill
            sizes="100vw"
            className={`object-contain p-6 transition-opacity duration-500 ${
              expanded ? "opacity-100 delay-150" : "opacity-0"
            }`}
          />
        </div>

        {/* Varieties list — the height animates both ways. The blur amount is
            animated directly (blur(0) → blur(30px)); animating the wrapper's
            opacity instead would make the backdrop-filter snap in at the end.
            Vertical drags scroll natively (touch-action: pan-y); a horizontal
            drag is caught here and moves the carousel. */}
        <div
          onTouchStart={onListTouchStart}
          onTouchEnd={onListTouchEnd}
          className={`flex items-center overflow-hidden px-4 transition-all duration-500 ${
            expanded ? "h-[48svh]" : "h-0"
          }`}
        >
          <div
            className={`flex max-h-full min-h-0 w-full flex-col rounded-[1.5rem] bg-[#000f07]/10 p-3 transition-all duration-500 ${
              expanded ? "backdrop-blur-[30px]" : "backdrop-blur-0"
            }`}
          >
            <div
              data-lenis-prevent
              className="no-scrollbar flex min-h-0 touch-pan-y flex-col gap-2 overflow-y-auto"
            >
              {varietyRows}
            </div>
          </div>
        </div>

        {/* Title + description — pinned at the bottom in both states */}
        <div
          className={`flex shrink-0 items-end justify-between gap-4 px-5 pt-3 transition-all duration-500 ${
            expanded ? "pb-5" : "pb-[4.5rem]"
          }`}
        >
          <h3 className="font-neo text-[1.5rem] font-bold text-text">{title}</h3>
          <p className="max-w-[10rem] text-left font-neo text-[0.9rem] leading-[1.4] text-text">
            {description}
          </p>
        </div>
      </div>

      {/* "عرض الأصناف" box — spans the card's width. On desktop it slides up on
          hover; on mobile it stays visible (no hover). It drops out of view as
          the card expands. Its click bubbles up to the card's own expand
          handler, so no separate onClick is needed. */}
      <button
        type="button"
        className={`absolute inset-x-0 bottom-0 z-30 flex h-[4rem] cursor-pointer items-center justify-center gap-3 rounded-b-4xl bg-text text-white transition-transform duration-500 md:duration-300 ${
          expanded
            ? "pointer-events-none translate-y-full"
            : "translate-y-0 md:translate-y-full md:group-hover:translate-y-0"
        }`}
      >
        <span className="font-neo text-[1.25rem]">عرض الأصناف</span>
        <img src="/svgs/اصناف.svg" alt="" className="h-[1.5rem] w-auto" />
      </button>
    </article>
  );
}
