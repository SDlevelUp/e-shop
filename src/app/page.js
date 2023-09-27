'use client';

import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl z-50">
            Nouvelle collection!
          </h1>
          <span className="mb-6 font-light rounded-full bg-slate-200 w-52 h-52 z-40">

          </span>
        </div>
      </section>
    </main >
  );
};