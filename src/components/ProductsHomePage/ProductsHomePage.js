'use client';

import Products from "../../data/products.json";
import Image from "next/image";
import Link from "next/link";
import Notification from "../Notification";
import FavoriteButton from "../Buttons/FavouriteButton";
import CartButton from "../Buttons/CartButton";


export default function ProductsHomePage() {
    const defaultWidth = 330;
    const defaultHeight = 330;
    return (
        <div className="relative flex-wrap content-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 p-0 mx-auto gap-x-5 gap-y-0 w-full">
            {Products.map((product) => {
                return (
                    <div className="rounded-xl flex flex-col justify-center items-center mb-10" key={product.id}>
                        <div className="rounded-2xl object-cover mb-32" style={{ width: `${defaultWidth}px`, height: `${defaultHeight}px` }}>
                            <Link href={`/products/${product.id}`}>
                                <div className="bg-white max-w-[350px] group relative overflow-hidden h-[400px] hover:shadow-xl will-change-transform rounded-lg">
                                    <Image
                                        src={product.cover}
                                        alt={product.title}
                                        width={defaultWidth}
                                        height={defaultHeight}
                                        className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                                    />
                                    <div className='absolute left-1/2 transform -translate-x-1/2 w-[50%] bg-[#c0bebe] h-0 z-10 -bottom-5 group-hover:h-[50px] group-hover:bottom-0 transition-bottom duration-500 ease-in-out mx-auto'>
                                        <div className='flex justify-center m-3 items-center gap-3 '>
                                            <FavoriteButton/>
                                            <CartButton />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="font-normal text-sm leading-[142.6%] mt-2 px-2">
                                <h2 className="text-gray-900 font-normal font-roboto">{product.title}</h2>
                                <span className="font-semibold">{product.price} €</span>
                            </div>
                        </div>
                        <Notification />
                    </div>
                );
            })}
        </div>
    );
};