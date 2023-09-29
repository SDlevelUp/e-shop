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
            <ul className="flex flex-col font-medium md:flex-row md:space-x-2 whitespace-nowrap mt-2">
                {navOptions.map((item) => (
                    <li
                        className=" text-gray-light text-[0.95rem] tracking-widest font-medium leading-[0.938rem] cursor-pointer block py-2 pl-3 pr-4 uppercase md:p-0 hover:underline hover:underline-offset-4 "
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
        <div className="absolute mt-4">
            <input
                type="text"
                placeholder="Rechercher..."
                className="px-4 py-1 pr-9 border border-gray-200 rounded-lg xl:w-96 "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 "
                style={{
                    zIndex: 1,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}
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
};

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

        toast.success('Déconnexion réussie !');
    }

    console.log(user, isAuthUser, 'navbar');

    useEffect(() => {
        setIsLoggedIn(isAuthUser);
    }, [isAuthUser]);

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 shadow-md">
                <div className="px-4 py- flex justify-center inset-0 mb-12">
                    <SearchBar />
                </div>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div
                        onClick={() => router.push("/")}
                        className="flex items-center cursor-pointer"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Abaya
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        <button
                            onClick={() => router.push('/login')}
                            className="
                                    hover:text-[#aaa1a1]
                                    transition 
                                    duration-300 
                                    w-9 
                                    h-9 
                                    justify-center 
                                    items-center 
                                    mt-1
                                    flex 
                                    text-black
                                "
                        >
                            <PersonOutlineIcon fontSize="medium" />
                        </button>

                        <button
                            onClick={() => router.push('/register')}
                            className="
                            hover:text-[#aaa1a1]
                            transition 
                            duration-300 
                            w-9 
                            h-9 
                            justify-center 
                            items-center 
                            mt-1
                            flex 
                            text-black
                        "
                        >
                            <FavoriteBorderOutlinedIcon fontSize="medium" />
                        </button>

                        <button
                            onClick={() => router.push('/register')}
                            className="
                            hover:text-[#aaa1a1]
                            transition 
                            duration-300 
                            w-9 
                            h-9 
                            justify-center 
                            items-center 
                            mt-1
                            flex 
                            text-black
                        "
                        >
                            <ShoppingBagOutlinedIcon fontSize="medium" />
                        </button>
                        {isLoggedIn && (
                            <button
                                onClick={() => handleLogout()}
                                className="
                                    text-red-500
                                    transition 
                                    duration-300 
                                    w-9 
                                    h-9 
                                    justify-center 
                                    items-center 
                                    mt-1.5 
                                    flex 
                                "
                            >
                                <ExitToAppOutlinedIcon fontSize="medium" />
                            </button>
                        )}

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-black md:hidden hover:bg-gray-100 mt-0.5"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => setShowNavModal(true)}
                        >
                            <span className="sr-only">Open main menu</span>
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
                </div>
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
        </>
    );
};