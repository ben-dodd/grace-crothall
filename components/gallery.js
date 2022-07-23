import Image from 'next/image'
import { loaderProp } from '../lib/utils'

export default function Gallery({ images, alt }) {
  return (
    <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 mx-auto">
      {images?.map((image, i) => (
        <Image
          key={i}
          alt={alt}
          src={image?.src}
          height={`${image?.thumbnailHeight * 8}px`}
          width="1920px"
          loader={loaderProp}
        />
      ))}
    </div>
  )
}
