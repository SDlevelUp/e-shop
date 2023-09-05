"use client";
import { navOptions } from "@/utils";
import { Fragment, useContext, useState } from "react";
import { GlobalContext } from "@/context";
import CommonModal from "@/components/CommonModal/CommonModal";
import { useRouter, usePathname } from "next/navigation";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function NavItems({ isModalView = false, isAuthUser }) {
    const router = useRouter();

    return (
        <div
            className={`items-center justify-between w-full md:flex md:w-auto  ${isModalView ? "" : "hidden"}`}
            id="nav-items"
        >
            <ul
                className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"}`}
            >
                {isAuthUser ? (
                    <li
                        className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                        onClick={() => router.push('/account')}
                    >
                        Mon compte
                    </li>
                ) : null}
                {navOptions.map((item) => (
                    <li
                        className="cursor-pointer block py-2 pl-3 pr-4 whitespace-nowrap text-gray-900 rounded md:p-0"
                        key={item.id}
                        onClick={() => router.push(item.path)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Navbar() {
    const { showNavModal, setShowNavModal, isAuthUser } = useContext(GlobalContext);
    const router = useRouter();

    return (
        <>
            <div className="bg-white fixed z-40 w-full top-0 left-0 border-b border-gray-200 h-46">
                <header className="bg-black z-50 w-full top-0 left-0 border-b border-gray-200 fixed">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                        <div className="flex items-center cursor-pointer">
                            <span className="text-white text-sm font-semibold whitespace-nowrap animation inline-block pl-[100%] pr-[2em]">
                                Profitez de nos offres exclusives jusqu'à -50% sur une sélection d'articles jusqu'au 31 Décembre 2024* !
                            </span>
                        </div>
                    </div>
                </header>

                <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4 mt-14">
                    <div
                        onClick={() => router.push("/")}
                        className="flex items-center cursor-pointer"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            E-Shop
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        {isAuthUser && (
                            <button
                                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                onClick={() => router.push('/account')}
                            >
                                Mon compte
                            </button>
                        )}

                        <button
                            onClick={() => router.push('/login')}
                            className="
                                    rounded-full 
                                    hover:hover:bg-slate-300 
                                    hover:text-white
                                    transition 
                                    duration-300 
                                    w-9 
                                    h-9 
                                    justify-center 
                                    items-center 
                                    mt-1.5 
                                    flex 
                                    gap-1
                                "
                        >
                            <PersonOutlineIcon fontSize="medium" />
                        </button>

                        <button
                            onClick={() => router.push('/register')}
                            className="
                                    rounded-full 
                                    hover:hover:bg-slate-300 
                                    hover:text-white
                                    transition 
                                    duration-300 
                                    w-9 
                                    h-9 
                                    justify-center 
                                    items-center 
                                    mt-1.5 
                                    flex 
                                    gap-1
                                "
                        >
                            <ShoppingBagOutlinedIcon fontSize="medium" />
                        </button>

                        <button
                            onClick={() => router.push('/register')}
                            className="
                                    rounded-full 
                                    hover:hover:bg-slate-300 
                                    hover:text-white
                                    transition 
                                    duration-300 
                                    w-9 
                                    h-9 
                                    justify-center 
                                    items-center 
                                    mt-1.5 
                                    flex 
                                    gap-1
                                "
                        >
                            <FavoriteBorderOutlinedIcon fontSize="medium" />
                        </button>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-3 text-sm text-gray-500 rounded-md md:hidden hover:hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setShowNavModal(true)}
                        >
                            <span className="sr-only">Open</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <NavItems isAuthUser={isAuthUser} />
                </nav>
                <CommonModal
                    showModalTitle={false}
                    mainContent={
                        <NavItems
                            isModalView={true}
                            isAuthUser={isAuthUser}
                        />
                    }
                    show={showNavModal}
                    setShow={setShowNavModal}
                />
            </div>
        </>
    );
}