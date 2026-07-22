import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col bg-[#06180e] px-10 pt-[2.5rem] text-white">
      {/* Top: logo (right) — link columns — contact (left) */}
      <div className="flex justify-between">
        {/* Logo */}
        <div className="relative h-[16rem] w-[13rem] shrink-0">
          <Image
            src="/assets/logo.png"
            alt="ازدهار للأعلاف"
            fill
            sizes="13rem"
            className="object-contain"
          />
        </div>

        {/* Link columns */}
        <div className="flex gap-[8rem]">
          <div className="flex flex-col gap-3 text-right">
            <h3 className="mb-1 font-neo text-[1.25rem] font-bold text-white">
              الشركة
            </h3>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              من نحن
            </a>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              منتجاتنا
            </a>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              تواصل معنا
            </a>
          </div>

          <div className="flex flex-col gap-3 text-right">
            <h3 className="mb-1 font-neo text-[1.25rem] font-bold text-white">
              منتجاتنا
            </h3>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              أعلاف مواشي
            </a>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              دجاج لاحم
            </a>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              دجاج بيّاض
            </a>
            <a href="#" className="font-neo text-[1.125rem] text-white/70">
              المزيد
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 font-neo text-[1.125rem] text-white">
            <img src="/svgs/phone.svg" alt="" className="h-[1.25rem] w-auto" />
            <span dir="ltr">+972 2 22233222</span>
          </div>
          <div className="flex items-center gap-2 font-neo text-[1.125rem] text-white">
            <img src="/svgs/location.svg" alt="" className="h-[1.25rem] w-auto" />
            <span>ترقوميا، الخليل، فلسطين</span>
          </div>
          <div className="flex items-center gap-2 font-neo text-[1.125rem] text-white">
            <img src="/svgs/mobile.svg" alt="" className="h-[1.25rem] w-auto" />
            <span dir="ltr">+972 562242003</span>
          </div>
          <div className="flex items-center gap-2 font-neo text-[1.125rem] text-white">
            <img src="/svgs/mail.svg" alt="" className="h-[1.25rem] w-auto" />
            <span dir="ltr">info@izdeharanimal.ps</span>
          </div>
        </div>
      </div>

      {/* Company description */}
      <p className="mt-[2.5rem] max-w-[55rem] font-neo text-[1rem] leading-[1.7] text-white/70">
        ازدهار فلسطين للأعلاف، مصنع فلسطيني في ترقوميا، الخليل، بنصنع أعلاف
        متوازنة لكل أنواع الثروة الحيوانية. هدفنا نخفّض كلفة الإنتاج على المزارع
        الفلسطيني ونحلّ العلف المحلي مكان المستورد.
      </p>

      {/* Copyright */}
      <div className="mt-auto border-t border-white/10 py-5 text-center">
        <p className="font-neo text-[0.875rem] text-white/50">
          © 2026 جميع الحقوق محفوظة لشركة ازدهار فلسطين للأعلاف
        </p>
      </div>
    </footer>
  );
}
