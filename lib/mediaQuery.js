import { useState, useEffect } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export default function getScreenWidth() {
  const widths = [
    { name: 'xs', width: 0 },
    { name: 'sm', width: 640 },
    { name: 'md', width: 768 },
    { name: 'lg', width: 1024 },
    { name: 'xl', width: 1280 },
    { name: '2xl', width: 1536 },
  ]

  let screenWidth = '2xl'

  widths.forEach((w) => {
    let match = useMediaQuery(`(min-width:${w.width}px)`)
    if (match) screenWidth = w.name
  })

  return screenWidth
}
