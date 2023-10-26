"use client";
import Cookies from "js-cookie";
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);
    const [showCartModal, setShowCartModal] = useState(false);
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
            isAuthUser,
            setIsAuthUser,
            user,
            setUser,
            showCartModal,
            setShowCartModal,
        }}
        >
            {children}
        </GlobalContext.Provider >
    )
};