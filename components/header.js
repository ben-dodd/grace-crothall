import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { titleCase } from "../lib/text";

import { MdChevronRight } from "react-icons/md";

const convertBreadcrumb = (string) => {
  return titleCase(
    string
      .replace(/-/g, " ")
      .replace(/oe/g, "ö")
      .replace(/ae/g, "ä")
      .replace(/ue/g, "ü")
  );
};

export default function Header() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="text-4xl mx-auto sm:mx-0 font-bold text-black p-4 font-sans">
      <div className="lg:flex">
        <a href="/" className="hover:underline">
          <h1>GRACE CROTHALL </h1>
        </a>{" "}
        {breadcrumbs.map((breadcrumb, i) => (
          <div key={breadcrumb.href} className="flex items-center">
            {breadcrumb.breadcrumb && <MdChevronRight />}
            <Link href={breadcrumb.href}>
              <a className="uppercase hover:underline">
                {convertBreadcrumb(breadcrumb.breadcrumb)}
              </a>
            </Link>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
