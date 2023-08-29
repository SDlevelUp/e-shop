"use client";

export default function Navbar() {
    return (
        <>
            <div className="bg-white fixed z-40 w-full top-0 left-0 border-b border-gray-200 h-48">
                <header className="bg-pink-500 z-50 w-full top-0 left-0 border-b border-gray-200 fixed">
                    <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
                        <div className="flex items-center cursor-pointer">
                            <span className="text-white">
                                Profitez de nos offres exclusives jusqu'à -50% sur une sélection d'articles!
                            </span>
                        </div>
                    </div>
                </header>

                <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4 mt-16" >
                    <div className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            E-Shop
                        </span>
                    </div>
                    {/* Supprimez la div vide */}
                </nav>
            </div>
        </>
    );
}