'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dropdown({ trigger, submenu, isOpen, onClose }) {
    const router = useRouter();

    const handleSubMenuClick = (path) => {
        onClose();
        router.push(path);
    };

    useEffect(() => {
        const handleRouteChange = () => {
            onClose();
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router, onClose]);

    return (
        <div className={`relative ${isOpen ? 'block' : 'hidden'}`}>
            {trigger}
            {isOpen && submenu && Array.isArray(submenu) && submenu.length > 0 && (
                <div className="absolute top-full left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className="pl-2 pt-1 space-y-1">
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