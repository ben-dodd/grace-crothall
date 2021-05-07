import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import ReactPlayer from "react-player";
import { useMediaQuery } from "../../lib/mediaQuery";
import { PlayArrow, Pause, VolumeOff, VolumeUp } from "react-icons/md";

export default function BealeySloughing() {
  const isLargeScreen = useMediaQuery(`(min-width:1024px)`);
  const isMedScreen = useMediaQuery(`(min-width:768px)`);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Layout>
      <div className="flex-grow flex w-screen">
        {isLargeScreen ? (
          <div className="mx-auto place-self-center bg-black p-16">
            <div className="flex">
              <button onClick={() => setIsPlaying((current) => !current)}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </button>
              <button onClick={() => setIsMuted((current) => !current)}>
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </button>
            </div>
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-480p.mp4"
              playing={isPlaying}
              loop={true}
              width="854px"
              height="480px"
              volume={1}
              muted={isMuted}
            />
          </div>
        ) : isMedScreen ? (
          <div className="mx-auto place-self-center bg-black p-12">
            <div className="flex">
              <button onClick={() => setIsPlaying((current) => !current)}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </button>
              <button onClick={() => setIsMuted((current) => !current)}>
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </button>
            </div>
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-360p.mp4"
              playing={isPlaying}
              loop={true}
              width="640px"
              height="360px"
              volume={1}
              muted={isMuted}
            />
          </div>
        ) : (
          <div className="mx-auto place-self-center bg-black p-8">
            <div className="flex">
              <button onClick={() => setIsPlaying((current) => !current)}>
                {isPlaying ? <Pause /> : <PlayArrow />}
              </button>
              <button onClick={() => setIsMuted((current) => !current)}>
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </button>
            </div>
            <ReactPlayer
              url="https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-240p.mp4"
              playing={isPlaying}
              loop={true}
              width="426px"
              height="240px"
              volume={1}
              muted={isMuted}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
