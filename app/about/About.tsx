export default function About() {
  return (
    <section className="flex h-screen items-center justify-between gap-16 px-10">
      {/* Title (right) */}
      <h2 className="shrink-0  font-palestine text-[7.5rem] leading-[1.4] text-text">
        صُنع في فلسطين،
        <br />
        لأجل فلسطين
      </h2>

      {/* Paragraph (left) */}
      <p className="max-w-[48rem]  font-neo text-[1.5rem] leading-[1.6] text-text">
        تأسست &quot;ازدهار فلسطين للأعلاف&quot; في الخليل عام 2021، وبنينا في
        المنطقة الصناعية بترقوميا مصنعًا على مساحة 45 ألف متر مربع، بصوامع تخزّن
        عشرات آلاف الأطنان من الحبوب، أُنجز قبل موعده بعام كامل. لكن الرقم الأهم
        عندنا مش المساحة ولا الطاقة الإنتاجية, هو كل مزرعة صارت تشتري علفها من
        جارها بدل ما تستورده. هدفنا نغطي 15% من حاجة السوق المحلي، ونحوّلها
        إحلالًا حقيقيًا للمستورد، ونخفّض كلفة الإنتاج الحيواني على كل مربٍّ
        فلسطيني.
      </p>
    </section>
  );
}
