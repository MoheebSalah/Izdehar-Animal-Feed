import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center px-6 py-12 md:h-[80vh] md:px-10 md:py-0"
    >
      <div className="w-full rounded-[2rem] bg-white p-6 md:p-[3rem]">
        {/* Title */}
        <h2 className="text-right font-palestine text-[2.5rem] leading-[1.2] text-text md:text-[4.5rem]">
          اسأل مختصينا
        </h2>

        {/* Row: map right / form left on desktop; on mobile the form is on top
            and the map below it (map is the DOM-first child, so orders swap). */}
        <div className="mt-8 flex flex-col gap-8 md:mt-[2.5rem] md:flex-row md:gap-[3rem]">
          {/* Map — below the form on mobile, 0.75 of the section height on desktop.
              flex-1 is desktop-only: in the mobile column it would zero out the
              height via flex-basis and hide the map. */}
          <div className="relative order-2 h-[24rem] overflow-hidden rounded-[1.5rem] md:order-1 md:h-[60vh] md:flex-1">
            <Image
              src="/photos/map_placeholder.webp"
              alt="موقع مصنع ازدهار على الخريطة"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* Form — on top on mobile; same height as the map on desktop */}
          <form className="order-1 flex flex-col md:order-2 md:h-[60vh] md:flex-1">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-right font-neo text-[1.1rem] font-semibold text-text md:text-[1.5rem]">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  placeholder="مثال: خالد"
                  className="w-full rounded-2xl bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
                />
              </div>
              <div>
                <label className="mb-2 block text-right font-neo text-[1.1rem] font-semibold text-text md:text-[1.5rem]">
                  اسم العائلة
                </label>
                <input
                  type="text"
                  placeholder="مثال: القواسمي"
                  className="w-full rounded-2xl bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
                />
              </div>
            </div>

            {/* Message — grows to fill the space between the fields and the contacts */}
            <div className="mt-5 flex flex-1 flex-col">
              <label className="mb-2 block text-right font-neo text-[1.1rem] font-semibold text-text md:text-[1.5rem]">
                الرسالة
              </label>
              <textarea
                placeholder="احكِ لنا عن مزرعتك وشو بتحتاج..."
                className="w-full flex-1 resize-none rounded-2xl bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted min-h-[10rem] md:min-h-0"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-text py-4 font-neo text-[1.125rem] text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              أرسل رسالتك
              {/* Two arrows in a mask: the current one flies out toward the top-left
                  while a fresh one slides in from the bottom-right */}
              <span className="relative block h-[1.4rem] w-[1.4rem] overflow-hidden">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:-translate-x-full group-hover:-translate-y-full"
                >
                  <path d="M19 19L5 5M5 5H14M5 5V14" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute inset-0 h-full w-full translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                >
                  <path d="M19 19L5 5M5 5H14M5 5V14" />
                </svg>
              </span>
            </button>

            {/* Contact info — grid mirrors the name fields, so the phone/mobile
                column starts where the "اسم العائلة" field starts */}
            <div className="mt-auto grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 md:gap-5 md:pt-[2.5rem]">
              {/* Right column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-neo text-[1.1rem] text-text md:gap-2 md:text-[1.5rem]">
                  <img
                    src="/svgs/location.svg"
                    alt=""
                    className="h-[1.1rem] w-auto md:h-[1.25rem]"
                  />
                  <span>ترقوميا، الخليل، فلسطين</span>
                </div>
                <div className="flex items-center gap-3 font-neo text-[1.1rem] text-text md:gap-2 md:text-[1.5rem]">
                  <img
                    src="/svgs/mail.svg"
                    alt=""
                    className="h-[1.1rem] w-auto md:h-[1.25rem]"
                  />
                  <span dir="ltr">info@izdeharanimal.ps</span>
                </div>
              </div>
              {/* Left column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-neo text-[1.1rem] text-text md:gap-2 md:text-[1.5rem]">
                  <img
                    src="/svgs/phone.svg"
                    alt=""
                    className="h-[1.1rem] w-auto md:h-[1.25rem]"
                  />
                  <span dir="ltr">+972 2 22233222</span>
                </div>
                <div className="flex items-center gap-3 font-neo text-[1.1rem] text-text md:gap-2 md:text-[1.5rem]">
                  <img
                    src="/svgs/mobile.svg"
                    alt=""
                    className="h-[1.1rem] w-auto md:h-[1.25rem]"
                  />
                  <span dir="ltr">+972 562242003</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
