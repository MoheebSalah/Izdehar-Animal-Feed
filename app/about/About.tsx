export default function About() {
  return (
    <section className="flex h-[60vh] items-center justify-between gap-16 px-10">
      {/* Title (right) */}
      <h2 className="shrink-0  font-palestine text-[7.5rem] leading-[1.4] text-text">
        صُنع في فلسطين،
        <br />
        لأجل فلسطين
      </h2>

      {/* Paragraph (left) */}
      <p className="max-w-[48rem]  font-neo text-[1.5rem] leading-[1.4] text-text">
        تأسست &quot;ازدهار فلسطين للأعلاف&quot; في الخليل عام 2021، وبنينا في
        <br />
        المنطقة الصناعية بترقوميا مصنعًا على مساحة 45 ألف متر مربع،
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
    </section>
  );
}
