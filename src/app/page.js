'use client';

import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/context";
import classNames from "classnames";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });


  return (
    <>
      <header
        data-header
        id="header"
        className={classNames(
          "flex min-h-screen flex-col items-center justify-between p-24 lg:mt-0 lg:col-span-5 lg:flex bg-no-repeat bg-cover w-full",
          {
            "bg-banner-header": !isMobile,
            "bg-banner-mobile": isMobile,
          }
        )}
        style={{ backgroundSize: isMobile ? "w-fit" : "auto cover" }}

      >
        <div className="grid max-w-screen-xl px-4 py-[11rem] mx-auto lg:gap-8 lg:py-[15rem] lg:grid-cols-12">
          <div className="mr-0 place-self-center lg:col-span-6">
            <h1 className="max-w-1xl mb-4 text-4xl font-montserrat tracking-tight leading-none md:text-5xl xl:text-6xl">
              Nouvelle Collection
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
              Découvrez notre nouvelle collection 2024 pour habiller toute la famille!
            </p>
            <button
              type="button"
              className="mt-1 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-gray-500"
            >
              Voir la collection
            </button>
          </div>
        </div>
      </header>
      <section className="bg-white mt-8">

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16">
          TEST
        </div>

      </section>
    </>
  );
};