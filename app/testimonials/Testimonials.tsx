"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const testimonials = [
  {
    image: "/assets/Testimonials/Person 1.webp",
    name: "أبو محمود الجعبري",
    role: "مزرعة أبقار حلوب – الخليل",
    quote:
      "أول شهر جرّبت فيه العليقة الكاملة من ازدهار كنت خايف أغيّر على البقر. بعد ثلاث أسابيع الحليب زاد، والبقر صار ياكل براحته من غير فرز. صراحة العلف ثابت الجودة، مش كل شحنة بلون وطعم.",
  },
  {
    image: "/assets/Testimonials/Person 2.webp",
    name: "رائد عمرو",
    role: "مزارع دواجن – نابلس",
    quote:
      "اللي فرق معي إنو التوريد بيوصل بوقته. قبل كنت أخطط للعلف قبل الفروج، هلأ صار العكس. علف اللاحم أعطاني تحويل غذائي أحسن، ودورة التسمين خلّصت بأيام أقل.",
  },
  {
    image: "/assets/Testimonials/Person 3.webp",
    name: "صهيب الصفدي",
    role: "مزرعة أغنام عوّاسي – رام الله",
    quote:
      "أهم إشي إني بحكي مع ناس بتفهم. سألتهم عن تغذية النعاج بفترة الحمل وردّوا عليّ وأعطوني برنامج مظبوط. حسّيت إني بتعامل مع شركة بدها تنجح مزرعتي، مش بس تبيعني كيس.",
  },
];

export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const active = testimonials[selected];
  const sectionRef = useRef<HTMLElement>(null);
  const imgTrackRef = useRef<HTMLDivElement>(null);

  // Mobile: swiping the image carousel changes which person (and quote) is shown.
  const handleImgScroll = () => {
    const el = imgTrackRef.current;
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
    setSelected(closest);
  };

  // Fade the quote + name in each time the selection changes (both layouts).
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-fade]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      );
    },
    { dependencies: [selected], scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="flex flex-col gap-8 px-6 py-12 md:h-screen md:gap-16 md:px-10"
    >
      <h2 className="text-center font-palestine text-[2.5rem] leading-[1.2] text-text md:text-[4.5rem]">
        ناس جربت... وحكت
      </h2>

      {/* Desktop row: avatars on the right, quote card on the left (RTL: first child = right) */}
      <div className="hidden min-h-0 flex-1 gap-[4rem] md:flex">
        {/* Avatars column — selected is twice the height of the others */}
        <div className="flex w-[25rem] shrink-0 flex-col gap-5">
          {testimonials.map((t, i) => {
            const isActive = i === selected;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setSelected(i)}
                className={`relative min-h-0 w-full overflow-hidden rounded-3xl transition-all duration-300 ${isActive ? "flex-[2]" : "flex-[1] cursor-pointer"
                  }`}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="25rem"
                  className={`object-cover object-[50%_35%] origin-[50%_35%] transition-all duration-300 ease-out ${isActive
                      ? "scale-[1.15]"
                      : "brightness-60 hover:brightness-90"
                    }`}
                />
              </button>
            );
          })}
        </div>

        {/* Quote card */}
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] bg-white px-[5rem] py-[4rem]">
          {/* Decorative quotation marks */}
          <img
            src="/svgs/”.svg"
            alt=""
            className="pointer-events-none absolute right-[7rem] top-0 w-[17rem]"
          />
          <img
            src="/svgs/“.svg"
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 w-[19rem]"
          />

          {/* Quote text */}

            <div className="relative z-10 flex flex-1 items-start ">
              <p
                data-fade
                className=" text-right font-neo text-[2.8rem] font-bold leading-[1.4] text-text"
              >
                {active.quote}
              </p>
            </div>

            {/* Name + role */}
            <div data-fade className="relative z-10 text-right">
              <p className="font-neo text-[2rem] font-bold text-text">
                {active.name}
              </p>
              <p className="font-neo text-[1.5rem] text-text/50">{active.role}</p>
            </div>
        </div>
      </div>

      {/* Mobile: swipe between the images, quote box below updates to match */}
      <div className="flex flex-col gap-6 md:hidden">
        {/* Image carousel — one full-width image at a time. LTR so the swipe
            direction and scroll math are consistent (RTL scrollLeft is flaky). */}
        <div
          ref={imgTrackRef}
          onScroll={handleImgScroll}
          dir="ltr"
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative h-[22rem] w-full shrink-0 snap-center overflow-hidden rounded-3xl"
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="100vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
          ))}
        </div>

        {/* Dot indicators — LTR to match the carousel */}
        <div dir="ltr" className="flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <span
              key={t.name}
              className={`h-2 rounded-full transition-all duration-300 ${selected === i ? "w-6 bg-primary" : "w-2 bg-muted"
                }`}
            />
          ))}
        </div>

        {/* Quote box */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-white px-6 py-8">
          <img
            src="/svgs/”.svg"
            alt=""
            className="pointer-events-none absolute right-5 top-0 w-[6rem]"
          />
          <p
            data-fade
            className="relative z-10 text-right font-neo text-[1.25rem] font-bold leading-[1.4] text-text"
          >
            {active.quote}
          </p>
          <div data-fade className="relative z-10 mt-4 text-right">
            <p className="font-neo text-[1.1rem] font-bold text-text">
              {active.name}
            </p>
            <p className="font-neo text-[0.95rem] text-text/50">{active.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
