import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ProductCard({
  image,
  title,
  description,
}: ProductCardProps) {
  return (
    <article
      dir="rtl"
      className="flex h-[40rem] w-[28rem] shrink-0 flex-col overflow-hidden rounded-3xl bg-white"
    >
      <div className="relative flex-1">
        <Image
          src={image}
          alt={title}
          fill
          sizes="28rem"
          className="object-contain p-10"
        />
      </div>
      <div className="flex items-end justify-between gap-6 px-8 pb-8">
        <h3 className="font-neo text-[1.5rem] font-bold text-text">{title}</h3>
        <p className="max-w-[13rem] font-neo text-[1rem] leading-[1.5] text-subtext">
          {description}
        </p>
      </div>
    </article>
  );
}
