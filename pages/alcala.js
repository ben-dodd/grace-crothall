import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function InstallView() {
  return (
    <Layout>
      <div className="p-4 grid md:grid-cols-alcala-md lg:grid-cols-alcala-lg flex-grow">
        <div />
        <div className="p-4">
          <Link as={`/alcala/install-view`} href={`/alcala/install-view`}>
            <a aria-label="Alcala Install View">
              <Image
                className="hover:opacity-80"
                src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-install-view.jpg"
                height="397px"
                width="600px"
              />
              <div className="text-xl">
                <i>Alcala</i> install view
              </div>
            </a>
          </Link>
        </div>
        <div className="self-center p-4">
          <Link
            as={`/alcala/snakes-of-new-zealand`}
            href={`/alcala/snakes-of-new-zealand`}
          >
            <a aria-label="Snakes of New Zealand publication">
              <Image
                className="hover:opacity-80"
                src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-snakes-of-new-zealand.jpg"
                height="749px"
                width="600px"
              />
              <div className="text-xl">
                <i>Snakes of New Zealand</i> publication
              </div>
            </a>
          </Link>
        </div>
        <div className="self-end p-4">
          <Link
            as={`/alcala/bealey-sloughing`}
            href={`/alcala/bealey-sloughing`}
          >
            <a aria-label="Bealey Sloughing moving image">
              <Image
                className="hover:opacity-80"
                src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-bealey-sloughing.jpg"
                height="480px"
                width="600px"
              />
              <div className="text-xl">
                <i>Bealey Sloughing</i> moving image
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
