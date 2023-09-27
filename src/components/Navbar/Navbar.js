"use client";

import { navOptions } from "@/utils";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import CommonModal from "@/components/CommonModal/CommonModal";
import Cookies from "js-cookie";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


function NavItems({ isModalView = false }) {
    const router = useRouter();

    return (
        <div
            className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`}
            id="nav-items"
        >
            <ul className="flex flex-col font-medium md:flex-row md:space-x-4">
                {navOptions.map((item) => (
                    <li
                        className=" cursor-pointer block py-2 pl-3 pr-4 text-gray-900 uppercase md:p-0 hover:underline hover:underline-offset-4 "
                        key={item.id}
                        onClick={() => router.push(item.path)}
                    >
                        <span className="link-text">{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="relative mt-2 flex items-center">
            <input
                type="text"
                placeholder="Rechercher..."
                className="px-2 py-1 pr-9 border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.351-4.351M9 17a6 6 0 100-12 6 6 0 000 12z"
                    />
                </svg>
            </button>
        </div>
    );
}


export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("isLoggedIn:", isLoggedIn);

    const {
        showNavModal,
        setShowNavModal,
        user,
        setUser,
        isAuthUser,
        setIsAuthUser,
    } = useContext(GlobalContext);
    const router = useRouter();

    async function handleLogout() {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsAuthUser(false);
        setUser(null);
        Cookies.remove("token");
        localStorage.clear();
        router.push("/");

        // Afficher un toast de déconnexion réussie
        toast.success('Déconnexion réussie !');
    }

    console.log(user, isAuthUser, 'navbar');

    useEffect(() => {
        setIsLoggedIn(isAuthUser);
    }, [isAuthUser]);

    return (
        <>
            <div className="bg-gray-50 fixed z-40 w-full top-0 left-0 border-b border-gray-200 h-46">
                <header className="bg-black  w-full top-0 left-0 border-b border-gray-200 fixed">
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
                        <span className="self-center text-2xl text-black font-semibold whitespace-nowrap">
                            E-Shop
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-3">
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
                                    text-black
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
                                    text-black
                                "
                        >
                            <FavoriteBorderOutlinedIcon fontSize="medium" />
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
                                    text-black
                                "
                        >
                            <ShoppingBagOutlinedIcon fontSize="medium" />
                        </button>
                        {isLoggedIn && (
                            <button
                                onClick={() => handleLogout()}
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
                                    text-red-500
                                "
                            >
                                <ExitToAppOutlinedIcon fontSize="medium" />
                            </button>
                        )}

                        <SearchBar />
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
                    <NavItems />
                </nav>
                <CommonModal
                    showModalTitle={false}
                    mainContent={
                        <NavItems
                            isModalView={true}
                        />
                    }
                    show={showNavModal}
                    setShow={setShowNavModal}
                />
            </div>
        </>
    );
};