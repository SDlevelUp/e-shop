import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import { useState, useEffect } from 'react';

export default function NavButtons() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        setIsLoggedIn(isAuthUser);
    }, [isAuthUser]);
    return (
        <>
            <button className="flex items-center font-medium justify-around">
                <div className="flex flex-col items-center">
                    <PersonOutlineIcon fontSize="medium" />
                    <span className="leading-none inline whitespace-nowrap">Se connecter</span>
                </div>
            </button>
            <button>
                <div className="flex flex-col items-center">
                    <ShoppingBagOutlinedIcon fontSize="medium" />
                    <span className="hidden lg:block">Panier</span>
                </div>
            </button>

            {isLoggedIn && (
                <button
                    onClick={() => handleLogout()}
                    className="text-red-500 transition duration-300 w-9 h-9 justify-center items-center flex"
                >
                    <ExitToAppOutlinedIcon fontSize="medium" />
                </button>
            )}
        </>
    )
}