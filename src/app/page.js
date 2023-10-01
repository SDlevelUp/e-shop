'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import Carousel from "@/components/Carousel";
const images = [
  "/img/abaya-women.webp",
  "/img/qamis-men.webp",
  "/img/abaya-women2.webp",
  "/img/abaya-women2.webp"
];

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  return (
    <>
      <header data-header id="header" className="bg-banner-img w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <Carousel pictures={images} />
        </div>
      </header>
    </>
  );
};