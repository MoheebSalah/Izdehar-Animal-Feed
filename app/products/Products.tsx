import ProductCard from "../components/ProductCard";

const livestockVarieties = [
  { code: "4006", name: "الخلطة البلدية المحببه 13% (الخلطة الشعبية)" },
  { code: "5013", name: "علف تسمين العجول 14%" },
  { code: "5001", name: "علف تسمين العجول 16%" },
  { code: "5010", name: "علف تسمين العجول 18%" },
  { code: "4007", name: "علف تسمين الخراف و الماعز 18 % سوبر" },
  { code: "4009", name: "علف تسمين الخراف و الماعز 18%سوبر + اورفاك" },
  { code: "4010", name: "علف تسمين الخراف و الماعز 21 % سوبر" },
  { code: "4011", name: "علف تسمين الخراف و الماعز 21 %سوبر + اورفاك" },
  { code: "4018", name: "علف تسمين الخراف والماعز 16 %" },
  { code: "4020", name: "خلطة تسمين أغنام 18% – حبوب مع مركز محبب" },
  { code: "4021", name: "خليط تسمين خراف 16%" },
  { code: "40011", name: "علف تسمين الجدي 19%" },
  { code: "40012", name: "علف تسمين الجدي 19% مع اورفاك" },
  { code: "5011", name: "علف ابقار حلوب 18% مكبوس" },
  { code: "4003", name: "علف انتاج الحليب للاغنام و الماعز" },
];

const chickenVarieties = [
  { code: "2003", name: "علف بادئ للدجاج اللاحم" },
  { code: "2004", name: "علف نامي للدجاج اللاحم" },
  { code: "2005", name: "علف ناهي للدجاج اللاحم" },
  { code: "3001", name: "علف للدجاج البياض 17.5% مجروش" },
  { code: "3005", name: "علف للدجاج البياض 17% مجروش" },
  { code: "3009", name: "علف للدجاج البياض 17% مجروش (مرحلة ثانية)" },
  { code: "3010", name: "علف للدجاج البياض 16% مجروش" },
  { code: "30012", name: "بياض مجروش م4 / Layer P4 Mash" },
  { code: "3006", name: "علف للدجاج البياض 17.5% محبب" },
  { code: "3007", name: "علف للدجاج البياض 17% محبب" },
  { code: "30010", name: "علف للدجاج البياض 17% محبب (مرحلة ثانية)" },
  { code: "2006", name: "علف ديكالب بادئ للفراخ البياضة" },
  { code: "2007", name: "علف ديكالب نامي للفراخ البياضة" },
  { code: "2010", name: "علف ديكالب ناهي للفراخ البياضة" },
  { code: "2008", name: "علف لوهمان بادئ للفراخ البياضة" },
  { code: "2009", name: "علف لوهمان نامي للفراخ البياضة" },
  { code: "2011", name: "علف لوهمان ناهي للفراخ البياضة" },
  { code: "30011", name: "علف تصويم فرخات" },
];

const cowVarieties = [
  { code: "5002", name: "علف ابقار حلوب TMR اخضر" },
  { code: "5003", name: "علف ابقار حلوب TMR جاف" },
  { code: "5004", name: "علف الابقار المنشفات TMR ( معاشير )" },
  { code: "5016", name: "عليقة عجول تسمين | Beef Fattening" },
];

const horseVarieties = [
  { code: "1101", name: "رقائق الشعير" },
  { code: "1102", name: "رقائق الذرة" },
];

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
          varieties={livestockVarieties}
        />
        <ProductCard
          image="/assets/Products/Chickens.webp"
          title="دجاج"
          description="برامج كاملة للّحم والبيّاض والفرخات"
          varieties={chickenVarieties}
        />
        <ProductCard
          image="/assets/Products/Cows.webp"
          title="أبقار TMR"
          description="عليقة كاملة جاهزة للأبقار الحلوب"
          varieties={cowVarieties}
        />
        <ProductCard
          image="/assets/Products/Horses.webp"
          title="خيول"
          description="رقائق شعير وذرة، طاقة سهلة الهضم"
          varieties={horseVarieties}
        />
      </div>
    </section>
  );
}
