'use client';

import Products from "../data/products.json";
import Image from "next/image";
import Link from "next/link";
import Notification from "./Notification";
import FavoriteButton from "./Buttons/FavouriteButton";
import CartButton from "./Buttons/CartButton";

export default function ProductsHomePage() {
    const defaultWidth = 330;
    const defaultHeight = 290;

    return (
        <section
            className="my-14 mx-auto"
            data-section
            id="notre-selection-de-robes"
        >

            <div className="flex justify-center md:text-5xl sm:text-4xl font-serif uppercase">
                <h1>Notre selection de robes</h1>
            </div>
            <div className=" relative flex-wrap content-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 p-0 mx-auto gap-x-5 gap-y-10 w-full">
                {Products.map((product) => {
                    return (
                        <div className="flex flex-col justify-center items-center mb-14" key={product.id}>
                            <div className="mt-16" style={{ width: `${defaultWidth}px`, height: `${defaultHeight}px` }}>
                                <Link href={`/products/${product.id}`}>
                                    <div className="group relative overflow-hidden h-[330px] hover:shadow-xl rounded-xl">
                                        <Image
                                            src={product.cover}
                                            alt={product.title}
                                            width={defaultWidth}
                                            height={defaultHeight}
                                            className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                                        />
                                        <div className='absolute left-1/2 transform -translate-x-1/2 w-[40%] bg-[#c0bebe] h-0 z-10 -bottom-5 group-hover:h-[50px] group-hover:bottom-0 transition-bottom duration-500 ease-in-out mx-auto'>
                                            <div className='flex justify-center m-3 items-center gap-3  '>
                                                <CartButton />
                                                <FavoriteButton />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="font-montserrat font-semibold text-[16px] p-1 text-gray-500 leading-[142.6%] mt-2">
                                    <h2>{product.title}</h2>
                                    <span className="font-normal leading-[31.5px]">{product.price} €</span>
                                </div>
                            </div>
                            <Notification />
                        </div>
                    );
                })}
            </div >
            <div className="flex justify-center items-center bg-gray-300 mx-auto mt-24 w-full">
                <hr />
            </div>
        </section >
    );
};