import Image from 'next/image'

export default function Gallery({ images, alt }) {
  return (
    <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto">
      {images?.map((image, i) => (
        <Image
          key={i}
          alt={alt}
          src={image?.src}
          height={image?.thumbnailHeight * 8}
          width={1920}
          loader={({ src }) => src}
        />
      ))}
    </div>
  )
}
