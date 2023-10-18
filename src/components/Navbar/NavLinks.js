import { useState } from "react";
import { links } from '@/utils';
import Link from 'next/link';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavLinks = ({ isHover }) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div key={link.id}>
                    <div className="px-3 text-left md:cursor-pointer group link-text">
                        <h1
                            className="flex justify-between items-center md:pr-0 group font-montserrat"
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
                                        top-[213px]
                                        hidden
                                        group-hover:md:block
                                        hover:md:block
                                        inset-0
                                        z-50
                                        bg-black 
                                        bg-opacity-50 
                                        backdrop-blur-sm
                                        transition-all
                                        duration-1000
                                        ${isHover ? 'opacity-100' : 'opacity-1'}
                                    `}>
                                    <div className="p-5 flex flex-wrap space-x-10 font-montserrat bg-without-white w-full">
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.id}
                                                className="text-lg font-semibold ">
                                                <h1>
                                                    {mysublinks.Head}
                                                </h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li key={slink.id}
                                                        className="text-sm text-gray-600 my-2.5 font-montserrat w-full inset-0 capitalize">
                                                        <Link
                                                            href={slink.path}
                                                            className="hover:text-primary"
                                                        >
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
                                        className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                                    >
                                        {slinks.Head}

                                        <span className="text-xl md:mt-1 md:ml-2 inline">
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
                                                className="py-3 pl-14">
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

export default NavLinks;