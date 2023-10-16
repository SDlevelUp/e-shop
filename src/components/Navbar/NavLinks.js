import React from 'react'
import { navLinks } from '@/utils';
import Link from 'next/link';

export default function NavLinks() {
    return (
        <>
            {navLinks.map((link) => (
                <div key={link.id} >
                    <div>
                        <li>
                            <Link href={link.path}>
                                <h1>{link.label}</h1>
                            </Link>
                        </li>
                    </div>
                </div>
            ))}
        </>
    )
};

