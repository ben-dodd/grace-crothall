import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import getScreenWidth from "../lib/mediaQuery";

export default function Gallery({ images, alt }) {
  const screenWidth = getScreenWidth();
  let fullWidth = "1920px";
  if (screenWidth === "xs") fullWidth = "640px";
  else if (screenWidth === "sm") fullWidth = "768px";
  else if (screenWidth === "md") fullWidth = "1024px";
  else if (screenWidth === "lg") fullWidth = "1280px";
  return (
    <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto">
      {images?.map((image, i) => (
        <Image
          key={i}
          alt={alt}
          src={image?.src}
          height={`${image?.thumbnailHeight * 8}px`}
          width={fullWidth}
        />
      ))}
    </div>
  );
}
