import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="icon" type="image/svg" href="/public/snake.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="description"
        content={`Documentation of the art practice of Grace Crothall.`}
      />
    </Head>
  );
}
