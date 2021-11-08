import Link from "next/link";
import Container from "./container";
import Image from "next/image";

export default function Gallery({ images, alt }) {
  return (
    <div className="flex flex-col">
      {images?.map((image, i) => (
        <Image
          key={i}
          alt={alt}
          src={image?.src}
          height={`${image?.thumbnailHeight * 8}px`}
          width="1920px"
        />
      ))}
    </div>
  );
}
