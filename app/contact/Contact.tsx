import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex  items-center px-10">
      <div className="w-full rounded-[2rem] bg-white p-[3rem] shadow-sm">
        {/* Title */}
        <h2 className="text-right font-palestine text-[3rem] leading-[1.2] text-text">
          اسأل مختصينا
        </h2>

        {/* Row: map on the right, form on the left (RTL: first child = right) */}
        <div className="mt-[2.5rem] flex items-stretch gap-[3rem]">
          {/* Map */}
          <div className="relative min-h-[30rem] flex-1 overflow-hidden rounded-[1.5rem]">
            <Image
              src="/photos/map_placeholder.png"
              alt="موقع مصنع ازدهار على الخريطة"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>

          {/* Form */}
          <form className="flex flex-1 flex-col">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-right font-neo text-[1.125rem] text-text">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  placeholder="مثال: خالد"
                  className="w-full rounded-xl border border-black/5 bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
                />
              </div>
              <div>
                <label className="mb-2 block text-right font-neo text-[1.125rem] text-text">
                  اسم العائلة
                </label>
                <input
                  type="text"
                  placeholder="مثال: القواسمي"
                  className="w-full rounded-xl border border-black/5 bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-right font-neo text-[1.125rem] text-text">
                الرسالة
              </label>
              <textarea
                placeholder="احكِ لنا عن مزرعتك وشو بتحتاج..."
                className="h-[12rem] w-full resize-none rounded-xl border border-black/5 bg-[#ededed] px-5 py-4 text-right font-neo text-[1.125rem] text-text placeholder:text-muted"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-text py-4 font-neo text-[1.125rem] text-white"
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

            {/* Contact info */}
            <div className="mt-[2.5rem] space-y-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-2 font-neo text-[1.125rem] text-text">
                  <img
                    src="/svgs/location.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span>ترقوميا، الخليل، فلسطين</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.125rem] text-text">
                  <img
                    src="/svgs/phone.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span dir="ltr">+972 2 22233222</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2 font-neo text-[1.125rem] text-text">
                  <img
                    src="/svgs/mail.svg"
                    alt=""
                    className="h-[1.25rem] w-auto"
                  />
                  <span dir="ltr">info@izdeharanimal.ps</span>
                </div>
                <div className="flex items-center gap-2 font-neo text-[1.125rem] text-text">
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
