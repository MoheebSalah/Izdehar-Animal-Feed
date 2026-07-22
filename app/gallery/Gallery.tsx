import GalleryImage from "../components/GalleryImage";

export default function Gallery() {
  return (
    <section className="relative h-[118rem] w-full">
      {/* Hay storage shed — top, above the image it overlaps */}
      <GalleryImage
        src="/assets/Image Gallery/Image 5.webp"
        alt="مخزن الأعلاف والقش"
        className="left-[56.1rem] top-[-2rem] h-[24.6rem] w-[20.5rem] rotate-[4.15deg] z-30"
      />

      {/* Cow eating — top right, landscape */}
      <GalleryImage
        src="/assets/Image Gallery/Image 2.webp"
        alt="بقرة تأكل العلف"
        className="left-[71.9rem] top-[8rem] h-[20rem] w-[30rem] rotate-[-8.82deg] z-20"
      />

      {/* Lab — left */}
      <GalleryImage
        src="/assets/Image Gallery/Image 4.webp"
        alt="مختبر الجودة في مصنع ازدهار"
        className="left-[12.3rem] top-[8rem] h-[22rem] w-[32rem] rotate-[15.44deg] z-10"
      />

      {/* Pellets pouring — large, left of the title */}
      <GalleryImage
        src="/assets/Image Gallery/Image 1.webp"
        alt="حبيبات العلف تنسكب"
        className="left-[4.8rem] top-[37rem] h-[42rem] w-[46rem] rotate-[-8.82deg] z-10"
      />

      {/* Factory with silos — overlapping just below the pellets image */}
      <GalleryImage
        src="/assets/Image Gallery/Image 7.webp"
        alt="مصنع ازدهار وصوامع الحبوب"
        className="left-[26.7rem] top-[74rem] h-[20rem] w-[24rem] rotate-[4.15deg] z-20"
      />

      {/* Hands holding pellets — bottom left, lower with a gap above it */}
      <GalleryImage
        src="/assets/Image Gallery/Image 3.webp"
        alt="يدان تحملان حبيبات العلف"
        className="left-[8.2rem] top-[84rem] h-[25rem] w-[22rem] rotate-[-13.3deg] z-10"
      />

      {/* Factory building — bottom right, portrait (last image) */}
      <GalleryImage
        src="/assets/Image Gallery/Image 6.webp"
        alt="مبنى مصنع ازدهار للأعلاف"
        className="left-[61.6rem] top-[78rem] h-[40rem] w-[30rem] rotate-[-2.39deg] z-10"
      />

      {/* Title — right, middle */}
      <h2 className="absolute right-[6rem] top-[44.4rem] z-40 text-right font-palestine text-[7.5rem] leading-[1.15] text-text">
        شوف شغلنا
        <br />
        عن قرب
      </h2>
    </section>
  );
}
