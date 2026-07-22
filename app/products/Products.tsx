import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <section className="flex  flex-col">
      {/* Heading: label (right), title (near middle), paragraph (left) */}
      <div className="flex items-start justify-between px-10 pt-12">
        <span className="font-neo text-[1.25rem] text-text">منتجاتنا</span>
        <h2 className="me-20 font-neo text-[2rem] font-bold text-text">
          علف لكل حيوان، وتركيبة لكل مرحلة
        </h2>
        <p className="whitespace-nowrap font-neo text-[1.25rem] leading-[1.4] text-text">
          أبقار، أغنام، دجاج، حبش، وخيول, لكل واحد تركيبته
          <br />
          الخاصة. كل اللي بتحتاجه مزرعتك تحت سقف واحد.
        </p>
      </div>

      {/* Body: horizontal carousel (LTR so cards flow Animals → Horses left to
          right, with the last card cut off at the right edge). */}
      <div
        dir="ltr"
        className="no-scrollbar flex flex-1 items-stretch gap-10 overflow-x-auto px-10 py-12"
      >
        <ProductCard
          image="/assets/Products/Animals.webp"
          title="مواشي"
          description="تسمين وحليب للعجول والخراف والماعز"
        />
        <ProductCard
          image="/assets/Products/Chickens.webp"
          title="دجاج"
          description="برامج كاملة للّحم والبيّاض والفرخات"
        />
        <ProductCard
          image="/assets/Products/Cows.webp"
          title="أبقار TMR"
          description="عليقة كاملة جاهزة للأبقار الحلوب"
        />
        <ProductCard
          image="/assets/Products/Horses.webp"
          title="خيول"
          description="رقائق شعير وذرة، طاقة سهلة الهضم"
        />
      </div>
    </section>
  );
}
