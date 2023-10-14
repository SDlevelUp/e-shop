"use client";
import Cookies from "js-cookie";
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);
    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [subMenuData, setSubMenuData] = useState([]);


    // Utilisez useState pour surveiller l'état des cookies
    const [cookiesExist, setCookiesExist] = useState(Cookies.get("token") !== undefined);

    useEffect(() => {
        if (cookiesExist) {
            console.log("Token récupéré avec succès:", Cookies.get("token"));
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem('user')) || {};
            setUser(userData);
        } else {
            setIsAuthUser(false);
            setUser({});
        }
    }, [cookiesExist]);

    return (
        <GlobalContext.Provider value={{
            showNavModal,
            setShowNavModal,
            isAuthUser,
            setIsAuthUser,
            user,
            setUser,
            isSubMenuOpen,
            setIsSubMenuOpen,
            showSubMenu,
            setShowSubMenu,
            subMenuData,
            setSubMenuData
        }}
        >
            {children}
        </GlobalContext.Provider >
    )
};