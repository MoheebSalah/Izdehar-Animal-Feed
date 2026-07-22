import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  /** Absolute position, size, rotation and z-index utilities. */
  className?: string;
};

export default function GalleryImage({ src, alt, className }: GalleryImageProps) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[1.25rem] ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" />
    </div>
  );
}
