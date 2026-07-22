import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex h-[80vh] items-center px-10">
      <div className="w-full rounded-[2rem] bg-white p-[3rem] ">
        {/* Title */}
        <h2 className="text-right font-palestine text-[4.5rem] leading-[1.2] text-text">
          اسأل مختصينا
        </h2>

        {/* Row: map on the right, form on the left (RTL: first child = right) */}
        <div className="mt-[2.5rem] flex gap-[3rem]">
          {/* Map — 0.75 of the section height */}
          <div className="relative h-[60vh] flex-1 overflow-hidden rounded-[1.5rem]">
            <Image
              src="/photos/map_placeholder.png"
              alt="موقع مصنع ازدهار على الخريطة"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* Form — same height as the map, top & bottom aligned with it */}
          <form className="flex h-[60vh] flex-1 flex-col">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-right font-neo text-[1.5rem] font-semibold text-text">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  placeholder="مثال: خالد"
                  className="w-full rounded-2xl bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
                />
              </div>
              <div>
                <label className="mb-2 block text-right font-neo text-[1.5rem] font-semibold text-text">
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
              <label className="mb-2 block text-right font-neo text-[1.5rem] font-semibold text-text">
                الرسالة
              </label>
              <textarea
                placeholder="احكِ لنا عن مزرعتك وشو بتحتاج..."
                className="w-full flex-1 resize-none rounded-2xl bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-text py-4 font-neo text-[1.125rem] text-white"
            >
              أرسل رسالتك
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[1.1rem] w-[1.1rem]"
              >
                <path d="M17 17L7 7M7 7H15M7 7V15" />
              </svg>
            </button>

            {/* Contact info — grid mirrors the name fields, so the phone/mobile
                column starts where the "اسم العائلة" field starts */}
            <div className="mt-auto grid grid-cols-2 gap-5 pt-[2.5rem]">
              {/* Right column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-text">
                  <img
                    src="/svgs/location.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span>ترقوميا، الخليل، فلسطين</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-text">
                  <img
                    src="/svgs/mail.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span dir="ltr">info@izdeharanimal.ps</span>
                </div>
              </div>
              {/* Left column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-text">
                  <img
                    src="/svgs/phone.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span dir="ltr">+972 2 22233222</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.5rem] text-text">
                  <img
                    src="/svgs/mobile.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
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
