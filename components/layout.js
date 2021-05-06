import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Container from "./container";
import { useRouter } from "next/router";

export default function Layout({ preview, children }) {
  const router = useRouter();
  return (
    <>
      <Meta />
      <div className="flex flex-col h-screen w-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
