'use client';

import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/context";
import classNames from "classnames";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import Promotions from "../data/promotions.json";

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

  const images = [
    "/img/abaya-women.webp",
    "/img/qamis-men.webp",
    "/img/abaya-women2.webp",
    "/img/sarwel-men.webp",
    "/img/qamis-enfant.webp",
    "/img/sarwel-men.webp",
  ];

  const customCarouselStyles = {
    ".carousel ": {
      marginTop: "20rem", 
    },
  };

  return (
    <> 
      {/* Header and banner */}
      <header
        data-header
        id="header"
        className={classNames(
          "relative flex min-h-screen justify-center items-center lg:mt-0 lg:col-span-5 lg:flex bg-no-repeat bg-cover w-full",
          {
            "bg-banner-header": !isMobile,
            "bg-banner-mobile": isMobile,
          }
        )}
        style={{ backgroundSize: isMobile ? "w-fit" : "auto cover" }}
      >
        <div className="grid max-w-screen-xl px-4 py-[5rem] mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="mr-0 place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-montserrat tracking-tight leading-none md:text-5xl xl:text-6xl">
              Nouvelle Collection
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
              Découvrez notre nouvelle collection 2024 pour habiller toute la famille!
            </p>
            <button
              type="button"
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white  hover:bg-gray-500"
            >
              Voir la collection
            </button>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex relative">
            <div className="xl:w-full lg:h-full bg-black opacity-10 pb-[10%] top-[65%] left-[65%] absolute transform -translate-x-1/2 -translate-y-1/2 -mt-12 -ml-12 shadow-md"></div>
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              dynamicHeight={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={`Image ${index}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </header>

      {/* Presentation section */}
      <section
        data-section
        id="first-section">
        <div className="">
          <div className="m-auto w-full my-10 text-center max-w-screen-xl">
            <div className="break-words m-auto w-calc-100-minus-8rem font-serif text-2xl">
              <h2>Vêtement pour la femme musulmane</h2>
              <div className="xl:w-[40rem] m-auto mt-8 text-[15px] leading-[1.5rem]">
                <p>
                  Abaya est une marque dédiée à la femme musulmane. Chez Abaya, nous vous offrons une
                  sélection exceptionnelle de modèles uniques qui allient pudeur et discrétion, tout
                  en respectant le style et la législation qui sont importants pour les femmes musulmanes.
                  Notre collection d'abayas reflète notre engagement envers vos valeurs, en proposant des
                  vêtements amples et longs qui correspondent à vos besoins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Current promotion slide */}

      <section
        className="py-8"
        data-section
        id="second-section"
      >
        <div className="">
          <Carousel
            showArrows={false}
            showStatus={false}
            dynamicHeight={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            styles={customCarouselStyles}
          >
            {Promotions.map((promotion) => (
              <div className="bg-[#aaa1a196] h-40 flex flex-col justify-center items-center"
                key={promotion.id}>
                <h2 className="text-4xl mb-3 font-montserrat">{promotion.title}</h2>
                <p className="text-white font-serif text-sm">{promotion.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>


      <section
        className=" bg-orange-100"
        data-section
        id="second-section"
      >
        <div className="bg-red-400 mt-10">Third section</div>

      </section>
    </>
  );
};