"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GlobalContext } from "@/context";
import Cookies from "js-cookie";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import SearchBar from "../SearchBar/SearchBar";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import NavLinks from "./NavLinks";
import Devises from "./DevisesDropdown";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);


    const {
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
        <nav className="bg-white p-10">
            <div className="flex items-center justify-between max-w-screen-3xl">
                <div className="z-50 items-center justify-center hidden md:flex">
                    <SearchBar />
                </div>
                <div onClick={() => setOpen(!open)}
                    className="text-2xl flex md:hidden z-50">
                    {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                </div>

                <div className="flex items-center justify-center ">
                    <h1 className="text-sm md:text-2xl text-center">Abayaty</h1>
                </div>
                <div className="flex md:order-2">
                    <button
                        onClick={() => router.push('/login')}
                        className="hover:text-slate-400 transition duration-300 items-center flex text-black ml-6"
                    >
                        <div className="flex flex-col items-center cursor-pointer">
                            <PersonIcon />
                            <span className="hidden lg:block whitespace-nowrap">Se connecter</span>
                        </div>
                    </button>

                    <button
                        onClick={() => router.push('/register')}
                        className="hover:text-slate-400 transition duration-300 items-center flex text-black md:ml-6 ml-4"
                    >
                        <div className="flex flex-col items-center">
                            <ShoppingBagIcon />
                            <span className="hidden lg:block">Panier</span>
                        </div>
                    </button>
                    <Devises />
                    {isLoggedIn && (
                        <button
                            onClick={() => handleLogout()}
                            className="text-red-500 transition duration-300 w-9 h-9 justify-center items-center flex"
                        >
                            <ExitToAppOutlinedIcon fontSize="medium" />
                        </button>
                    )}
                </div>
            </div>

            <ul className="font-montserrat font-normal md:flex hidden uppercase items-center justify-center gap-8 pt-14">
                <NavLinks />
            </ul>

            {/* Mobile nav */}
            <ul
                className={`
                    md:hidden 
                    bg-red-200
                    fixed 
                    w-full 
                    top-0 
                    z-10
                    overflow-y-auto 
                    bottom-0 
                    py-24 
                    pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
                <div className="md:flex hidden items-center justify-center mt-4">
                    <SearchBar />
                </div>
                <NavLinks className="inline-block" />

            </ul>
        </nav>
    )
};