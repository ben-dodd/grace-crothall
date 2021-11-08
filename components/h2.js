import Link from "next/link";
import Container from "./container";

export default function h2() {
  return (
    <div className="text-4xl mx-auto md:mx-0 md:mb-8 font-bold text-black p-4 font-sans">
      <Link as={`/`} href="/">
        <a aria-label="Home">
          <h1>GRACE CROTHALL</h1>
        </a>
      </Link>
    </div>
  );
}
