"use client";
import { adminNavOptions } from "@/utils";
import { Fragment } from "react";

//Admin connecté
const isAdminView = true;

//Utilisateur sur le site
const isAuthUser = false;

const user = {
    role: 'admin'
}

function NavItems() {
    return (
        <div className="items-center justify-between w-full md:flex md:w-auto" id="nav-items">
            <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-slate-50">
                {isAdminView
                    ? adminNavOptions.map((item) => (
                        <li
                            className="cursor-pointer block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0"
                            key={item.id}
                        >
                            {item.label}
                        </li>)
                    ) : null}
            </ul>
        </div>
    )

}
export default function Navbar() {
    return (
        <>
            <div className="bg-white fixed z-40 w-full top-0 left-0 border-b border-gray-200 h-46">
                <header className="bg-black z-50 w-full top-0 left-0 border-b border-gray-200 fixed">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                        <div className="flex items-center cursor-pointer">
                            <span className="text-white text-sm font-semibold whitespace-nowrap animation inline-block pl-[100%] pr-[2em]">
                                Profitez de nos offres exclusives jusqu'à -50% sur une sélection d'articles jusqu'au 31 Décembre 2024* !                         </span>
                        </div>
                    </div>
                </header>

                <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4 mt-14" >
                    <div className="flex items-center cursor-pointer">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            E-Shop
                        </span>
                    </div>
                    <div className="flex md:order-2 gap-2">
                        {!isAdminView && isAuthUser ? (
                            <Fragment>
                                <button>Compte</button>
                                <button>Panier</button>
                            </Fragment>
                        ) : null}
                        {
                            user?.role === 'admin' ?
                                isAdminView ? <button>Client</button> : <button>Admin</button>
                                : null
                        } {
                            isAuthUser ? <button>Déconnexion</button> : <button>Connexion</button>
                        }
                    </div>
                    <NavItems />
                </nav>
            </div>
        </>
    );
}