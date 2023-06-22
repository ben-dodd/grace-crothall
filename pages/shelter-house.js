import Layout from '../components/layout'
import Gallery from '../components/gallery'
import { rootPath } from '../lib/text'
import getScreenWidth from '../lib/mediaQuery'

export default function ShelterHouse() {
  const screenWidth = getScreenWidth()
  let fullWidth = '1920px'
  if (screenWidth === 'xs') fullWidth = '640px'
  else if (screenWidth === 'sm') fullWidth = '768px'
  else if (screenWidth === 'md') fullWidth = '1024px'
  else if (screenWidth === 'lg') fullWidth = '1280px'
  let thumbnailHeights = [
    160, 360, 159, 160, 160, 160, 160, 160, 359, 359, 160, 160, 159, 160, 160,
    159, 160, 160, 110, 160, 160, 160, 160, 336, 160, 335, 160, 96, 339, 339,
    160, 314, 160, 160, 160,
  ]
  const images = [...Array(34).keys()].map((num) => ({
    src: `${rootPath}/images/shelter-house-install-view/${fullWidth}/${
      num + 1
    }.jpg`,
    thumbnail: `${rootPath}/images/shelter-house-install-view/240px/${
      num + 1
    }.jpg`,
    thumbnailHeight: thumbnailHeights[num],
    thumbnailWidth: 240,
  }))

  return (
    <Layout>
      <div className="px-1 flex-grow">
        <Gallery images={images} alt={'Grace Crothall - Shelter House'} />
      </div>
    </Layout>
  )
}
