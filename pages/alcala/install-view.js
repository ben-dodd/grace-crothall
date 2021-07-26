import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Gallery from "react-grid-gallery";
import getScreenWidth from "../../lib/mediaQuery";
import { rootPath } from "../../lib/text";

export default function AlcalaInstallView() {
  const screenWidth = getScreenWidth();
  let fullWidth = "1920px";
  if (screenWidth === "xs") fullWidth = "640px";
  else if (screenWidth === "sm") fullWidth = "768px";
  else if (screenWidth === "md") fullWidth = "1024px";
  else if (screenWidth === "lg") fullWidth = "1280px";
  let thumbnailHeights = [159, 159, 362, 159, 365, 362, 159, 150];
  const images = [...Array(8).keys()].map((num) => ({
    src: `${rootPath}/images/alcala-install-view/${fullWidth}/${num + 1}.jpg`,
    thumbnail: `${rootPath}/images/alcala-install-view/240px/${num + 1}.jpg`,
    thumbnailHeight: thumbnailHeights[num],
    thumbnailWidth: 240,
    alt: "Grace Crothall"
  }));

  return (
    <Layout>
      <div className="px-1 flex-grow lg:w-1/2 mx-auto">
        <Gallery
          images={images}
          backdropClosesModal={true}
          lightboxWidth={1920}
          margin={8}
          rowHeight="120px"
        />
      </div>
    </Layout>
  );
}
