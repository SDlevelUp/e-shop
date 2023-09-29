'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import ImageSlider from "@/components/ImageSlider";


export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  return (
    <>
      <section data-section id="section-1" className="bg-banner-img w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">

          <ImageSlider />
        </div>
      </section>
    </>
  );
};