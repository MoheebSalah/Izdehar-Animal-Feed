"use client";

import { useRef, useState } from "react";
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

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Mobile carousel: track which card is centered so the dots stay in sync.
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    let closest = 0;
    let min = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - el.scrollLeft);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (el && child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col">
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

      {/* Body: horizontal carousel. On desktop it free-scrolls (LTR) with cards
          flowing Animals → Horses and the last one cut off at the edge. On
          mobile it snaps one full-width card at a time. */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        dir="ltr"
        className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-6 py-6 md:flex-1 md:snap-none md:gap-10 md:px-10 md:py-12"
      >
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="flex justify-center gap-2 pb-2 md:hidden">
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
