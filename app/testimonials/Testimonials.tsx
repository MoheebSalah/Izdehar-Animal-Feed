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
  const cardRef = useRef<HTMLDivElement>(null);

  // Fade the quote + name in each time the selection changes.
  useGSAP(
    () => {
      gsap.fromTo(
        "[data-fade]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 }
      );
    },
    { dependencies: [selected], scope: cardRef }
  );

  return (
    <section className="flex h-screen flex-col gap-16 px-10 py-12">
      <h2 className="text-center font-palestine text-[4.5rem] leading-[1.2] text-text">
        ناس جربت... وحكت
      </h2>

      {/* Row: avatars on the right, quote card on the left (RTL: first child = right) */}
      <div className="flex min-h-0 flex-1 gap-[4rem]">
        {/* Avatars column — selected is twice the height of the others */}
        <div className="flex w-[25rem] shrink-0 flex-col gap-5">
          {testimonials.map((t, i) => {
            const isActive = i === selected;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => setSelected(i)}
                className={`relative min-h-0 w-full overflow-hidden rounded-3xl transition-all duration-300 ${
                  isActive ? "flex-[2]" : "flex-[1] cursor-pointer"
                }`}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="25rem"
                  className={`object-cover object-[50%_35%] origin-[50%_35%] transition-all duration-300 ease-out ${
                    isActive
                      ? "scale-[1.15]"
                      : "brightness-60 hover:brightness-90"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Quote card */}
        <div
          ref={cardRef}
          className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] bg-white px-[5rem] py-[4rem]"
        >
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
          <div className="relative z-10 flex flex-1 items-center">
            <p
              data-fade
              className=" text-right font-neo text-[3.5rem] font-bold leading-[1.4] text-text"
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
    </section>
  );
}
