import Parallax from "../components/Parallax";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center gap-6 px-6 py-16 md:h-[70vh] md:flex-row md:items-center md:justify-between md:gap-16 md:px-10 md:py-0"
    >
      {/* Title — right on desktop, top on mobile. Strong parallax on desktop,
          much gentler on mobile. */}
      <Parallax speed={200} mobileSpeed={30} className="shrink-0">
        <h2 className="font-palestine text-[2.5rem] leading-[1.4] text-text md:text-[7.5rem]">
          صُنع في فلسطين،
          <br />
          لأجل فلسطين
        </h2>
      </Parallax>

      {/* Paragraph — left on desktop, below the title on mobile — lighter parallax */}
      <Parallax speed={90} className="md:max-w-[48rem]">
        <p className="font-neo text-[1rem] leading-[1.4] text-text [&_br]:hidden md:text-[1.5rem] md:[&_br]:inline">
          تأسست &quot;ازدهار فلسطين للأعلاف&quot; في الخليل عام 2021، وبنينا في
          <br />
          المنطقة الصناعية بترقوميا مصنعًا على مساحة 45 ألف متر مربع,
          <br /> بصوامع تخزّن
          عشرات آلاف الأطنان من الحبوب، أُنجز قبل موعده بعام
          <br /> كامل. لكن الرقم الأهم
          عندنا مش المساحة ولا الطاقة الإنتاجية, هو
          <br /> كل مزرعة صارت تشتري علفها من
          جارها بدل ما تستورده. هدفنا
          <br /> نغطي 15% من حاجة السوق المحلي، ونحوّلها
          إحلالًا حقيقيًا
          <br /> للمستورد، ونخفّض كلفة الإنتاج الحيواني على كل مربٍّ
          فلسطيني.
        </p>
      </Parallax>
    </section>
  );
}
