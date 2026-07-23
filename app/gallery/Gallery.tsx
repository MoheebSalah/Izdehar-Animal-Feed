import GalleryImage from "../components/GalleryImage";
import Parallax from "../components/Parallax";

export default function Gallery() {
  return (
    <section className="relative h-[122rem] w-full overflow-hidden">
      {/* Hay storage shed — top, above the image it overlaps */}
      <GalleryImage
        src="/assets/Image Gallery/Image 5.webp"
        alt="مخزن الأعلاف والقش"
        rotation={4.15}
        speed={80}
        className="left-[56.1rem] top-[1rem] h-[24.6rem] w-[20.5rem] z-30"
      />

      {/* Cow eating — top right, landscape */}
      <GalleryImage
        src="/assets/Image Gallery/Image 2.webp"
        alt="بقرة تأكل العلف"
        rotation={-8.82}
        speed={110}
        className="left-[71.9rem] top-[11rem] h-[20rem] w-[30rem] z-20"
      />

      {/* Lab — left */}
      <GalleryImage
        src="/assets/Image Gallery/Image 4.webp"
        alt="مختبر الجودة في مصنع ازدهار"
        rotation={15.44}
        speed={95}
        className="left-[12.3rem] top-[11rem] h-[22rem] w-[32rem] z-10"
      />

      {/* Pellets pouring — large, left of the title (lightest effect) */}
      <GalleryImage
        src="/assets/Image Gallery/Image 1.webp"
        alt="حبيبات العلف تنسكب"
        rotation={-8.82}
        speed={50}
        className="left-[4.8rem] top-[40rem] h-[42rem] w-[46rem] z-10"
      />

      {/* Factory with silos — overlapping just below the pellets image */}
      <GalleryImage
        src="/assets/Image Gallery/Image 7.webp"
        alt="مصنع ازدهار وصوامع الحبوب"
        rotation={4.15}
        speed={80}
        className="left-[26.7rem] top-[77rem] h-[20rem] w-[24rem] z-20"
      />

      {/* Hands holding pellets — bottom left, lower with a gap above it */}
      <GalleryImage
        src="/assets/Image Gallery/Image 3.webp"
        alt="يدان تحملان حبيبات العلف"
        rotation={-13.3}
        speed={130}
        className="left-[8.2rem] top-[87rem] h-[25rem] w-[22rem] z-10"
      />

      {/* Factory building — bottom right, portrait (large, light effect) */}
      <GalleryImage
        src="/assets/Image Gallery/Image 6.webp"
        alt="مبنى مصنع ازدهار للأعلاف"
        rotation={-2.39}
        speed={65}
        className="left-[61.6rem] top-[81rem] h-[40rem] w-[30rem] z-10"
      />

      {/* Title — right, middle */}
      <Parallax
        speed={140}
        className="absolute right-[6rem] top-[47.4rem] z-40"
      >
        <h2 className="text-right font-palestine text-[7.5rem] leading-[1.15] text-text">
          شوف شغلنا
          <br />
          عن قرب
        </h2>
      </Parallax>
    </section>
  );
}
