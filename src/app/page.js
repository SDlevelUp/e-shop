'use client';
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext)
  console.log(isAuthUser);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl text-blue-100">
        homepage e-commerce website
      </div>
    </main>
  );
}