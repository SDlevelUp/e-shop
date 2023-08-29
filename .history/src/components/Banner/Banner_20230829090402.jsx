"use client";

export default function Banner() {
    return (
        <>
            <header className="bg-pink-500 z- fixed w-full top-0 left-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap align-center justify-center mx-auto p-4">
                    <div className="flex items-center cursor-pointer">
                        <span className="items-center justify-center">
                            Profitez de nos offres exclusives jusqu'à -50% sur une sélection d'articles!
                        </span>
                    </div>

                </div>
            </header >
        </>
    );
}