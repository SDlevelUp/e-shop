import { useState } from "react";
import { links } from '@/utils';
import Link from 'next/link';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NavLinks({ isHover }) {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div key={link.id}>
                    <div className="px-3 text-left group link-text md:py-5 ">
                        <h1
                            className="flex justify-between items-center md:pr-0 group cursor-pointer text-white md:text-black"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                        </h1>
                        {link.submenu && (
                            <div key={link.id}>
                                <div className={`
                                        fixed
                                        lg:top-[204px]
                                        md:top-44
                                        hidden
                                        group-hover:md:block
                                        hover:md:block
                                        inset-0
                                        z-50
                                        bg-black 
                                        bg-opacity-50 
                                        backdrop-blur-sm
                                        ${isHover ? 'opacity-100' : 'opacity-1'}
                                    `}
                                >
                                    <div className="p-5 flex flex-wrap space-x-10 font-montserrat bg-without-white w-full cursor-pointer">
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.id}>
                                                <h1 className="font-semibold">
                                                    {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li key={slink.id}
                                                        className="text-sm text-gray-600 my-2.5 font-montserrat w-full inset-0 normal-case">
                                                        <Link href={slink.path}>
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div key={slinks.id}>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="py-4 font-semibold flex justify-between items-center md:pr-0 pr-5"
                                    >
                                        {slinks.Head}
                                        <span className="absolute w-[3rem] text-[2rem] h-[1.55rem] text-center z-8 right-0 leading-[1.55rem]">
                                            {subHeading === slinks.Head ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </span>
                                    </h1>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li
                                                key={slink.id}
                                                className="py-3 pl-8 -ml-[1rem]">
                                                <Link href={slink.path}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            ))}
        </>
    );
};