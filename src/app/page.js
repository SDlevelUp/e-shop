'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";
import ImageSlider from "@/components/ImageSlider";


export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  return (
<>
      <header data-header id="header" className="bg-banner-img w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <ImageSlider />
        </div>
      </header>
      </>
  );
};