'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.css";

import Image from "next/image.js";
import penderie from "public/img/products/penderie.jpg";

// import Promotions from "../data/promotions.json";
import ProductsHomePage from "../components/ProductsHomePage/ProductsHomePage.js";
import ScrollToTop from "@/components/ScrollToTop";
import Animation from "@/components/Animation/Animation.js";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);

  const images = [
    "/img/abaya-women.webp",
    "/img/qamis-men.webp",
    "/img/abaya-women2.webp",
    "/img/sarwel-men.webp",
    "/img/qamis-enfant.webp",
    "/img/sarwel-men.webp",
  ];

  // const customCarouselStyles = {
  //   ".carousel ": {
  //     marginTop: "20rem",
  //   },
  // };

  return (
    <>
      {/* Header and banner */}
      <header
        data-header
        id="header"
        className="min-h-screen flex justify-center items-center lg:mt-0 lg:col-span-5 lg:flex bg-[#e7d2d2a5] p-0 bg-banner-texture bg-no-repeat bg-cover">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 py-20 lg:grid-cols-12">
          <div className="mr-0 place-self-center lg:col-span-7" style={{ position: 'relative', paddingLeft: '1.5rem', paddingTop: '1.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 20 20" style={{ position: 'absolute', left: '0', top: '0' }}>
              <line x1="0" y1="0" x2="0" y2="120" stroke="black" strokeWidth="1" />
              <line x1="0" y1="0" x2="120" y2="0" stroke="black" strokeWidth="1" />
            </svg>
            <h1 className="max-w-2xl mb-4 text-4xl font-montserrat tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Nouvelle Collection à shopper
            </h1>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">
              <span>
                Découvrez notre nouvelle collection 2024 pour habiller toute la famille!
              </span>
            </div>
            <button className="group relative h-12 w-48 overflow-hidden bg-white text-lg shadow mb-12">
              <div className="absolute inset-0 w-3 bg-black transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Voir la collection
              </span>
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
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </header>

      <div className="bg-black w-full h-12 flex justify-center items-center overflow-hidden mb-5 mx-auto">
        <div className="flex items-center">
          <span className="text-white font-serif text-[20px] uppercase whitespace-nowrap animation inline-block pl-[100%] pr-[2em]">
            Profitez de nos offres exclusives jusqu'à -50% jusqu'au 31 Décembre 2024.
          </span>
        </div>
      </div>

      {/* Presentation paragraph */}
      <section data-section id="first-section" className="my-10">
        <div className="m-auto w-full text-center flex justify-center items-center max-w-screen-xl">
          <div className="break-words m-auto w-calc-100-minus-8rem font-serif text-2xl">
            <h2>Vêtement pour la femme musulmane</h2>
            <div className="xl:w-[40rem] m-auto mt-8 text-[15px] leading-[1.5rem]">
              <p>
                <strong>Abayaty</strong> est une marque dédiée à la femme musulmane. Chez Abayaty, nous vous offrons une
                sélection exceptionnelle de modèles uniques qui allient pudeur et discrétion, tout
                en respectant le style et la législation qui sont importants pour les femmes musulmanes.
                Notre collection d'abayas reflète notre engagement envers vos valeurs, en proposant des
                vêtements amples et longs qui correspondent à vos besoins.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <Image src={penderie} alt="Abaya penderie" className="md:w-[800px] h-full shadow-lg animation-appear" />
        </div>
        <div className="flex justify-center items-center bg-gray-300 w-[71.5%] mx-auto mt-10">
          <hr />
        </div>
      </section>

      {/* Product home page display */}
      <ProductsHomePage />
      <Animation />

      {/* Current promotion slide */}
      {/* 
      <section
        data-section
        id="second-section"
        className="my-28"
      >
        <div className="">
          <Carousel
            showArrows={false}
            showStatus={false}
            dynamicHeight={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            styles={customCarouselStyles}
          >
            {Promotions.map((promotion) => (
              <div className="bg-[#c0bebe] h-40 flex flex-col justify-center items-center"
                key={promotion.id}>
                <h2 className="md:text-2xl lg:text-4xl sm:text-sm my-3 font-montserrat">{promotion.title}</h2>
                <span className="text-white font-serif text-[15px]">{promotion.description}</span>
              </div>
            ))}
          </Carousel>
        </div>
      </section> */}
      <ScrollToTop className='z-50 fixed' />
    </>
  );
};