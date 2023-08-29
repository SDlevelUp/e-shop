"use client";

export default function Banner() {
    return (
        <>
            <nav className="bg-pink-500 z-100 fixed w-full top-0 left-0 border-b border-gray-200 h-8">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <div>
                        <span className="items-center justify-center">
                            Profitez de nos offres exclusives jusqu'à -50% sur une séletcion d'articles
                        </span>
                    </div>

                </div>
            </nav >
        </>
    );
}