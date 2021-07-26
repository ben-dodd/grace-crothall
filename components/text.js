import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Text({
  title,
  author,
  link,
}) {
  return (
    <Link as={`/text/${link}`} href={`/text/${link}`}>
      <a aria-label={title}>
        <div className="py-8 px-16">
          <div className="text-4xl font-bold text-black hover:underline">
            {title}
          </div>
          <div className="text-2xl">{author}</div>
        </div>
      </a>
    </Link>
  );
}
