import Image from 'next/image'
import Link from 'next/link'
import { loaderProp } from '../lib/utils'

export default function Show({
  title,
  gallery,
  location,
  date,
  link,
  src,
  height,
}) {
  return (
    <Link as={`/${link}`} href={`/${link}`}>
      <a aria-label={title}>
        <div className="py-8 px-16">
          <Image
            alt={`Grace Crothall - ${title}`}
            src={src}
            width={600}
            height={height}
            className="hover:opacity-80"
            loader={loaderProp}
          />
          <div className="text-4xl font-bold text-black hover:underline">
            {title}
          </div>
          <div className="text-2xl">{date}</div>
          <div className="text-2xl">{gallery}</div>
        </div>
      </a>
    </Link>
  )
}
