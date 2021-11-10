import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>https://www.gracecrothall.com/index.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
      <image:image>
        <image:loc>https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Ftitle-images%2F600px%2Falcala.jpg&amp;w=1200&amp;q=75</image:loc>
        <image:title>Grace Crothall - Alcala</image:title>
      </image:image>
      <image:image>
        <image:loc>https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Ftitle-images%2F600px%2Fshelter-house.jpg&amp;w=1200&amp;q=75</image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Ftitle-images%2F600px%2Falcala-install-view.jpg&amp;w=1200&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Ftitle-images%2F600px%2Falcala-bealey-sloughing.jpg&amp;w=828&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Bealey Sloughing moving image</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/shelterhouse.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F1.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F2.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F3.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F4.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F5.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F6.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F7.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F8.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F9.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F10.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F11.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F12.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F13.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F14.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F15.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F16.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F17.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F18.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F19.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F20.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F21.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F22.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F23.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F24.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F25.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F26.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F27.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F28.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F29.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F30.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F31.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F32.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F33.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Fshelter-house-install-view%2F1920px%2F34.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text/index.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text/building-as-body.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>
        https://www.gracecrothall.com/text/the-milk-carton-kids-of-the-80s.js
      </loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/bealey-sloughing.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
     <video:video>
       <video:thumbnail_loc>
         https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Ftitle-images%2F600px%2Falcala-bealey-sloughing.jpg&amp;w=828&amp;q=75
       </video:thumbnail_loc>
       <video:title>Grace Crothall - Bealey Sloughing moving image</video:title>
       <video:description>CRT video installation</video:description>
       <video:content_loc>
         https://storage.googleapis.com/grace-crothall/video/bealey-sloughing-480p.mp4
       </video:content_loc>
       <video:duration>353</video:duration>
       <video:family_friendly>yes</video:family_friendly>
       <video:live>no</video:live>
     </video:video>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/install-view.js</loc>
      <lastmod>2021-11-08T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F1.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F2.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F3.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F4.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F5.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F6.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F7.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://www.gracecrothall.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fgrace-crothall%2Fimages%2Falcala-install-view%2F1920px%2F8.jpg&amp;w=3840&amp;q=75
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
    </url>
  </urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
