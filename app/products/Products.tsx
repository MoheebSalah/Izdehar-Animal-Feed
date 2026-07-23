"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";

const livestockVarieties = [
  { code: "4006", name: "الخلطة البلدية المحببه 13% (الخلطة الشعبية)" },
  { code: "5013", name: "علف تسمين العجول 14%" },
  { code: "5001", name: "علف تسمين العجول 16%" },
  { code: "5010", name: "علف تسمين العجول 18%" },
  { code: "4007", name: "علف تسمين الخراف و الماعز 18 % سوبر" },
  { code: "4009", name: "علف تسمين الخراف و الماعز 18%سوبر + اورفاك" },
  { code: "4010", name: "علف تسمين الخراف و الماعز 21 % سوبر" },
  { code: "4011", name: "علف تسمين الخراف و الماعز 21 %سوبر + اورفاك" },
  { code: "4018", name: "علف تسمين الخراف والماعز 16 %" },
  { code: "4020", name: "خلطة تسمين أغنام 18% – حبوب مع مركز محبب" },
  { code: "4021", name: "خليط تسمين خراف 16%" },
  { code: "40011", name: "علف تسمين الجدي 19%" },
  { code: "40012", name: "علف تسمين الجدي 19% مع اورفاك" },
  { code: "5011", name: "علف ابقار حلوب 18% مكبوس" },
  { code: "4003", name: "علف انتاج الحليب للاغنام و الماعز" },
];

const chickenVarieties = [
  { code: "2003", name: "علف بادئ للدجاج اللاحم" },
  { code: "2004", name: "علف نامي للدجاج اللاحم" },
  { code: "2005", name: "علف ناهي للدجاج اللاحم" },
  { code: "3001", name: "علف للدجاج البياض 17.5% مجروش" },
  { code: "3005", name: "علف للدجاج البياض 17% مجروش" },
  { code: "3009", name: "علف للدجاج البياض 17% مجروش (مرحلة ثانية)" },
  { code: "3010", name: "علف للدجاج البياض 16% مجروش" },
  { code: "30012", name: "بياض مجروش م4 / Layer P4 Mash" },
  { code: "3006", name: "علف للدجاج البياض 17.5% محبب" },
  { code: "3007", name: "علف للدجاج البياض 17% محبب" },
  { code: "30010", name: "علف للدجاج البياض 17% محبب (مرحلة ثانية)" },
  { code: "2006", name: "علف ديكالب بادئ للفراخ البياضة" },
  { code: "2007", name: "علف ديكالب نامي للفراخ البياضة" },
  { code: "2010", name: "علف ديكالب ناهي للفراخ البياضة" },
  { code: "2008", name: "علف لوهمان بادئ للفراخ البياضة" },
  { code: "2009", name: "علف لوهمان نامي للفراخ البياضة" },
  { code: "2011", name: "علف لوهمان ناهي للفراخ البياضة" },
  { code: "30011", name: "علف تصويم فرخات" },
];

const cowVarieties = [
  { code: "5002", name: "علف ابقار حلوب TMR اخضر" },
  { code: "5003", name: "علف ابقار حلوب TMR جاف" },
  { code: "5004", name: "علف الابقار المنشفات TMR ( معاشير )" },
  { code: "5016", name: "عليقة عجول تسمين | Beef Fattening" },
];

const horseVarieties = [
  { code: "1101", name: "رقائق الشعير" },
  { code: "1102", name: "رقائق الذرة" },
];

const products = [
  {
    image: "/assets/Products/Animals.webp",
    title: "مواشي",
    description: "تسمين وحليب للعجول والخراف والماعز",
    varieties: livestockVarieties,
  },
  {
    image: "/assets/Products/Chickens.webp",
    title: "دجاج",
    description: "برامج كاملة للّحم والبيّاض والفرخات",
    varieties: chickenVarieties,
  },
  {
    image: "/assets/Products/Cows.webp",
    title: "أبقار TMR",
    description: "عليقة كاملة جاهزة للأبقار الحلوب",
    varieties: cowVarieties,
  },
  {
    image: "/assets/Products/Horses.webp",
    title: "خيول",
    description: "رقائق شعير وذرة، طاقة سهلة الهضم",
    varieties: horseVarieties,
  },
];

const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px)").matches;

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // Only one card is ever expanded — the parent owns which, so opening one
  // closes any other. `null` = all collapsed.
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // The previously expanded card, so the centering below can account for it
  // still collapsing while the new one expands.
  const prevExpandedRef = useRef<number | null>(null);

  // Track which card is centered (dots + mobile). Uses screen-space rects so it
  // works in either direction — the carousel is RTL, where scrollLeft is
  // negative and offsetLeft-based math would break.
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const mid = el.getBoundingClientRect().left + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const r = (child as HTMLElement).getBoundingClientRect();
      const center = r.left + r.width / 2;
      const dist = Math.abs(center - mid);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActive(closest);
    // Mobile only: collapse an expanded card once it's swiped away from. On
    // desktop the programmatic centering below scrolls the track, so we must
    // NOT collapse on scroll there.
    setExpandedIndex((prev) =>
      prev !== null && prev !== closest && isMobile() ? null : prev
    );
  };

  const goTo = (i: number) => {
    const child = trackRef.current?.children[i] as HTMLElement | undefined;
    child?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  };

  // When a card expands on desktop, pan the carousel so the (now wide) card
  // ends up centered — this keeps it from growing off the edge of the screen.
  // We solve for the final scroll offset up front and animate to it immediately,
  // so the pan runs *together* with the width growth instead of after it. The
  // card grows to the LEFT from a fixed right edge, so its final centre sits
  // half of the expanded width (70rem → 35rem) to the left of that edge.
  useEffect(() => {
    const prev = prevExpandedRef.current;
    prevExpandedRef.current = expandedIndex;
    if (expandedIndex === null || isMobile()) return;
    const el = trackRef.current;
    const child = el?.children[expandedIndex] as HTMLElement | undefined;
    if (!el || !child) return;
    const remPx = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const cardRect = child.getBoundingClientRect();
    const containerRect = el.getBoundingClientRect();
    // The measured right edge is taken while any previously expanded card is
    // still collapsing (70rem → 28rem). If that card sits to the RIGHT of this
    // one (lower index in RTL), it will free 42rem and push this card's right
    // edge back rightward — so add that width back to center on the final spot.
    let rightEdge = cardRect.right;
    if (prev !== null && prev < expandedIndex) {
      rightEdge += (70 - 28) * remPx;
    }
    const finalCenter = rightEdge - 35 * remPx;
    const desiredCenter = containerRect.left + containerRect.width / 2;
    el.scrollTo({
      left: el.scrollLeft + (finalCenter - desiredCenter),
      behavior: "smooth",
    });
  }, [expandedIndex]);

  return (
    <section id="products" className="flex flex-col">
      {/* Heading: label (right), title (near middle), paragraph (left) on
          desktop; stacked on mobile. */}
      <div className="flex flex-col gap-2 px-6 pt-10 md:flex-row md:items-start md:justify-between md:px-10 md:pt-12">
        <span className="font-neo text-[1rem] text-text md:text-[1.25rem]">
          منتجاتنا
        </span>
        <h2 className="font-neo text-[1.5rem] font-bold text-text md:me-20 md:text-[2rem]">
          علف لكل حيوان، وتركيبة لكل مرحلة
        </h2>
        <p className="font-neo text-[0.95rem] leading-[1.4] text-text md:whitespace-nowrap md:text-[1.25rem]">
          أبقار، أغنام، دجاج، حبش، وخيول, لكل واحد تركيبته{" "}
          <br className="hidden md:inline" />
          الخاصة. كل اللي بتحتاجه مزرعتك تحت سقف واحد.
        </p>
      </div>

      {/* Body: horizontal carousel — RTL, so مواشي sits on the right and reads
          first. On desktop it free-scrolls with cards flowing right → left; on
          mobile it snaps one full-width card at a time. */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        dir="rtl"
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-6 py-6 md:flex-1 md:snap-none md:gap-10 md:px-10 md:py-12"
      >
        {products.map((p, i) => (
          <ProductCard
            key={i}
            {...p}
            isActive={active === i}
            expanded={expandedIndex === i}
            onExpand={() => setExpandedIndex(i)}
            onCollapse={() => setExpandedIndex(null)}
            onSwipe={(dir) => goTo(i + dir)}
          />
        ))}
      </div>

      {/* Dot indicators — mobile only. RTL so the first dot lines up with the
          right-most (first) card. */}
      <div dir="rtl" className="flex justify-center gap-2 pb-2 md:hidden">
        {products.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`المنتج ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
