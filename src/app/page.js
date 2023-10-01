'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import Carousel from "@/components/Carousel";

const images = [
  "/img/abaya-women.webp",
  "/img/qamis-men.webp",
  "/img/abaya-women2.webp",
  "/img/abaya-women2.webp",
];

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-banner-img w-full h-screen p-20">
      <header data-header id="header">
        <div className="grid max-w-screen-xl px-4 py-20 mx-suto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-montserrat tracking-tight leading-none md:text-5xl xl:text-6xl">
              Nouvelle Collection
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Découvrez notre nouvelle collection 2024 pour habiller toute la famille!
            </p>
            <button
              type="button"
              className="mt-1 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Voir la collection
            </button>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <Carousel pictures={images} />

          </div>
        </div>
      </header>
    </main >
  );
};