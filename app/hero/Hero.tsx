export default function Hero() {
  return (
    <section className="flex h-[100svh] flex-col overflow-hidden md:h-screen">
      {/* Background video — top on desktop (1728 x 835 in the design), bottom
          half on mobile. */}
      <div className="relative order-2 h-1/2 w-full shrink-0 overflow-hidden md:order-1 md:h-[70vh]">
        <video
          src="/assets/Hero/Iz Feed hero.webm"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Heading + paragraph. On desktop they sit in a row at the bottom
          (heading left, paragraph right — in RTL the first child is on the
          right, so order swaps them). On mobile they stack in the top half:
          title first, paragraph below. */}
      <div className="order-1 flex h-1/2 flex-col justify-center gap-14 px-6 md:order-2 md:h-auto md:flex-1 md:flex-row md:items-end md:justify-between md:gap-12 md:px-10 md:pb-8">
        <h1 className="order-1 font-palestine text-[2.25rem] leading-[1.4] text-text md:order-2 md:text-[4.5rem]">
          علف فلسطيني…
          <br />
          من الأرض لأصحابها
        </h1>

        <p className="order-2 font-neo text-[1rem] leading-[1.4] text-text [&_br]:hidden md:order-1 md:max-w-[43rem] md:text-[1.25rem] md:[&_br]:inline">
          من مصنعنا في ترقوميا، أكبر مصنع أعلاف في فلسطين، نصنع لمزارعكم علفًا
          متوازنًا
          <br />
          بجودة عالمية وسعر يقدّر تعب اليوم. كل كيس يخرج من هنا يعني كلفة أقل على
          <br />
          المزارع الفلسطيني، وحليبًا ولحمًا وبيضًا مصدره أرضنا، واعتمادًا أقل على
          المستورد.
        </p>
      </div>
    </section>
  );
}
