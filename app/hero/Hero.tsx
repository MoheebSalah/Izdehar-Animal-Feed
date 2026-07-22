export default function Hero() {
  return (
    <section className="flex h-screen flex-col overflow-hidden">
      {/* Background video — 1728 x 835 in the design */}
      <div className="relative h-[70vh] w-full shrink-0 overflow-hidden">
        <video
          src="/assets/Hero/Iz Feed hero.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading (left) + paragraph (right). In RTL the first child sits on
          the right, so the paragraph comes first and the heading second. */}
      <div className="flex flex-1 items-end justify-between gap-12 px-10 pb-8">
        <p className="max-w-[43rem] font-neo text-[1.25rem]  leading-[1.4] text-text">
          من مصنعنا في ترقوميا، أكبر مصنع أعلاف في فلسطين، نصنع لمزارعكم علفًا
          متوازنًا
          <br />
          بجودة عالمية وسعر يقدّر تعب اليوم. كل كيس يخرج من هنا يعني كلفة أقل على
          <br />
          المزارع الفلسطيني، وحليبًا ولحمًا وبيضًا مصدره أرضنا، واعتمادًا أقل على
          المستورد.
        </p>

        <h1 className="font-palestine text-[4.5rem]  text-text">
          علف فلسطيني…
          <br />
          من الأرض لأصحابها
        </h1>
      </div>
    </section>
  );
}
