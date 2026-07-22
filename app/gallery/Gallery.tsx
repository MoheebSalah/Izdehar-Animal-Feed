import GalleryImage from "../components/GalleryImage";

export default function Gallery() {
  return (
    <section className="relative h-[170vh] w-full overflow-hidden">
      {/* Lab — top left */}
      <GalleryImage
        src="/assets/Image Gallery/Image 4.webp"
        alt="مختبر الجودة في مصنع ازدهار"
        className="left-[12.3rem] top-[13rem] h-[24rem] w-[36.3rem] -rotate-[5deg] z-10"
      />

      {/* Hay storage shed — top middle */}
      <GalleryImage
        src="/assets/Image Gallery/Image 5.webp"
        alt="مخزن الأعلاف والقش"
        className="left-[56.1rem] top-[4.8rem] h-[24.6rem] w-[20.5rem] rotate-[3deg] z-10"
      />

      {/* Cow eating — top right */}
      <GalleryImage
        src="/assets/Image Gallery/Image 2.webp"
        alt="بقرة تأكل العلف"
        className="left-[71.9rem] top-[13rem] h-[26.7rem] w-[22.6rem] rotate-[7deg] z-20"
      />

      {/* Pellets pouring — left middle, large */}
      <GalleryImage
        src="/assets/Image Gallery/Image 1.webp"
        alt="حبيبات العلف تنسكب"
        className="left-[4.8rem] top-[39rem] h-[45.9rem] w-[47.2rem] -rotate-[3deg] z-10"
      />

      {/* Factory with silos — small, middle */}
      <GalleryImage
        src="/assets/Image Gallery/Image 7.webp"
        alt="مصنع ازدهار وصوامع الحبوب"
        className="left-[26.7rem] top-[76.6rem] h-[16.4rem] w-[25.3rem] rotate-[4deg] z-30"
      />

      {/* Hands holding pellets — bottom left */}
      <GalleryImage
        src="/assets/Image Gallery/Image 3.webp"
        alt="يدان تحملان حبيبات العلف"
        className="left-[8.2rem] top-[84.9rem] h-[25.3rem] w-[24rem] -rotate-[7deg] z-20"
      />

      {/* Factory building — bottom right */}
      <GalleryImage
        src="/assets/Image Gallery/Image 6.webp"
        alt="مبنى مصنع ازدهار للأعلاف"
        className="left-[61.6rem] top-[78rem] h-[34.2rem] w-[42.4rem] rotate-[2deg] z-10"
      />

      {/* Title — right, middle */}
      <h2 className="absolute right-[4.7rem] top-[48.6rem] z-40 text-right font-palestine text-[7.5rem] leading-[1.15] text-text">
        شوف شغلنا
        <br />
        عن قرب
      </h2>
    </section>
  );
}
