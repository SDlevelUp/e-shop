'use client';
import React, { useState, useEffect } from 'react';
import { classNames } from '@/utils/classNames';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const useClient = true;

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div className="fixed bottom-2 right-2">
            <button
                type="button"
                onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100' : 'opacity-0',
                    'bg-black inline-flex items-center rounded-full p-1 text-white shadow-sm transition-opacity ',
                )}
            >
                <KeyboardArrowUpIcon className="h-8 w-8" aria-hidden="true" />
            </button>
        </div>
    );
}