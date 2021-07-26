import React from "react";
import fs from "fs";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://mydomain.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  // const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //     ${staticPages
  //       .map((url) => {
  //         return `
  //           <url>
  //             <loc>${url}</loc>
  //             <lastmod>${new Date().toISOString()}</lastmod>
  //             <changefreq>monthly</changefreq>
  //             <priority>1.0</priority>
  //           </url>
  //         `;
  //       })
  //       .join("")}
  //   </urlset>
  // `;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.gracecrothall.com/index.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/shelterhouse.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text/index.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/text/building-as-body.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>
        https://www.gracecrothall.com/text/the-milk-carton-kids-of-the-80s.js
      </loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/bealey-sloughing.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/install-view.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.gracecrothall.com/alcala/snakes-of-new-zealand.js</loc>
      <lastmod>2021-07-26T12:09:30.532Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
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
