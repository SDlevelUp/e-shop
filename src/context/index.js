"use client";
import Cookies from "js-cookie";
import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);
    const [showCartModal, setShowCartModal] = useState(false);


    useEffect(() => {
        if (Cookies.get("token") !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem("user")) || {};
            setUser(userData);
        } else {
            setIsAuthUser(false);
            setUser({}); 
        }
    }, [Cookies]);

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