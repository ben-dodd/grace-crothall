import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ preview, children }) {
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
