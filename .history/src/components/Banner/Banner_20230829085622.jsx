"use client";

export default function Banner() {
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center cursor-pointer">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    E-Shop
                </span>
            </div>
            <div className="flex md:order-2"></div>
        </div>
    )
}