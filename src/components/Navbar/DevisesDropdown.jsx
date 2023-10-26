import React, { useState, useRef } from 'react';

export default function DevisesDropdown() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
        const buttonWidth = buttonRef.current.clientWidth;
        const dropdownMenu = document.getElementById('dropdownHover');
        if (dropdownMenu) {
            dropdownMenu.style.width = `${buttonWidth}px`;
        }
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const devisesList = ['CFA', 'USD', 'GBP'];

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
        >
            <button
                ref={buttonRef}
                id="dropdownHoverButton"
                className="text-black text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
            >
                EUR
                <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isDropdownOpen && (
                <div
                    id="dropdownHover"
                    className="md:w-16 w-10 absolute top-10 md:right-0 right-5"
                >
                    <ul
                        className="text-sm text-black border-[1px] border-black bg-white  "
                        aria-labelledby="dropdownHoverButton"
                    >
                        {devisesList.map((devise, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="block hover:bg-[#c0bebe]"
                                >
                                    {devise}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}