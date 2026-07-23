import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative h-[50vh] w-full shrink-0 overflow-hidden md:h-[47%]">
      <Image
        src="/assets/CTA/CTA Image.webp"
        alt="مصنع ازدهار للأعلاف"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center md:gap-6 md:px-10">
        <h2 className="font-palestine text-[2rem] leading-[1.2] text-white md:text-[4.5rem]">
          جاهز تبدأ مع علف فلسطيني؟
        </h2>
        <p className="max-w-[26rem] font-neo text-[1rem] leading-[1.6] text-white/85 md:max-w-[42rem] md:text-[1.5rem]">
          اطلب عينة، أو خذ استشارة مجانية من مختصي التغذية عندنا أو تعال زور
          المصنع بترقوميا وشوف بعينك من وين بيجي علف مزرعتك.
        </p>
        <button className="mt-2 w-[12rem] cursor-pointer rounded-xl bg-white py-3 font-neo text-[1rem] text-text transition-transform duration-300 hover:scale-[1.05] md:w-[16rem] md:text-[1.125rem]">
          ابدأ اليوم
        </button>
      </div>
    </div>
  );
}
