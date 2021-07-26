import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="icon" type="image/svg" href="/public/snake.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="description" content="Grace Crothall. Visual artist currently residing in Ōtautahi. b.1993."/>
      <meta property="og:title" content="Grace Crothall"/>
      <meta property="og:description" content="Grace Crothall. Visual artist currently residing in Ōtautahi. b.1993."/>
      <meta name="keywords" content="grace crothall,christchurch,artist,heat pits,alcala,snakes of new zealand,mindful marinade,painter" />
      <meta property="og:url" content="https://www.gracecrothall.com"/>
      <meta property="og:type" content="website"/>
    </Head>
  );
}
