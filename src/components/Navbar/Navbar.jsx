"use client";
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchBar from "../SearchBar";
import Devises from "./DevisesDropdown";
import NavLinks from "./NavLinks";
import { GlobalContext } from "@/context";
import CartModal from "../Cart/CartModal";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const { isAuthUser, setIsAuthUser, showCartModal, setShowCartModal } = useContext(GlobalContext);
    const router = useRouter();

    const handleLogout = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsAuthUser(false);
        Cookies.remove("token");
        localStorage.clear();
        router.push("/");
        toast.success('Déconnexion réussie !');
    };

    useEffect(() => {
        setIsLoggedIn(isAuthUser);
    }, [isAuthUser]);

    return (
        <nav className="bg-white md:p-10 md:pb-0 p-3 shadow-2xl z-50 fixed w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="md:flex hidden w-[260px]">
                    <SearchBar />
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-2xl text-black flex md:hidden cursor-pointer"
                >
                    <MenuOutlinedIcon />
                </div>
                <div className="text-black flex justify-between text-center text-[20px] md:text-3xl font-semibold">
                    <Link href="/">
                        <h1>
                            Abayaty
                        </h1>
                    </Link>
                </div>
                <div className="flex md:order-2">
                    <button
                        onClick={() => router.push('/login')}
                        className="hover:text-[#c0bebe] transition duration-300 items-center flex text-black ml-6"
                    >
                        <div className="flex flex-col items-center cursor-pointer">
                            <PersonIcon />
                            <span className="hidden lg:block whitespace-nowrap">Se connecter</span>
                        </div>
                    </button>

                    <button
                        onClick={() => setShowCartModal(true)}
                        className="hover:text-[#c0bebe] transition duration-300 items-center flex text-black md:ml-6 ml-4"
                    >
                        <div className="flex flex-col items-center">
                            <ShoppingBagIcon />
                            <span className="hidden lg:block">Panier</span>
                        </div>
                    </button>
                    <Devises />
                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className="hover:text-[#c0bebe] transition duration-300 w-9 h-9 justify-center items-center flex"
                        >
                            <ExitToAppOutlinedIcon fontSize="medium" />
                        </button>
                    )}
                </div>
            </div>

            <ul className="text-black font-montserrat font-normal md:flex hidden uppercase items-center justify-center pt-14" >
                <NavLinks />
            </ul>
            {/* Mobile nav */}
            <ul
                className={`
                    md:hidden 
                    bg-[#7e6666]
                    text-white
                    font-semibold
                    text-[16px]
                    fixed 
                    w-[270px] 
                    top-0 
                    z-10
                    bottom-0 
                    py-20 
                    pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
            >
                <div className="space-y-10 inline-block cursor-pointer">
                    <NavLinks

                        className="inline-block"





                    />
                    {showCartModal && <CartModal />}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;