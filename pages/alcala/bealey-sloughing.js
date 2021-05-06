import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import ReactPlayer from "react-player";
import { useMediaQuery } from "../../lib/mediaQuery";

export default function BealeySloughing() {
  const isLargeScreen = useMediaQuery(`(min-width:1024px)`);
  const isMedScreen = useMediaQuery(`(min-width:768px)`);

  return (
    <Layout>
      <div className="flex-grow flex w-screen">
        {isLargeScreen ? (
          <div className="mx-auto place-self-center bg-black p-16">
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-480p.mp4"
              playing={true}
              loop={true}
              width="854px"
              height="480px"
            />
          </div>
        ) : isMedScreen ? (
          <div className="mx-auto place-self-center bg-black p-12">
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-360p.mp4"
              playing={true}
              loop={true}
              width="640px"
              height="360px"
            />
          </div>
        ) : (
          <div className="mx-auto place-self-center bg-black p-8">
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-240p.mp4"
              playing={true}
              loop={true}
              width="426px"
              height="240px"
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
