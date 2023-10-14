'use client'


import { useState } from "react";

export default function Dropdown({ trigger, submenu, isOpen, onClose }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubMenuClick = (path) => {
        onClose();
        
        setModalOpen(true);
    };

    return (
        <div className={`relative ${isOpen ? "block" : "hidden"}`}>
            {trigger}
            {isOpen && submenu && Array.isArray(submenu) && submenu.length > 0 && (
                <div className="absolute top-0 left-0 w-52 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="pl-4 pt-1 space-y-1">
                        {submenu.map((item) => (
                            <li
                                key={item.id}
                                className="text-black text-[0.9rem] leading-[0.9rem] cursor-pointer hover:underline hover:underline-offset-4"
                                onClick={() => handleSubMenuClick(item.path)}
                            >
                                <span className="link-text">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
           
        </div>
    );
}