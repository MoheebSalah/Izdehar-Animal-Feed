import GalleryImage from "../components/GalleryImage";
import Parallax from "../components/Parallax";

export default function Gallery() {
  return (
    <section className="relative h-[46rem] w-full overflow-hidden md:h-[122rem]">
      {/* Desktop collage — authored on a 108rem-wide canvas (= 100vw at the
          design scale). Hidden on mobile, which gets its own layout below. */}
      <div className="absolute left-0 top-0 hidden h-[122rem] w-[108rem] md:block">
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
      </div>

      {/* ---------- Mobile layout — a big centered title with the images
          scattered above, below and around it ---------- */}
      <div className="relative h-full md:hidden">
        {/* Above the title */}
        <GalleryImage
          src="/assets/Image Gallery/Image 5.webp"
          alt="مخزن الأعلاف والقش"
          rotation={5}
          speed={40}
          className="left-[1rem] top-[1.5rem] h-[11rem] w-[8.5rem] z-10"
        />
        <GalleryImage
          src="/assets/Image Gallery/Image 2.webp"
          alt="بقرة تأكل العلف"
          rotation={-8}
          speed={55}
          className="right-[0.5rem] top-[3rem] h-[8rem] w-[11rem] z-20"
        />

        {/* Flanking the title */}
        <GalleryImage
          src="/assets/Image Gallery/Image 4.webp"
          alt="مختبر الجودة في مصنع ازدهار"
          rotation={12}
          speed={60}
          className="left-[0.5rem] top-[16.5rem] h-[7.5rem] w-[10rem] z-20"
        />
        <GalleryImage
          src="/assets/Image Gallery/Image 1.webp"
          alt="حبيبات العلف تنسكب"
          rotation={-7}
          speed={35}
          className="right-[0.5rem] top-[25.5rem] h-[8.5rem] w-[10rem] z-20"
        />

        {/* Below the title */}
        <GalleryImage
          src="/assets/Image Gallery/Image 7.webp"
          alt="مصنع ازدهار وصوامع الحبوب"
          rotation={5}
          speed={50}
          className="left-[1.5rem] bottom-[9.5rem] h-[7.5rem] w-[9rem] z-10"
        />
        <GalleryImage
          src="/assets/Image Gallery/Image 3.webp"
          alt="يدان تحملان حبيبات العلف"
          rotation={-12}
          speed={65}
          className="left-[1rem] bottom-[1rem] h-[9rem] w-[8rem] z-10"
        />
        <GalleryImage
          src="/assets/Image Gallery/Image 6.webp"
          alt="مبنى مصنع ازدهار للأعلاف"
          rotation={-3}
          speed={45}
          className="right-[1rem] bottom-[1rem] h-[10rem] w-[8.5rem] z-10"
        />

        {/* Title — big and centered */}
        <Parallax
          speed={40}
          className="absolute inset-x-0 top-1/2 z-40 -translate-y-1/2"
        >
          <h2 className="text-center font-palestine text-[3.25rem] leading-[1.1] text-text">
            شوف شغلنا
            <br />
            عن قرب
          </h2>
        </Parallax>
      </div>
    </section>
  );
}
