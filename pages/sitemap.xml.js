import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>https://www.gracecrothall.com/index</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
      <image:image>
        <image:loc>https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala.jpg</image:loc>
        <image:title>Grace Crothall - Alcala</image:title>
      </image:image>
      <image:image>
        <image:loc>https://storage.googleapis.com/grace-crothall/images/title-images/600px/shelter-house.jpg</image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-install-view.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-bealey-sloughing.jpg
        </image:loc>
        <image:title>Grace Crothall - Bealey Sloughing moving image</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/shelter-house</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/1.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/2.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/3.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/4.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/5.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/6.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/7.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/8.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/9.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/10.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/11.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/12.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/13.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/14.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/15.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/16.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/17.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/18.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/19.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/20.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/21.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/22.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/23.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/24.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/25.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/26.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/27.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/28.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/29.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/30.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/31.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/32.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/33.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/shelter-house-install-view/1920px/34.jpg
        </image:loc>
        <image:title>Grace Crothall - Shelter House</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text/building-as-body</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>
        https://www.gracecrothall.com/text/the-milk-carton-kids-of-the-80s
      </loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/bealey-sloughing</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
     <video:video>
       <video:thumbnail_loc>
         https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-bealey-sloughing.jpg
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
      <loc>https://www.gracecrothall.com/alcala/install-view</loc>
      <lastmod>2021-11-11T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/1.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/2.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/3.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/4.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/5.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/6.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/7.jpg
        </image:loc>
        <image:title>Grace Crothall - Alcala install view</image:title>
      </image:image>
      <image:image>
        <image:loc>
          https://storage.googleapis.com/grace-crothall/images/alcala-install-view/1920px/8.jpg
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
