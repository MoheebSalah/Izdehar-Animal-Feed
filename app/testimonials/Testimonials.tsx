import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="flex h-screen flex-col gap-12 px-10 py-12">
      <h2 className="text-center font-palestine text-[4.5rem] leading-[1.2] text-text">
        ناس جربت... وحكت
      </h2>

      {/* Row: avatars on the right, quote card on the left (RTL: first child = right) */}
      <div className="flex min-h-0 flex-1 gap-[4rem]">
        {/* Avatars column */}
        <div className="flex w-[25rem] shrink-0 flex-col gap-5">
          <div className="relative flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/assets/Testimonials/Person 1.webp"
              alt="أبو محمود الجعبري"
              fill
              sizes="25rem"
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/assets/Testimonials/Person 2.webp"
              alt="عميل ازدهار"
              fill
              sizes="25rem"
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-3xl">
            <Image
              src="/assets/Testimonials/Person 3.webp"
              alt="عميل ازدهار"
              fill
              sizes="25rem"
              className="object-cover"
            />
          </div>
        </div>

        {/* Quote card */}
        <div className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] bg-white px-[5rem] py-[4rem]">
          {/* Decorative quotation marks */}
          <span className="pointer-events-none absolute right-[8rem] top-0 font-palestine text-[14rem] leading-none text-primary/10">
            &rdquo;
          </span>
          <span className="pointer-events-none absolute bottom-[-2rem] left-[4rem] font-palestine text-[14rem] leading-none text-primary/10">
            &ldquo;
          </span>

          {/* Quote text */}
          <div className="relative z-10 flex flex-1 items-center justify-center">
            <p className="max-w-[42rem] text-center font-neo text-[3.5rem] font-bold leading-[1.4] text-text">
              أول شهر جرّبت فيه العليقة الكاملة من ازدهار كنت خايف أغيّر على
              البقر. بعد ثلاث أسابيع الحليب زاد، والبقر صار ياكل براحته من غير
              فرز. صراحة العلف ثابت الجودة، مش كل شحنة بلون وطعم.
            </p>
          </div>

          {/* Name + role */}
          <div className="relative z-10 text-right">
            <p className="font-neo text-[2rem] font-bold text-text">
              أبو محمود الجعبري
            </p>
            <p className="font-neo text-[1.5rem] text-text/50">مزرعة أبقار حلوب</p>
          </div>
        </div>
      </div>
    </section>
  );
}
