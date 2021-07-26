import Head from "next/head";
import Image from "next/image";
import Show from "../components/show";
import Layout from "../components/layout";
import getScreenWidth from "../lib/mediaQuery";
import { rootPath } from "../lib/text";

export default function Home() {
  const screenWidth = getScreenWidth();
  return (
    <Layout>
      <div className="grid flex-grow sm:grid-cols-titlePage-sm md:grid-cols-titlePage-md lg:grid-cols-titlePage-lg">
        <div />
        <div className="self-start">
          <Show
            src={`${rootPath}/images/title-images/600px/alcala.jpg`}
            height={481}
            title="Alcala"
            date="2019"
            gallery="Alcala Motor Lodge"
            link="alcala"
          />
        </div>
        <div className="self-center">
          <Show
            src={`${rootPath}/images/title-images/600px/shelter-house.jpg`}
            title="Shelter House"
            date="2021"
            gallery="The Physics Room"
            link="shelterhouse"
            height={401}
          />
        </div>
        <div className="self-end">
          <Show
            src={`${rootPath}/images/title-images/600px/text.jpg`}
            title="Text"
            date=""
            gallery=""
            link="text"
            height={401}
          />
        </div>
      </div>
    </Layout>
  );
}
