import Head from "next/head";
import Image from "next/image";
import Show from "../components/show";
import Layout from "../components/layout";
import getScreenWidth from "../lib/mediaQuery";

export default function Home() {
  const screenWidth = getScreenWidth();
  return (
    <Layout>
      <div className="grid sm:grid-cols-titlePage-sm md:grid-cols-titlePage-md lg:grid-cols-titlePage-lg flex-grow">
        <div />
        <div className="self-start">
          <Show
            src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala.jpg"
            height={481}
            title="Alcala"
            date="2019"
            gallery="Alcala Motor Lodge"
            link="alcala"
          />
        </div>
        <div />
        <div className="self-end">
          <Show
            src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/shelter-house.jpg"
            title="Shelter House"
            date="2021"
            gallery="The Physics Room"
            link="shelterhouse"
            height={401}
          />
        </div>
      </div>
    </Layout>
  );
}
