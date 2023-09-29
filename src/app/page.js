'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";


export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  return (
    <>
      <section data-section id="section-1" className="bg-banner-img w-full min-h-screen flex justify-center items-center">
        <div className="flex justify-end mr-60">
          <div className="relative">
            <Image
              src="/img/bann-img.webp"
              alt="banner"
              width={300}
              height={600}
              className="shadow-lg cursor-pointer absolute top-40 left-32 mt-20 ml-24 grow-0	"
            />
            <Image
              src="/img/bann-img2.webp"
              alt="banner"
              width={300}
              height={600}
              className="shadow-lg cursor-pointer grow-0"
            />
          </div>
        </div>
      </section>


    </>
  );
};