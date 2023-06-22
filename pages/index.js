import Link from 'next/link'
import Layout from '../components/layout'
import Show from '../components/show'
import { rootPath } from '../lib/text'

export default function Home() {
  return (
    <Layout>
      <div className="pl-4">
        <Link as={`/text`} href={`/text`} aria-label={'Grace Crothall - Text'}>
          <div className="text-2xl underline hover:text-gray-600">Text</div>
        </Link>
      </div>
      <div className="grid flex-grow sm:grid-cols-titlePage-sm md:grid-cols-titlePage-md lg:grid-cols-titlePage-lg">
        <div />
        <div className="self-start" />
        {/* <div className="self-start">
          <Show
            src={`${rootPath}/images/title-images/600px/alcala.jpg`}
            height={481}
            title="Alcala"
            date="2019"
            gallery="Alcala Motor Lodge"
            link="alcala"
          />
        </div> */}
        <div className="self-end">
          <Show
            src={`${rootPath}/images/title-images/600px/shelter-house.jpg`}
            title="Shelter House"
            date="2021"
            gallery="The Physics Room"
            link="shelter-house"
            height={401}
          />
        </div>
        {/*<div className="self-end">
          <Show
            src={`${rootPath}/images/title-images/600px/text.jpg`}
            title="Text"
            date=""
            gallery=""
            link="text"
            height={401}
          />
        </div>*/}
      </div>
    </Layout>
  )
}
