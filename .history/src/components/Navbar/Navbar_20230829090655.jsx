"use client";

export default function Navbar() {
    return (
        <>


            <nav className="bg-white fixed z-40 w-full top-0 left-0 border-b border-gray-200 h-48">

                <header className="bg-pink-500 z-50 fixed w-full top-0 left-0 border-b border-gray-200 ">
                    <div className="max-w-screen-xl flex flex-wrap align-center justify-center mx-auto p-4">
                        <div className="flex items-center cursor-pointer">
                            <span className="items-center justify-center">
                                Profitez de nos offres exclusives jusqu'à -50% sur une sélection d'articles!
                            </span>
                        </div>

                    </div>
                </header >

                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            E-Shop
                        </span>
                    </div>
                    <div className="flex md:order-2">
                        test
                    </div>
                </div>
            </nav >
        </>
    );
}