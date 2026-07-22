import Image from "next/image";

export default function CTA() {
  return (
    <div className="relative h-[47%] w-full shrink-0 overflow-hidden">
      <Image
        src="/assets/CTA/CTA Image.webp"
        alt="مصنع ازدهار للأعلاف"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-10 text-center">
        <h2 className="font-palestine text-[3.5rem] leading-[1.2] text-white">
          جاهز تبدأ مع علف فلسطيني؟
        </h2>
        <p className="max-w-[42rem] font-neo text-[1.25rem] leading-[1.6] text-white/85">
          اطلب عينة، أو خذ استشارة مجانية من مختصي التغذية عندنا أو تعال زور
          المصنع بترقوميا وشوف بعينك من وين بيجي علف مزرعتك.
        </p>
        <button className="mt-2 rounded-xl bg-white px-[3rem] py-[1rem] font-neo text-[1.125rem] text-text">
          ابدأ اليوم
        </button>
      </div>
    </div>
  );
}
