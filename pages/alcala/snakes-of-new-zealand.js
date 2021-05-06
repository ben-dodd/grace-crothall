import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function SnakesOfNewZealand() {
  return (
    <Layout>
      <div className="flex-grow flex w-screen">
        <div className="mx-auto p-10 w-1/5">
          <Image
            src="https://storage.googleapis.com/grace-crothall/images/title-images/600px/alcala-snakes-of-new-zealand.jpg"
            height="749px"
            width="600px"
          />
          <div className="text-xl">
            <i>Snakes of New Zealand</i> publication
          </div>
        </div>
      </div>
    </Layout>
  );
}
