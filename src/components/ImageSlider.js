import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function ImageSlider() {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    };

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
            return updateIndexes;
        });
    };

    const images = [
        "/img/qamis-men.webp",
        "/img/abaya-women2.webp",
        "/img/qamis-men2.webp",
        "/img/abaya-women.webp",
        "/img/qamis-enfant.webp",
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-0 lg:mt-[5rem] h-screen">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="shadow-md w-[40%] md:w-[70%] lg:w-[28%] h-auto"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute' }}
                />
            ))}
            <div className="absolute bottom-[1.3rem] lg:bottom-[0.9rem]">
                <button
                    onClick={handleNext}
                    className="text-white rounded-full bg-black w-10 h-10">
                    <NavigateNextOutlinedIcon />
                </button>
            </div>
        </div>
    )
};